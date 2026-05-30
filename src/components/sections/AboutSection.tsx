import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { dictionary } from '../../context/dictionary';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Code2, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = dictionary[language];

  // Fictional metrics
  const statsList = [
    { value: '6+', label: t.about.stats.experience, icon: Cpu, color: 'cyan' },
    { value: '10+', label: t.about.stats.projects, icon: Code2, color: 'violet' },
    { value: '5+', label: t.about.stats.certifications, icon: Award, color: 'pink' },
    { value: '3', label: t.about.stats.papers, icon: ShieldCheck, color: 'emerald' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Background Subtle Tech Lines */}
      <div className="absolute inset-0 tech-grid opacity-[0.2] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-semibold uppercase tracking-wider">
            {t.about.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            {t.about.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-white/70 leading-relaxed font-cairo">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {t.about.subtitle}
            </h3>
            
            <p className="text-sm sm:text-base font-light">
              {t.about.paragraph1}
            </p>
            
            <p className="text-sm sm:text-base font-light">
              {t.about.paragraph2}
            </p>

            <p className="text-sm sm:text-base font-light">
              {t.about.paragraph3}
            </p>

            <p className="text-sm sm:text-base font-light">
              {t.about.paragraph4}
            </p>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {statsList.map((stat, idx) => {
              const Icon = stat.icon;
              
              // Color mappings
              let iconColorClass = 'text-neon-cyan';
              let borderColorClass = 'hover:border-neon-cyan/30';
              let glowShadowClass = 'hover:shadow-neon-cyan-glow';
              let glowColorRgb = '0, 240, 255';

              if (stat.color === 'violet') {
                iconColorClass = 'text-neon-violet';
                borderColorClass = 'hover:border-neon-violet/30';
                glowShadowClass = 'hover:shadow-neon-violet-glow';
                glowColorRgb = '160, 51, 255';
              } else if (stat.color === 'pink') {
                iconColorClass = 'text-neon-pink';
                borderColorClass = 'hover:border-neon-pink/30';
                glowShadowClass = 'hover:shadow-neon-pink-glow';
                glowColorRgb = '255, 0, 160';
              } else if (stat.color === 'emerald') {
                iconColorClass = 'text-neon-emerald';
                borderColorClass = 'hover:border-neon-emerald/30';
                glowShadowClass = 'hover:shadow-neon-emerald-glow';
                glowColorRgb = '16, 185, 129';
              }

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`glass-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between h-[160px] sm:h-[180px] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] ${borderColorClass} ${glowShadowClass} group cursor-default relative overflow-hidden`}
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
                  
                  <div className="flex items-center justify-between">
                    <Icon className={`w-8 h-8 ${iconColorClass} transition-transform duration-300 group-hover:scale-110`} />
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="text-xs sm:text-sm font-semibold text-white/50 group-hover:text-white/80 transition-colors duration-200 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
