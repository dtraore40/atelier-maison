
import SectionHeading from "./SectionHeading";
import Image from "next/image";

export default function About() {
  return (
    <section id="apropos" className="bg-[#e8e3da] px-6 py-24 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-300">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            alt="Intérieur contemporain baigné de lumière naturelle"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            quality={80}
            className="object-cover"
          />
        </div>

        <div className="py-4 lg:py-10">
          <SectionHeading
            eyebrow="Notre philosophie"
            title="L'élégance se trouve dans l'essentiel."
            description="Nous croyons que chaque intérieur doit raconter une histoire personnelle. Notre approche privilégie les matières naturelles, la lumière et les détails qui traversent le temps."
          />

          <div className="mt-8 border-t border-stone-400 pt-6">
            <p className="text-sm leading-7 text-stone-700">
              De la première rencontre à la réalisation finale, nous travaillons
              à vos côtés pour transformer vos idées en espaces cohérents,
              fonctionnels et durables.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex border-b border-stone-800 pb-2 text-sm font-medium text-stone-900 transition-colors hover:border-stone-500"
            >
              Faisons connaissance ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
