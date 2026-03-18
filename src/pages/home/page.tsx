import { Navbar } from "@/widgets/navbar/ui/navbar";
import { Hero } from "@/widgets/Hero/ui/Hero";
import { About } from "@/widgets/About/ui/About";
import { Skills } from "@/widgets/Skills/ui/Skills";
import { Projects } from "@/widgets/Projects/ui/Projects";
import { Contact } from "@/widgets/contact/ui/contact";
import { Footer } from "@/widgets/Footer/ui/Footer";

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

