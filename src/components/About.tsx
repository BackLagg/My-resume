import { motion } from "framer-motion";
import { Code2, PenTool, Zap } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  const stats = [
    { label: t("about.stats.years"), value: "2+" },
    { label: t("about.stats.projects"), value: "10+" },
    { label: t("about.stats.clients"), value: "15+" }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden border border-white/10 bg-card p-2">
              <img 
                src={`${import.meta.env.BASE_URL}images/avatar.png`}
                alt="Profile" 
                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 glass-panel rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {t("about.statusLabel")}
                  </p>
                  <p className="text-sm font-bold text-foreground">
                    {t("about.statusValue")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-primary font-medium tracking-wider uppercase mb-2">
              {t("about.sectionLabel")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              <Trans
                t={t}
                i18nKey="about.title"
                components={{
                  highlight: (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent" />
                  )
                }}
              />
            </h3>
            
            <div className="space-y-6 text-muted-foreground text-lg mb-10">
              <p>
                {t("about.paragraph1")}
              </p>
              <p>
                {t("about.paragraph2")}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <div className="flex-1 glass-panel p-6 rounded-2xl">
                <Code2 className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-xl font-bold mb-2">
                  {t("about.cards.engineering.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("about.cards.engineering.description")}
                </p>
              </div>
              <div className="flex-1 glass-panel p-6 rounded-2xl">
                <PenTool className="w-8 h-8 text-accent mb-4" />
                <h4 className="text-xl font-bold mb-2">
                  {t("about.cards.design.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("about.cards.design.description")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
