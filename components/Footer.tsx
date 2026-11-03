import { ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaPinterestP } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const contact = {
  email: "contact@ateliermaison.example",
  address: "Paris, France",
};

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ton-compte",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ton-entreprise",
    icon: FaLinkedin,
  },
  {
      label: "Pinterest",
      href: "https://www.pinterest.com/ton-compte",
      icon: FaPinterestP,
    },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 px-6 py-16 sm:h-94 text-white sm:py-12 lg:px-12">
        <div className="mx-auto max-w-7xl">

            {/* Accroche et contact */}
            <div className="flex flex-col gap-8 border-b border-white/15 pb-12 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#c1b29e]">
                        Un projet en tête ?
                    </p>

                    <h2 className="mt-4 max-w-xl text-3xl font-light leading-tight sm:text-4xl">
                        Donnons vie à votre prochain espace.
                    </h2>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-white/60">
                        Échangeons autour de vos envies et imaginons ensemble
                        un intérieur qui vous ressemble.
                    </p>
                </div>

                <div className="sm:shrink-0">
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#c1b29e]">
                        Contact
                    </p>
                    <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-3 border border-white/50 px-5 py-4 text-sm transition-colors hover:bg-white hover:text-stone-950"
                    >
                        <Mail size={17} />
                        {contact.email}
                        <ArrowUpRight size={16} />
                    </a>

                    {/* Réseaux sociaux */}
                    <div className="mt-5 flex items-center gap-5 sm:justify-end">
                        {socials.map((social) => {
                            const Icon = social.icon;

                            return (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Atelier Maison sur ${social.label}`}
                                className="text-white/50 transition-colors hover:text-white"
                            >
                                <Icon size={19} />
                            </a>
                            );
                        })}
                    </div>
                    {/* Localisation */}
                    <div className="mt-5 w-fit flex sm:ml-auto gap-2 text-xs text-white/50 transition-colors">
                        <p>Architecture intérieure </p>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Paris%2C%20France"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit flex ml-auto gap-2 text-xs text-white/50 transition-colors hover:text-white"
                        >   
                            <MapPin size={14} />
                            {contact.address}
                        </a>
                    </div>
                    
                </div>
            </div>

            {/* Informations complémentaires */}
            <div className="flex flex-col gap-5 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">

                <p>© {currentYear} Atelier Maison. Tous droits réservés.</p>

                <a href="/mentions-legales" 
                className="transition-colors hover:text-white"
                >
                    Mentions légales
                </a>

                <a
                href="/politique-de-confidentialite"
                className="transition-colors hover:text-white"
                >
                Confidentialité
                </a>

                <a
                href="#accueil"
                className="flex w-fit items-center gap-2 transition-colors hover:text-white"
                >
                    Retour en haut
                    <ArrowUp size={14} />
                </a>
            </div>

        </div>
    </footer>
  );
}
