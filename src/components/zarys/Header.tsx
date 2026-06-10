import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoZarys from "../../images/logo-zarys.png";

const links = [
  { href: "#solucoes", label: "O que fazemos" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#historia", label: "Nossa História" },
  { href: "#ambicoes", label: "Ambições" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 glass-header transition-shadow ${
        scrolled ? "shadow-sm border-b border-border" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group" aria-label="Zarys">
          <img src={logoZarys} alt="Zarys Logo" className="h-9 w-7 object-contain mix-blend-multiply" />
          <span 
            className="tracking-tight text-3xl mt-1 text-brand-yellow" 
            style={{ fontFamily: "'Bodoni XT', serif" }}
          >
            ZARYS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 text-[0.95rem] font-medium tracking-tight text-foreground/80 hover:text-foreground transition-colors group"
            >
              {l.label}
              <span
                className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
                style={{ background: "var(--gradient-divider)" }}
                aria-hidden
              />
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Fale conosco
        </a>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
