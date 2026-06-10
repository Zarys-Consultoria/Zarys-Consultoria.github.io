import { Reveal } from "./Reveal";
import logoZarys from "../../images/logo-zarys.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--brand-yellow) 14%, transparent), transparent 70%), radial-gradient(50% 40% at 50% 100%, color-mix(in oklab, #09D2EE 12%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-12">
            <img
              src={logoZarys}
              alt="Símbolo da Zarys"
              className="w-36 sm:w-40 md:w-60 lg:w-56 h-auto object-contain select-none mix-blend-multiply"
              draggable="false"
            />

            <div className="flex flex-col items-center justify-center w-full md:w-auto">
              <h1
                className="m-0 p-0 leading-none tracking-tight text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] text-brand-yellow select-none text-center"
                style={{ fontFamily: "'Bodoni XT', serif" }}
              >
                ZARYS
              </h1>

              <p
                className="text-sm sm:text-base md:text-4xl lg:text-[1.6rem] tracking-[0.14em] text-[#09D2EE] uppercase block w-full text-center -mt-2 md:-mt-1"
                style={{ 
                  fontFamily: "'Archivo', sans-serif", 
                  fontWeight: 900,
                  WebkitTextStroke: "1px #09D2EE"
                }}
              >
                Estruturando seu crescimento
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-16 md:mt-24 text-lg md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto text-center leading-relaxed">
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
