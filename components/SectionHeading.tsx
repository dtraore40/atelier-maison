
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p
        className={`mb-4 text-xs font-medium uppercase tracking-[0.25em] ${
          light ? "text-stone-400" : "text-stone-500"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-stone-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-7 ${
            light ? "text-stone-300" : "text-stone-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
