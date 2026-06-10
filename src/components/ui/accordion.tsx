import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  company: z.string().trim().min(2, "Informe sua empresa").max(150),
  message: z.string().trim().min(10, "Mensagem muito curta").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const field = (name: keyof typeof form) => ({
    value: form[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [name]: e.target.value })),
  });

  return (
    <section id="contato" className="py-28 md:py-36 bg-muted/40">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-cyan font-semibold">
              Contato
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Vamos conversar.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hospitais, clínicas e parceiros estratégicos: estamos prontos para construir
              o futuro com você.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="mt-12 rounded-2xl bg-card border border-border p-8 md:p-10 shadow-elegant"
          >
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle2 size={40} className="text-brand-cyan mx-auto" />
                <h3 className="mt-4 text-xl font-semibold">Mensagem enviada</h3>
                <p className="mt-2 text-muted-foreground">
                  Em breve entraremos em contato.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-1">
                  <label className="text-sm font-medium">Nome</label>
                  <input
                    {...field("name")}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Seu nome"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className="md:col-span-1">
                  <label className="text-sm font-medium">E-mail corporativo</label>
                  <input
                    {...field("email")}
                    type="email"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="voce@empresa.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Empresa</label>
                  <input
                    {...field("company")}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Nome da sua empresa"
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-destructive">{errors.company}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Mensagem</label>
                  <textarea
                    {...field("message")}
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90 hover:shadow-elegant transition-all"
                  >
                    Enviar mensagem
                    <Send size={16} />
                  </button>
                </div>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
