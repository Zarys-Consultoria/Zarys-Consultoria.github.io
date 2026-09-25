import { Compass, Rocket, Target } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";
import simboloContorno from "@/assets/brand/zarys-simbolo-contorno.svg";

export function Story() {
  return (
    <>
      <section id="historia" className="py-28 md:py-36 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <Eyebrow>Nossa história</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-petroleo max-w-3xl">
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
                text: "Ser uma consultoria referência na criação de soluções que não apenas geram resultados, mas que servem às pessoas e deixam um legado de valor para a criação e para os negócios.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="rounded-2xl bg-white border border-border p-7 h-full hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-petroleo flex items-center justify-center">
                    <s.icon className="text-ciano" size={22} aria-hidden />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                    {s.year}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-petroleo">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="ambicoes" className="relative overflow-hidden py-28 md:py-36 bg-petroleo">
        <Image
          src={simboloContorno}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-32 w-[34rem] opacity-25 md:-right-10"
        />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <Eyebrow tone="light">Nossas ambições</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Ditar o novo padrão de <span className="text-amarelo">excelência</span> em tecnologia.
            </h2>
            <p className="mt-8 text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              A Zarys não é um projeto. Não é um software único. É uma holding e um ecossistema
              construído para redefinir o que o mercado entende por usabilidade, segurança e
              inteligência aplicada.
            </p>
            <div className="mt-10 mx-auto max-w-md gradient-divider" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
