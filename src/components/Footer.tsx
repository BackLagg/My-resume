import { ArrowUp, FileUser, Github, Linkedin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-white/10 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center text-background text-sm font-bold">
            FD
          </span>
          <span className="font-display font-bold text-lg">Frontend<span className="text-primary">.</span>dev</span>
        </div>

        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()}. {t("footer.rights")}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/BackLagg"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/ARSY_NN"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <Send className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/arseny-bahur-17836a222"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://rabota.by/resume/ed61a523ff0dea4eac0039ed1f4b5458505773"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <FileUser className="w-5 h-5" />
          </a>
          <button 
            onClick={scrollToTop}
            className="ml-4 p-3 rounded-full bg-white/5 border border-white/10 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
