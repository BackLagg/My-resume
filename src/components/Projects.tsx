import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    id: 1,
    image: "Admin.jpg",
    tags: ["Telegram Mini App", "React", "TypeScript", "Node.js"],
    link: "https://t.me/ElitLegionBot",
    github: "#"
  },
  {
    id: 2,
    image: "Finn.jpg",
    tags: ["MERN", "Redux", "MongoDB", "Redis", "Render"],
    link: "https://t.me/MuFinnBot",
    github: "https://github.com/BackLagg/Finn-app"
  },
  {
    id: 3,
    image: "Furn.jpg",
    tags: ["MERN", "Redux", "MongoDB", "Redis", "Render"],
    link: "https://furnai.ru/home",
    github: "#"
  }
];

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-wider uppercase mb-2"
            >
              {t("projects.sectionLabel")}
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              {t("projects.title")}
            </motion.h3>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            {t("projects.archiveLink")} <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-10 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 group relative rounded-3xl overflow-hidden glass-panel p-2">
                <div className="relative w-full aspect-16/10 sm:aspect-video rounded-2xl overflow-hidden bg-muted">
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center gap-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 hover:bg-white hover:text-black"
                    >
                      <ArrowUpRight className="w-8 h-8" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-16 h-16 rounded-full glass-panel flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-150 hover:bg-white/20"
                    >
                      <Github className="w-8 h-8" />
                    </a>
                  </div>
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${project.image}`} 
                    alt={t(`projects.items.${project.id}.title`)}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex gap-3 mb-6 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl md:text-4xl font-display font-bold mb-4">{t(`projects.items.${project.id}.title`)}</h4>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t(`projects.items.${project.id}.description`)}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
                  >
                    {t("projects.readCaseStudy")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
