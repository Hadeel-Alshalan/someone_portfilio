import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { dictionary, researchData } from '../../context/dictionary';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowUpRight } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const { language } = useLanguage();
  const t = dictionary[language];

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-semibold uppercase tracking-wider">
            {t.research.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            {t.research.title}
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mt-4 leading-relaxed font-cairo">
            {t.research.description}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink mx-auto mt-4 rounded-full" />
        </div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchData.map((paper, idx) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-neon-violet/30 hover:shadow-neon-violet-glow transition-all duration-300 group relative overflow-hidden"
            >
              {/* Dynamic Backlight Glow: Projects color behind the card onto page background */}
              <div 
                className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[inherit] pointer-events-none blur-[40px]"
                style={{
                  background: `radial-gradient(circle, rgba(160, 51, 255, 0.22) 0%, transparent 70%)`,
                  transform: 'scale(1.1)',
                }}
              />
              
              {/* Soft color spotlight inside the card */}
              <div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(160, 51, 255, 0.08) 0%, transparent 80%)`,
                }}
              />
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-neon-cyan" />
                    <span>{paper.year}</span>
                  </div>
                  <BookOpen className="w-5 h-5 text-white/20 group-hover:text-neon-violet transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-neon-cyan transition-colors">
                  {language === 'ar' ? paper.titleAr : paper.title}
                </h3>
                <p className="text-xs text-neon-violet font-semibold font-mono mb-4">
                  {paper.journal}
                </p>

                {/* Abstract Description */}
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-cairo font-light mb-6">
                  {language === 'ar' ? paper.descriptionAr : paper.description}
                </p>
              </div>

              {/* View paper CTA link */}
              <a
                href={paper.link}
                className="w-fit flex items-center gap-1 text-xs font-semibold text-white/70 hover:text-white group/link transition-colors cursor-pointer"
              >
                <span>{language === 'ar' ? 'اقرأ الورقة كاملة' : 'Read Full Document'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
