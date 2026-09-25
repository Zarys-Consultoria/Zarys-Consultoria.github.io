import { Header } from "@/components/zarys/Header";
import { Hero } from "@/components/zarys/Hero";
import { Solutions } from "@/components/zarys/Solutions";
import { Team } from "@/components/zarys/Team";
import { Story } from "@/components/zarys/Story";
import { Contact } from "@/components/zarys/Contact";
import { Footer } from "@/components/zarys/Footer";

export default function Home() {
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
