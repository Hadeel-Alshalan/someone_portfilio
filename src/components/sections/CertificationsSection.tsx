import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { dictionary, certificationsData } from '../../context/dictionary';
import { motion } from 'framer-motion';
import { Award, Cloud, Cpu, ExternalLink } from 'lucide-react';
import { DocumentModal } from '../effects/DocumentModal';

export const CertificationsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = dictionary[language];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<{ title: string; issuer: string } | null>(null);

  const getCategoryTitle = (catKey: string) => {
    switch (catKey) {
      case 'cloud':
        return t.certifications.categories.cloud;
      case 'ml':
        return t.certifications.categories.ml;
      case 'specialty':
        return t.certifications.categories.specialty;
      default:
        return catKey;
    }
  };

  const getCategoryIcon = (catKey: string) => {
    switch (catKey) {
      case 'cloud':
        return <Cloud className="w-5 h-5 text-neon-cyan" />;
      case 'ml':
        return <Cpu className="w-5 h-5 text-neon-violet" />;
      case 'specialty':
        return <Award className="w-5 h-5 text-neon-pink" />;
      default:
        return <Award className="w-5 h-5 text-neon-cyan" />;
    }
  };

  const handleOpenCert = (title: string, issuer: string) => {
    setSelectedCert({ title, issuer });
    setModalOpen(true);
  };

  // Group certifications by category key
  const categories = Array.from(new Set(certificationsData.map(c => c.category)));

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-semibold uppercase tracking-wider">
            {t.certifications.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            {t.certifications.title}
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mt-4 leading-relaxed font-cairo">
            {t.certifications.description}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories loop */}
        <div className="space-y-12">
          {categories.map((catKey) => {
            const list = certificationsData.filter(c => c.category === catKey);
            
            return (
              <div key={catKey} className="space-y-6">
                
                {/* Category Title */}
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  {getCategoryIcon(catKey)}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                    {getCategoryTitle(catKey)}
                  </h3>
                </div>

                {/* Certifications Grid inside Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {list.map((cert, certIdx) => {
                    let borderColorHoverClass = 'hover:border-neon-cyan/40';
                    let shadowGlowClass = 'hover:shadow-neon-cyan-glow';
                    let iconGlowClass = 'group-hover:text-neon-cyan group-hover:bg-neon-cyan/5';
                    let textGlowClass = 'group-hover:text-neon-cyan';
                    let linkGlowClass = 'group-hover:text-neon-cyan';

                    if (cert.category === 'ml') {
                      borderColorHoverClass = 'hover:border-neon-violet/40';
                      shadowGlowClass = 'hover:shadow-neon-violet-glow';
                      iconGlowClass = 'group-hover:text-neon-violet group-hover:bg-neon-violet/5';
                      textGlowClass = 'group-hover:text-neon-violet';
                      linkGlowClass = 'group-hover:text-neon-violet';
                    } else if (cert.category === 'specialty') {
                      borderColorHoverClass = 'hover:border-neon-pink/40';
                      shadowGlowClass = 'hover:shadow-neon-pink-glow';
                      iconGlowClass = 'group-hover:text-neon-pink group-hover:bg-neon-pink/5';
                      textGlowClass = 'group-hover:text-neon-pink';
                      linkGlowClass = 'group-hover:text-neon-pink';
                    }

                    let glowColorRgb = '0, 240, 255'; // default cyan
                    if (cert.category === 'ml') {
                      glowColorRgb = '160, 51, 255';
                    } else if (cert.category === 'specialty') {
                      glowColorRgb = '255, 0, 160';
                    }

                    return (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: certIdx * 0.1 }}
                        onClick={() => handleOpenCert(language === 'ar' ? cert.titleAr : cert.title, cert.issuer)}
                        className={`glass-card p-5 sm:p-6 rounded-xl border border-white/5 flex items-center justify-between hover:-translate-y-1.5 hover:scale-[1.015] ${borderColorHoverClass} ${shadowGlowClass} hover:bg-white/[0.03] transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                      >
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

                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-white/5 border border-white/10 text-white/40 ${iconGlowClass} transition-all`}>
                            <Award className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`font-display text-sm sm:text-base font-bold text-white leading-snug ${textGlowClass} transition-colors`}>
                              {language === 'ar' ? cert.titleAr : cert.title}
                            </h4>
                            <p className="text-xs text-white/40 font-mono mt-1">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                        <ExternalLink className={`w-4 h-4 text-white/20 ${linkGlowClass} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Verification Dialog Modal */}
      {selectedCert && (
        <DocumentModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          docTitle={selectedCert.title}
          docIssuer={selectedCert.issuer}
        />
      )}

    </section>
  );
};
