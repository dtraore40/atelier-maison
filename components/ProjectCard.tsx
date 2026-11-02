import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  location: string;
  image: string;
  number: string;
};

export default function ProjectCard({
  title,
  category,
  location,
  image,
  number,
}: ProjectCardProps) {
  return (
    <article className="group">
      <a
        href="#contact"
        className="block"
        aria-label={`Demander des informations sur le projet ${title}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
          <Image
            src={image}
            alt={`Intérieur présenté dans le projet ${title}`}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 50vw"
            quality={80}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 bg-white/90 px-3 py-2 text-xs text-stone-800">
            {number}
          </span>

          <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-900 transition-transform duration-300 group-hover:rotate-45">
            ↗
          </span>
        </div>

        <div className="flex items-start justify-between gap-4 pt-5">
          <div>
            <h3 className="text-xl font-medium tracking-tight text-stone-900">
              {title}
            </h3>

            <p className="mt-2 text-sm text-stone-500">
              {category} · {location}
            </p>
          </div>
        </div>
      </a>
    </article>
  );
}
