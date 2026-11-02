import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-svh items-center overflow-hidden bg-stone-900"
    >
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          preload
          className="object-cover object-center"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(20,18,15,0.78), rgba(20,18,15,0.15))",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-12">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-stone-300">
          Architecture intérieure · Paris
        </p>

        <h1 className="max-w-4xl text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Des espaces
          <br />
          pensés pour
          <br />
          <span className="font-serif italic">mieux vivre.</span>
        </h1>

        <p className="mt-8 max-w-lg text-base leading-7 text-white/75 sm:text-base">
          Nous imaginons des intérieurs intemporels, où la lumière,
          les matières et les volumes trouvent leur équilibre.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Button
            href="#projets"
            variant="secondary"
            className="border-white bg-white text-stone-900 hover:bg-stone-200"
          >
            Découvrir nos projets ↗
          </Button>

          <Button
            href="#contact"
            variant="secondary"
            className="text-sm text-white decoration-white/50 underline-offset-8 transition-colors hover:decoration-white"
          >
            Parlons de votre projet
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 hidden text-xs uppercase tracking-[0.2em] text-white/60 sm:block lg:right-12">
        Des lieux, des histoires.
      </div>
    </section>
  );
}
