import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, FileUser, Github, Linkedin, Send } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

const STAGGER_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
} satisfies Variants;

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/40 to-background" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={STAGGER_CHILD_VARIANTS} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">
              {t("hero.subtitle")}
            </span>
          </motion.div>

          <motion.h1 
            variants={STAGGER_CHILD_VARIANTS}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] tracking-tight mb-6"
          >
            <Trans
              t={t}
              i18nKey="hero.title"
              components={{
                br: <br className="hidden md:block" />,
                highlight: <span className="bg-gradient-text" />
              }}
            />
          </motion.h1>

          <motion.p 
            variants={STAGGER_CHILD_VARIANTS}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div variants={STAGGER_CHILD_VARIANTS} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a 
              href="#projects"
              className="group relative px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              {t("hero.primaryCta")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#"
              className="px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2 rounded-full glass-panel font-medium text-foreground hover:bg-white/10 transition-all duration-300"
            >
              <Download className="w-5 h-5 text-muted-foreground" />
              {t("hero.secondaryCta")}
            </a>
          </motion.div>

          <motion.div variants={STAGGER_CHILD_VARIANTS} className="mt-16 flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/BackLagg" },
              { icon: Send, href: "https://t.me/ARSY_NN" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/arseny-bahur-17836a222" },
              { icon: FileUser, href: "https://rabota.by/resume/ed61a523ff0dea4eac0039ed1f4b5458505773" }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 translate-y-[10px] flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
