"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logoZarys from "@/assets/brand/zarys-logo.svg";

const links = [
  { href: "#solucoes", label: "O que fazemos" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#historia", label: "Nossa História" },
  { href: "#ambicoes", label: "Ambições" },
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
        <a href="#top" className="flex items-center" aria-label="Zarys — início">
          <Image src={logoZarys} alt="Zarys" priority className="h-7 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 text-[0.95rem] font-medium tracking-tight text-grafite/80 hover:text-grafite transition-colors group"
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
          className="hidden md:inline-flex items-center rounded-full bg-petroleo text-white px-5 py-2 text-sm font-semibold hover:bg-petroleo/90 transition"
        >
          Fale conosco
        </a>

        <button
          className="md:hidden p-2 -mr-2 text-grafite"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white/95">
          <nav className="px-6 py-4 flex flex-col gap-1" aria-label="Principal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-grafite"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-petroleo text-white px-5 py-3 text-sm font-semibold"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
