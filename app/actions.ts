
"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères.").max(100),
  email: z.email("Adresse e-mail invalide.").max(254),
  projectType: z.enum(
    ["renovation", "architecture", "amenagement", "autre"],
    { error: "Veuillez choisir un type de projet valide." }
  ),
  budget: z.enum([
    "",
    "moins-10000",
    "10000-30000",
    "30000-60000",
    "plus-60000",
  ]),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères.").max(5000),
});

const projectLabels: Record<string, string> = {
  renovation: "Rénovation complète",
  architecture: "Architecture intérieure",
  amenagement: "Aménagement sur mesure",
  autre: "Autre projet",
};

const budgetLabels: Record<string, string> = {
  "": "Non défini",
  "moins-10000": "Moins de 10 000 €",
  "10000-30000": "10 000 à 30 000 €",
  "30000-60000": "30 000 à 60 000 €",
  "plus-60000": "Plus de 60 000 €",
};

export type ContactResult = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  formData: FormData
): Promise<ContactResult> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    projectType: formData.get("projectType"),
    budget: formData.get("budget") ?? "",
    message: formData.get("message"),
  };

  const validation = contactSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      message: "Certaines informations sont invalides. Vérifiez les champs et réessayez.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.CONTACT_FROM;

  if (!apiKey || !recipient || !sender) {
    console.error("Configuration du formulaire de contact incomplète.");

    return {
      success: false,
      message: "Le service de contact est momentanément indisponible. Réessayez plus tard.",
    };
  }

  const resend = new Resend(apiKey);
  const data = validation.data;

  try {
    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: data.email,
      subject: `Nouvelle demande de contact — ${data.name}`,
      text: [
        `Nom : ${data.name}`,
        `E-mail : ${data.email}`,
        `Projet : ${projectLabels[data.projectType]}`,
        `Budget : ${budgetLabels[data.budget]}`,
        "",
        "Message :",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Échec de l'envoi du formulaire de contact.");
      return {
        success: false,
        message: "L'envoi a échoué. Veuillez réessayer ultérieurement.",
      };
    }

    return {
      success: true,
      message: "Votre demande a bien été envoyée. Nous vous remercions !",
    };
  } catch {
    console.error("Erreur inattendue pendant l'envoi du formulaire.");

    return {
      success: false,
      message: "Une erreur est survenue. Veuillez réessayer ultérieurement.",
    };
  }
}
