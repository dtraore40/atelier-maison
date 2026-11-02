
const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Expertises", href: "#expertises" },
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#apropos" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-22 bg-[#292820]/45 backdrop-blur-sm transition-colors duration-300">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12"
        aria-label="Navigation principale"
      >
        <a
          href="#accueil"
          className="text-lg font-semibold tracking-[0.16em] text-white"
        >
          ATELIER MAISON
        </a>

        <div className="hidden sm:ml-auto mr-8 gap-8 md:flex">
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

        <a
          href="#contact"
          className="border border-white/70 px-5 py-3 text-sm text-white transition-colors hover:bg-white hover:text-stone-900"
        >
          Parlons de votre projet
        </a>
      </nav>
    </header>
  );
}
