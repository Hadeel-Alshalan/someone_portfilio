import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { dictionary, skillsData } from '../../context/dictionary';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Network } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = dictionary[language];

  // Map category to icons
  const getIcon = (category: string) => {
    switch (category) {
      case 'ai':
        return <Cpu className="w-5 h-5 text-neon-cyan" />;
      case 'cyber':
        return <Network className="w-5 h-5 text-neon-violet" />;
      case 'embedded':
        return <Terminal className="w-5 h-5 text-neon-pink" />;
      default:
        return <Cpu className="w-5 h-5 text-neon-cyan" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-semibold uppercase tracking-wider">
            {t.skills.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mt-4 leading-relaxed font-cairo">
            {t.skills.description}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((group, groupIdx) => {
            
            // Set borders based on colors
            let borderColorClass = 'hover:border-neon-cyan/30';
            let glowShadowClass = 'hover:shadow-neon-cyan-glow';
            let glowTextClass = 'text-neon-cyan';

            if (group.color === 'violet') {
              borderColorClass = 'hover:border-neon-violet/30';
              glowShadowClass = 'hover:shadow-neon-violet-glow';
              glowTextClass = 'text-neon-violet';
            } else if (group.color === 'pink') {
              borderColorClass = 'hover:border-neon-pink/30';
              glowShadowClass = 'hover:shadow-neon-pink-glow';
              glowTextClass = 'text-neon-pink';
            }

            let glowColorRgb = '0, 240, 255'; // default cyan
            if (group.color === 'violet') {
              glowColorRgb = '160, 51, 255';
            } else if (group.color === 'pink') {
              glowColorRgb = '255, 0, 160';
            }

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
                className={`group relative overflow-hidden glass-card p-6 sm:p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${borderColorClass} ${glowShadowClass} flex flex-col justify-between`}
              >
                {/* Dynamic Backlight Glow: Projects color behind the card onto page background */}
                <div 
                  className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[inherit] pointer-events-none blur-[40px]"
                  style={{
                    background: `radial-gradient(circle, rgba(${glowColorRgb}, 0.25) 0%, transparent 70%)`,
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

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {getIcon(group.category)}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white tracking-wide">
                      {language === 'ar' ? group.titleAr : group.title}
                    </h3>
                  </div>

                  {/* Skills Badges Wrapper */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border border-white/5 bg-white/[0.02] text-white/80 hover:text-white hover:border-white/15 transition-all duration-150 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Glow Line */}
                <div className={`h-1 w-12 bg-current ${glowTextClass} mt-8 rounded-full opacity-60`} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
