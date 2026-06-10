// src/components/zarys/Story.tsx
import { Compass, Rocket, Target } from "lucide-react";
import { Reveal } from "./Reveal";

export function Story() {
  return (
    <>
      <section id="historia" className="py-28 md:py-36 bg-muted/40">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-brand-cyan font-semibold">
              Nossa história
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              Nossa história são Pessoas
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                year: "2026",
                title: "A Origem",
                text: "A Zarys nasce de dois amigos, irmãos em cristo com um sonho gigante: Glorificar a Deus com um trabalho que transmita excelência, ética e seriedade;",
              },
              {
                icon: Target,
                year: "Hoje",
                title: "O Desafio",
                text: "Transformar a complexidade da tecnologia e da gestão em soluções simples e eficientes para o mercado, provando que o sucesso empresarial caminha lado a lado com a integridade inegociável;",
              },
              {
                icon: Rocket,
                year: "Adiante",
                title: "O sonho",
                text: "Ser uma consultoria referência na criação de SaaS que não apenas geram resultados, mas que servem às pessoas e deixam um legado de valor para a criação e para os negócios.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="rounded-2xl bg-card border border-border p-7 h-full hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                  <s.icon className="text-brand-cyan" size={22} />
                  <p className="mt-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {s.year}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="ambicoes" className="py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-brand-cyan font-semibold">
              Nossas ambições
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Ditar o novo padrão de{" "}
              <span className="text-brand-yellow">excelência</span> em tecnologia.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A Zarys não é um projeto. Não é um software único. É uma holding e um
              ecossistema construído para redefinir o que o mercado entende por
              usabilidade, segurança e inteligência aplicada.
            </p>
            <div className="mt-10 mx-auto max-w-md gradient-divider" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
