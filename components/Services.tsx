
import SectionHeading from "./SectionHeading";

const services = [
  {
    number: "01",
    title: "Architecture intérieure",
    description:
      "Repenser les volumes, la circulation et la lumière pour révéler le potentiel de chaque espace.",
  },
  {
    number: "02",
    title: "Rénovation complète",
    description:
      "Vous accompagner de la conception initiale jusqu'aux choix des matériaux et aux finitions.",
  },
  {
    number: "03",
    title: "Mobilier sur mesure",
    description:
      "Imaginer des pièces intégrées et des rangements adaptés à votre mode de vie.",
  },
];

export default function Services() {
  return (
    <section
      id="expertises"
      className="bg-stone-100 px-6 py-24 sm:py-32 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Nos expertises"
            title="Du premier croquis au dernier détail."
            description="Nous concevons des intérieurs qui associent fonctionnalité, élégance et attention aux matières."
          />
        </div>

        <div className="border-t border-stone-300">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-3 border-b border-stone-300 py-7 sm:grid-cols-[48px_1fr] sm:gap-5"
            >
              <span className="pt-1 text-xs text-stone-500">
                {service.number}
              </span>

              <div>
                <h3 className="text-xl font-medium text-stone-900 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-stone-600 sm:text-base">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
