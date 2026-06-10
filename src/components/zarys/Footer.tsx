import logoZarys from "../../images/logo-zarys.png";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logoZarys} alt="Zarys Logo" className="h-8 w-8 object-contain mix-blend-multiply" />
          <span 
            className="tracking-tight text-4xl text-brand-yellow mt-0.5"
            style={{ fontFamily: "'Bodoni XT', serif" }}
          >
            ZARYS
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zarys. Estruturando seu crescimento.
        </p>
      </div>
    </footer>
  );
}
