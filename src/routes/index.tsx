import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/zarys/Header";
import { Hero } from "@/components/zarys/Hero";
import { Solutions } from "@/components/zarys/Solutions";
import { Team } from "@/components/zarys/Team";
import { Story } from "@/components/zarys/Story";
import { Contact } from "@/components/zarys/Contact";
import { Footer } from "@/components/zarys/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zarys — Estruturando seu crescimento" },
      {
        name: "description",
        content:
          "Zarys é uma holding e consultoria de tecnologia de excelência, com foco em HealthTech, IA nativa e segurança rigorosa de dados. Lançamento em 2026.",
      },
      { property: "og:title", content: "Zarys — Estruturando seu crescimento" },
      {
        property: "og:description",
        content:
          "Consultoria e soluções de altíssimo nível em tecnologia e saúde. Lançamento em 2026.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Team />
        <Story />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
