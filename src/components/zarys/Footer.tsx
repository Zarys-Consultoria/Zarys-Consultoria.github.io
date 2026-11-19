import Image from "next/image";
import logoZarys from "@/assets/brand/zarys-logo-completo-negativo.svg";

const WHATSAPP_URL = "https://wa.me/5585987734863";
const EMAIL = "contato@zarysconsultoria.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/zarys.consultoria/";
const LINKEDIN_URL = "https://www.linkedin.com/company/zarys-consultoria/";

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="6" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

const redesSociais = [
  { href: INSTAGRAM_URL, label: "Instagram", Icon: InstagramIcon },
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: LinkedInIcon },
];

const navegacao = [
  { href: "#solucoes", label: "O que fazemos" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#historia", label: "Nossa História" },
  { href: "#ambicoes", label: "Ambições" },
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
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-white/60">
              Acompanhe o Zarys
            </p>
            <div className="mt-3 flex items-center gap-4">
              {redesSociais.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:text-amarelo hover:border-amarelo transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
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
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-amarelo transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-white/60 hover:text-amarelo transition-colors"
                >
                  E-mail
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="text-xs text-white/50 space-y-1">
            <p>© {new Date().getFullYear()} Zarys Consultoria Ltda · CNPJ 64.817.120/0001-69</p>
            <p>R. Pais Leme, 215, conj. 1713, Pinheiros, São Paulo/SP, CEP 05424-150</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/50 hover:text-amarelo transition-colors whitespace-nowrap">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-amarelo transition-colors whitespace-nowrap">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
