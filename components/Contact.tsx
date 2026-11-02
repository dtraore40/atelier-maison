
"use client";

import { useState, type FormEvent } from "react";
import { submitContactForm } from "@/app/actions";

type FormData = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState(""); 
  const [isSubmitting, setIsSubmitting] = useState(false); 

  function updateField(
    field: keyof FormData,
    value: string,
  ) {
    setForm((current) => ({ ...current, [field]: value }));

    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
    ) {
    event.preventDefault();

    const formElement = event.currentTarget;

    const nextErrors: Partial<Record<keyof FormData, string>> = {};

    if (form.name.trim().length < 2) {
        nextErrors.name = "Veuillez saisir votre nom.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        nextErrors.email = "Veuillez saisir une adresse e-mail valide.";
    }

    if (!form.projectType) {
        nextErrors.projectType = "Veuillez sélectionner un type de projet.";
    }

    if (form.message.trim().length < 10) {
        nextErrors.message =
        "Votre message doit contenir au moins 10 caractères.";
    }

    setErrors(nextErrors);
    setServerMessage("");

    if (Object.keys(nextErrors).length > 0) {
        setStatus("idle");
        return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
        const result = await submitContactForm(
        new window.FormData(formElement)
        );

        setServerMessage(result.message);

        if (result.success) {
        setStatus("success");
        setForm(initialForm);
        setErrors({});
        } else {
        setStatus("error");
        }
    } catch {
        setStatus("error");
        setServerMessage(
        "Impossible d'envoyer votre demande pour le moment. Veuillez réessayer."
        );
    } finally {
        setIsSubmitting(false);
    }
  }
  
  const inputClasses = "mt-2 w-full rounded-sm border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-stone-400 focus:ring-2 focus:ring-brand/15"; 
  
  const getInputClasses = (hasError: boolean) =>
    `${inputClasses} ${
        hasError
        ? "border-red-600 focus:border-red-600 focus:ring-red-600/15"
        : "border-border focus:border-brand"
    }`;

  return (
    <section id="contact" className="bg-white px-6 py-24 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-muted">
            Parlons de votre projet
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight text-foreground sm:text-5xl">
            Imaginons ensemble votre prochain espace.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-text-muted">
            Décrivez-nous votre projet. Nous pourrons ensuite échanger
            sur vos besoins, vos envies et les prochaines étapes.
          </p>

          <div className="mt-10 space-y-4 text-sm text-foreground">
            <p>
              <span className="text-text-muted">E-mail</span>
              <br />
              contact@ateliermaison.example
            </p>

            <p>
              <span className="text-text-muted">Localisation</span>
              <br />
              Paris et Île-de-France
            </p>
          </div>
        </div>

        <div>
          {status === "success" ? (
            <div
              role="status"
              className="border border-border bg-background p-8"
            >
                {/* Icône de validation */}
                <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-medium text-foreground">
                    Merci pour votre demande !
                    </h3>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-6 w-6"
                    >
                        <path
                        d="m5 12 4 4L19 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    </div>
                </div>

              <p className="mt-3 text-sm leading-7 text-text-muted">
                Votre demande a bien été envoyée à notre équipe.
                Nous vous remercions pour votre confiance et reviendrons vers vous dans les meilleurs délais.
              </p>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 border-b border-foreground pb-1 text-sm hover:text-brand"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">

                {/* Message d'erreur en cas d'échec de l'envoi */}
                {status === "error" && (
                    <div
                    role="alert"
                    aria-live="assertive"
                    className="rounded-sm border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
                    >
                    {serverMessage}
                    </div>
                )}

              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Nom complet *
                </label>

                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={getInputClasses(Boolean(errors.name))}
                  placeholder=" Votre nom"
                  required
                />

                {errors.name && (
                  <p id="name-error" className="mt-2 flex items-start gap-2 text-sm text-red-700">
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Adresse e-mail *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={getInputClasses(Boolean(errors.email))}
                  placeholder=" vous@exemple.fr"
                  required
                />

                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-700">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="projectType" className="text-sm font-medium">
                  Type de projet *
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={(event) =>
                    updateField("projectType", event.target.value)
                  }
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={
                    errors.projectType ? "projectType-error" : undefined
                  }
                  className={getInputClasses(Boolean(errors.projectType))}
                  required
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="renovation">Rénovation complète</option>
                  <option value="architecture">Architecture intérieure</option>
                  <option value="amenagement">Aménagement sur mesure</option>
                  <option value="autre">Autre projet</option>
                </select>

                {errors.projectType && (
                  <p id="projectType-error" className="mt-2 text-sm text-red-700">
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="budget" className="text-sm font-medium">
                  Budget estimé
                </label>

                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={(event) => updateField("budget", event.target.value)}
                  className={getInputClasses(false)}
                >
                  <option value="">Non défini</option>
                  <option value="moins-10000">Moins de 10 000 €</option>
                  <option value="10000-30000">10 000 à 30 000 €</option>
                  <option value="30000-60000">30 000 à 60 000 €</option>
                  <option value="plus-60000">Plus de 60 000 €</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Parlez-nous de votre projet *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={getInputClasses(Boolean(errors.message))}
                  placeholder=" Vos besoins, vos idées, vos délais..."
                  required
                />

                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-700">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {isSubmitting
                ? "Envoi en cours..."
                : "Envoyer ma demande ↗"}
              </button>

              <p className="text-xs leading-5 text-text-muted">
                Les champs marqués d'un astérisque sont obligatoires.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
