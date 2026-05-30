import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { dictionary } from './context/dictionary';
import { CanvasBackground } from './components/effects/CanvasBackground';
import { CustomCursor } from './components/effects/CustomCursor';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { ContactSection } from './components/sections/ContactSection';
import { ArrowUp } from 'lucide-react';

const MainApp: React.FC = () => {
  const { language } = useLanguage();
  const t = dictionary[language];
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-neon-cyan/30 selection:text-white">
      {/* Cybernetic Particle Network Background */}
      <CanvasBackground />

      {/* Trailing Interactive Glowing Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphic Header */}
      <Navigation />

      {/* Structural Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ResearchSection />
        <ContactSection />
      </main>

      {/* Page Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/45 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-white/40 font-mono text-center sm:text-start">
            {t.footer.copyright}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-white/50 hover:text-neon-cyan transition-colors cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Floating Back-To-Top Node */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 hover:bg-neon-cyan hover:text-dark-bg hover:shadow-[0_0_15px_#00f0ff] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer animate-[fadeIn_0.2s_ease-out]"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
