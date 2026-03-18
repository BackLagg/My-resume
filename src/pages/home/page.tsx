import { Navbar } from "@/widgets/navbar/ui/navbar";
import { Hero } from "@/widgets/hero/ui/hero";
import { About } from "@/widgets/about/ui/about";
import { Skills } from "@/widgets/skills/ui/skills";
import { Projects } from "@/widgets/projects/ui/projects";
import { Contact } from "@/widgets/contact/ui/contact";
import { Footer } from "@/widgets/footer/ui/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

