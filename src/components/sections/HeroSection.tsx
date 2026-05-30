import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { dictionary } from '../../context/dictionary';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download, BrainCircuit } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = dictionary[language];

  const handleScrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      window.scrollTo({
        top: contact.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    alert(language === 'ar' 
      ? 'جاري توليد السيرة الذاتية التفاعلية بمساحة PDF...' 
      : 'Generating interactive PDF resume...');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      
      {/* Dynamic Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-neon-cyan/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-neon-violet/10 rounded-full blur-3xl -z-10 animate-pulse-slow [animation-delay:2s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Pulsing "Available for Work" Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-xs sm:text-sm font-semibold tracking-wide mb-6 uppercase shadow-neon-cyan-glow animate-pulse"
        >
          <BrainCircuit className="w-4 h-4" />
          <span>{t.hero.badge}</span>
        </motion.div>

        {/* Large Tech Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none mb-6"
        >
          <span className="gradient-text">{t.hero.title}</span>
        </motion.h1>

        {/* Subtitle / Role Tag */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl font-semibold text-white/90 tracking-wide font-mono max-w-4xl mx-auto mb-6"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Long Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-lg text-white/60 leading-relaxed font-cairo max-w-2xl mx-auto mb-10 font-light"
        >
          {t.hero.description}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <button
            onClick={handleScrollToContact}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-white text-dark-bg hover:bg-neon-cyan hover:text-dark-bg hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_25px_#00f0ff] transition-all duration-300 cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            <span>{t.hero.contactBtn}</span>
          </button>
          
          <button
            onClick={handleDownloadCV}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold border border-white/20 bg-white/5 text-white hover:bg-neon-violet/10 hover:border-neon-violet/50 hover:text-neon-violet hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(160,51,255,0.4)] transition-all duration-300 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span>{t.hero.downloadCv}</span>
          </button>
        </motion.div>
      </div>

      {/* Downward Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer" onClick={() => {
        const about = document.getElementById('about');
        if (about) window.scrollTo({ top: about.offsetTop - 80, behavior: 'smooth' });
      }}>
        <span className="text-xs font-mono tracking-widest text-white uppercase">{t.hero.scrollDown}</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-neon-cyan" />
        </motion.div>
      </div>
    </section>
  );
};
