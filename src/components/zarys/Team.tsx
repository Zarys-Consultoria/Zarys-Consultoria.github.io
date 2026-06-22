import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Missão",
    text: "Impulsionar empresas através de SaaS inovadores e consultoria estratégica, entregando soluções de alta qualidade com integridade e excelência;",
  },
  {
    title: "Visão",
    text: "Ser referência no mercado de tecnologia e gestão, reconhecida pela solidez dos nossos produtos e pelo compromisso inabalável com a ética.",
  },
  {
    title: "Valores",
    text: "Guiados pela ética e pela excelência, transformamos o trabalho em vocação. Atuamos com total integridade e responsabilidade para criar uma inovação humana, focada em servir e desenvolver pessoas através de tecnologia inteligente.",
  },
];

export function Team() {
  return (
    <section id="quem-somos" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-cyan font-semibold">
              Quem somos
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Liderança com track record global.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Nossos profissionais acumulam experiência atendendo clientes ao redor
              do mundo — da Europa às Américas do Norte, Central e do Sul — e
              entregando soluções para grandes multinacionais em diferentes
              indústrias e mercados.
            </p>
            <div className="mt-8 max-w-sm mx-auto gradient-divider" />
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold text-foreground">
                  {p.title}
                </h3>
                <div className="mt-4 w-12 h-0.5 bg-brand-yellow" aria-hidden />
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}