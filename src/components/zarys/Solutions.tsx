import { Brain, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

const items = [
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
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-28 md:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>O que fazemos</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-petroleo">
              Consultoria e soluções em tecnologia.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Combinamos metodologia, tecnologia e inteligência de dados para criar soluções sob
              medida que aceleram o crescimento empresarial e superam qualquer desafio.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
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
