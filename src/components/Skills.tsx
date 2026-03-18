import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SKILLS = [
  { category: "Frontend", items: ["React", "TypeScript", "SCSS", "MUI", "RTK/RTK Query", "TanStack Query", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "Prisma", "Redis"] },
  { category: "Tools & Design", items: ["Git", "Docker", "Nginx", "VPS", "Figma", "Vercel", "AWS", "Jest"] }
];

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-32 relative bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wider uppercase mb-2"
          >
            {t("skills.sectionLabel")}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            {t("skills.title")}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-colors"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h4 className="text-2xl font-display font-bold mb-6 text-foreground relative z-10">
                {group.category}
              </h4>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {group.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Endless scrolling marquee could go here for tools, keeping it simpler with grid for now */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale"
        >
           {/* Placeholder for tool logos using text for simplicity without external image assets */}
           {["Vercel", "Github", "Figma"].map(brand => (
             <span key={brand} className="text-xl md:text-2xl font-bold tracking-widest uppercase">{brand}</span>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
