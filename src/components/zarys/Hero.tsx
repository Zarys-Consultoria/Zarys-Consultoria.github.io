import Image from "next/image";
import { Reveal } from "./Reveal";
import logoCompleto from "@/assets/brand/zarys-logo-completo.svg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-offwhite pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 85% 20%, color-mix(in oklab, var(--color-amarelo) 16%, transparent), transparent 70%), radial-gradient(45% 50% at 10% 100%, color-mix(in oklab, var(--color-ciano) 14%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <h1 className="mx-auto w-full max-w-4xl">
            <Image
              src={logoCompleto}
              alt="Zarys — Estruturando seu crescimento"
              priority
              className="h-auto w-full select-none"
              draggable={false}
            />
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-16 md:mt-24 text-lg md:text-2xl font-light text-muted max-w-2xl mx-auto text-center leading-relaxed">
            Vamos impulsionar o seu crescimento.
            <br />
            Prepare-se para algo novo.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-12 mx-auto max-w-md">
            <div className="gradient-divider" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
