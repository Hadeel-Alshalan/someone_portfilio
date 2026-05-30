import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { dictionary, experienceData } from '../../context/dictionary';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const t = dictionary[language];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-neon-violet/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-semibold uppercase tracking-wider">
            {t.experience.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            {t.experience.title}
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mt-4 leading-relaxed font-cairo">
            {t.experience.description}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 [dir='rtl']:border-l-0 [dir='rtl']:border-r-2 [dir='rtl']:border-white/10 ml-4 mr-0 [dir='rtl']:mr-4 [dir='rtl']:ml-0 space-y-12">
          {experienceData.map((item, idx) => {
            
            // Set colors dynamically
            let iconBgClass = 'bg-neon-cyan/20 border-neon-cyan/50 text-neon-cyan';
            let glowShadowClass = 'group-hover:shadow-neon-cyan-glow';
            let hoverBorderClass = 'group-hover:border-neon-cyan/30';

            if (item.color === 'violet') {
              iconBgClass = 'bg-neon-violet/20 border-neon-violet/50 text-neon-violet';
              glowShadowClass = 'group-hover:shadow-neon-violet-glow';
              hoverBorderClass = 'group-hover:border-neon-violet/30';
            } else if (item.color === 'pink') {
              iconBgClass = 'bg-neon-pink/20 border-neon-pink/50 text-neon-pink';
              glowShadowClass = 'group-hover:shadow-neon-pink-glow';
              hoverBorderClass = 'group-hover:border-neon-pink/30';
            }

            let glowColorRgb = '0, 240, 255'; // default cyan
            if (item.color === 'violet') {
              glowColorRgb = '160, 51, 255';
            } else if (item.color === 'pink') {
              glowColorRgb = '255, 0, 160';
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 pr-0 [dir='rtl']:pl-0 [dir='rtl']:pr-8 group"
              >
                {/* Timeline Bullet Node */}
                <div className={`absolute top-0 left-0 -translate-x-1/2 [dir='rtl']:left-auto [dir='rtl']:right-0 [dir='rtl']:translate-x-1/2 w-10 h-10 rounded-xl border flex items-center justify-center ${iconBgClass} transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 z-10`}>
                  <Briefcase className="w-5 h-5" />
                </div>

                {/* Timeline Card */}
                <div className={`glass-card p-6 sm:p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.015] ${hoverBorderClass} ${glowShadowClass} relative overflow-hidden`}>
                  {/* Dynamic Backlight Glow: Projects color behind the card onto page background */}
                  <div 
                    className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[inherit] pointer-events-none blur-[40px]"
                    style={{
                      background: `radial-gradient(circle, rgba(${glowColorRgb}, 0.22) 0%, transparent 70%)`,
                      transform: 'scale(1.1)',
                    }}
                  />
                  
                  {/* Soft color spotlight inside the card */}
                  <div 
                    className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit] pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, rgba(${glowColorRgb}, 0.08) 0%, transparent 80%)`,
                    }}
                  />
                  
                  {/* Meta Tags */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3 text-xs sm:text-sm font-mono text-white/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-neon-cyan" />
                      <span>{language === 'ar' ? item.periodAr : item.period}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-neon-pink" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                    {language === 'ar' ? item.titleAr : item.title}
                  </h3>
                  <p className="text-sm font-semibold text-neon-cyan mb-4 font-mono">
                    {language === 'ar' ? item.companyAr : item.company}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed font-cairo font-light">
                    {language === 'ar' ? item.descriptionAr : item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
