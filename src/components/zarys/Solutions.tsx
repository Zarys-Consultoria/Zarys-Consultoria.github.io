import { Brain, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

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
    <section id="solucoes" className="py-28 md:py-36 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-cyan font-semibold">
              O que fazemos
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Consultoria e soluções em tecnologia.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Combinamos metodologia, tecnologia e inteligência de dados para criar soluções sob medida que aceleram o crescimento empresarial e superam qualquer desafio.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <article className="h-full rounded-2xl bg-card border border-border p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <div className="h-11 w-11 rounded-xl bg-brand-yellow/15 text-foreground flex items-center justify-center">
                  <it.icon className="text-brand-cyan" size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {it.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}