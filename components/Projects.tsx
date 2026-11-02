
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "Résidence Saint-Germain",
    category: "Rénovation complète",
    location: "Paris 6e",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "Appartement Lumière",
    category: "Architecture intérieure",
    location: "Paris 11e",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Maison des Pins",
    category: "Aménagement sur mesure",
    location: "Île-de-France",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "04",
    title: "L'Atelier Contemporain",
    category: "Design intérieur",
    location: "Paris 9e",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Projects() {
  return (
    <section id="projets" className="bg-white px-6 py-24 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Notre portfolio"
            title="Des lieux uniques, des histoires singulières."
            description="Chaque projet naît d'une rencontre, d'une écoute attentive et d'une recherche d'équilibre entre esthétique et fonctionnalité."
          />

          <a
            href="#contact"
            className="w-fit border-b border-stone-400 pb-2 text-sm text-stone-800 transition-colors hover:border-stone-900"
          >
            Imaginer votre projet ↗
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:gap-x-8 lg:gap-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
