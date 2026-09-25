import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}

export function Eyebrow({ children, className = "", tone = "dark" }: EyebrowProps) {
  return (
    <span
      className={`inline-block text-xs font-bold uppercase tracking-[0.25em] ${
        tone === "dark" ? "text-petroleo" : "text-white/85"
      } ${className}`}
    >
      {children}
    </span>
  );
}
