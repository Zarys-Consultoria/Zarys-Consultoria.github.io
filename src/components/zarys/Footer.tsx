import Image from "next/image";
import logoZarys from "@/assets/brand/zarys-logo-completo-negativo.svg";

const WHATSAPP_URL = "https://wa.me/5585987734863";
const EMAIL = "contato@zarysconsultoria.com.br";

const navegacao = [
  { href: "#solucoes", label: "O que fazemos" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#historia", label: "Nossa História" },
  { href: "#ambicoes", label: "Ambições" },
];

const contato = [
  { href: WHATSAPP_URL, label: "WhatsApp", external: true },
  { href: `mailto:${EMAIL}`, label: "E-mail", external: false },
];

export function Footer() {
  return (
    <footer className="bg-grafite pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" aria-label="Zarys — voltar ao início" className="inline-block">
              <Image src={logoZarys} alt="Zarys" className="h-14 w-auto" />
            </a>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {navegacao.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/60 hover:text-amarelo transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Contato">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">Contato</h3>
            <ul className="mt-5 space-y-3">
              {contato.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/60 hover:text-amarelo transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Zarys. Estruturando seu crescimento.
          </p>
        </div>
      </div>
    </footer>
  );
}
