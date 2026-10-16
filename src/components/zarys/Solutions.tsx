"use client";

import { useState } from "react";
import { BarChart3, Workflow, Cpu, Brain, Sparkles, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

const groups = [
  {
    id: "estruturacao",
    label: "Estruturação",
    cards: [
      {
        icon: BarChart3,
        title: "Gestão",
        text: "Ajudamos sua empresa a transformar dados em decisões com indicadores e KPIs, rotinas de gestão, dashboards e acompanhamento de resultados.",
      },
      {
        icon: Workflow,
        title: "Processos",
        text: "Organizamos a operação para reduzir gargalos, retrabalho e dependência de pessoas, com mapeamento, padronização e melhoria contínua dos fluxos.",
      },
      {
        icon: Cpu,
        title: "Tecnologia",
        text: "Utilizamos tecnologia para tornar sua operação mais integrada, inteligente e eficiente, com sistemas, integrações, automação e soluções personalizadas.",
      },
    ],
  },
  {
    id: "diferenciais",
    label: "Diferenciais",
    cards: [
      {
        icon: Brain,
        title: "Inteligência Artificial nativa",
        text: "IA integrada ao núcleo do produto — não como add-on — potencializando decisões, diagnósticos e produtividade.",
      },
      {
        icon: Sparkles,
        title: "Usabilidade absoluta",
        text: "Design minimalista, rápido e intuitivo. Cada interação é pensada para reduzir atrito e elevar a experiência.",
      },
      {
        icon: ShieldCheck,
        title: "Segurança rigorosa de dados",
        text: "Conformidade com LGPD, HIPAA e os mais altos padrões legais do mercado, com criptografia ponta a ponta.",
      },
    ],
  },
];

export function Solutions() {
  const [active, setActive] = useState(0);
  const current = groups[active];

  return (
    <section id="solucoes" className="py-28 md:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>O que fazemos</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-petroleo">
              Transformamos desafios empresariais em soluções estruturadas.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Conectamos gestão, processos e tecnologia para construir uma operação preparada
              para crescer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 inline-flex rounded-full border border-border bg-white p-1">
            {groups.map((g, i) => {
              const selected = active === i;
              return (
                <button
                  key={g.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(i)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                    selected
                      ? "bg-petroleo text-white"
                      : "text-petroleo hover:text-petroleo/70"
                  }`}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={current.id} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {current.cards.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <article className="h-full rounded-2xl bg-white border border-border p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-petroleo flex items-center justify-center">
                  <it.icon className="text-ciano" size={22} aria-hidden />
                </div>
                <h3 className="mt-6 text-lg font-bold text-petroleo">{it.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{it.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
