import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t("contact.toast.title"),
        description: t("contact.toast.description")
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative bg-card/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-medium tracking-wider uppercase mb-2">
              {t("contact.sectionLabel")}
            </h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {t("contact.titlePrefix")} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                {t("contact.titleHighlight")}
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              {t("contact.description")}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-muted-foreground mb-1">
                    {t("contact.emailLabel")}
                  </h5>
                  <a href="mailto:bahur.arswork@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">
                    bahur.arswork@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-muted-foreground mb-1">
                    {t("contact.locationLabel")}
                  </h5>
                  <p className="text-xl font-bold">
                    {t("contact.locationValue")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">
                    {t("contact.form.name")}
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder={t("contact.form.namePlaceholder")}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">
                    {t("contact.form.email")}
                  </label>
                  <input 
                    required
                    type="email" 
                    placeholder={t("contact.form.emailPlaceholder")}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">
                  {t("contact.form.subject")}
                </label>
                <input 
                  required
                  type="text" 
                  placeholder={t("contact.form.subjectPlaceholder")}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">
                  {t("contact.form.message")}
                </label>
                <textarea 
                  required
                  rows={5}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
