
"use client";

import { useState } from "react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Expertises", href: "#expertises" },
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#apropos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#292820]/90  backdrop-blur-sm transition-colors duration-300">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <a
          href="#accueil"
          className="text-lg font-semibold tracking-[0.16em] text-white"
        >
          ATELIER MAISON
        </a>

        {/* Navigation desktop */}
        <div className="ml-auto mr-8 hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bouton contact desktop */}
        <a
          href="#contact"
          className="hidden border border-white/70 px-5 py-3 text-sm text-white transition-colors hover:bg-white hover:text-stone-900 md:block"
        >
          Parlons de votre projet
        </a>

        {/* Bouton hamburger mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-white md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-[#292820]/90 transition-[grid-template-rows,opacity] duration-300 md:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-70"
            : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col px-6 pb-6 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
                className="border-b border-white/10 py-4 text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
              className="mt-5 border border-white/70 px-5 py-4 text-center text-sm text-white transition-colors hover:bg-white hover:text-stone-900"
            >
              Parlons de votre projet
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
