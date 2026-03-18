import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const NAV_LINKS = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 glass-panel border-b-0" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        <a 
          href="#home" 
          className="text-2xl font-display font-bold tracking-tighter text-foreground hover:text-primary transition-colors flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center text-background text-sm">
            FD
          </span>
          Frontend<span className="text-primary">.</span>dev
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative py-2",
                activeSection === link.href.substring(1) 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t(link.key)}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(0,255,255,0.8)]"
                />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
          >
            {t("nav.cta")}
          </a>
          <div className="flex items-center gap-1 border border-white/10 rounded-full px-1 py-0.5 text-xs">
            <button
              type="button"
              onClick={() => i18n.changeLanguage("en")}
              className={cn(
                "px-2 py-1 rounded-full transition-colors",
                i18n.language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => i18n.changeLanguage("ru")}
              className={cn(
                "px-2 py-1 rounded-full transition-colors",
                i18n.language === "ru"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              RU
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10 mt-4 mx-4 rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "p-4 rounded-xl text-base font-medium transition-all",
                    activeSection === link.href.substring(1)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                <span className="text-xs text-muted-foreground">Language</span>
                <div className="flex items-center gap-1 border border-white/10 rounded-full px-1 py-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => i18n.changeLanguage("en")}
                    className={cn(
                      "px-2 py-1 rounded-full transition-colors",
                      i18n.language === "en"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => i18n.changeLanguage("ru")}
                    className={cn(
                      "px-2 py-1 rounded-full transition-colors",
                      i18n.language === "ru"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    RU
                  </button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
