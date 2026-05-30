import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { dictionary } from '../context/dictionary';
import { Menu, X, Globe } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = dictionary[language];
  
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'contact', label: t.nav.contact }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scroll state
      setScrolled(window.scrollY > 20);

      // Scroll Spy
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 backdrop-blur-md bg-dark-bg/85 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Name */}
          <div className="flex-shrink-0 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group" onClick={() => scrollTo('hero')}>
            <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-white">
              RAYYAN<span className="text-neon-cyan neon-glow-text-cyan group-hover:text-neon-cyan transition-colors duration-300">.AI</span>
            </span>
          </div>
 
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4 [dir='rtl']:space-x-reverse">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(0,240,255,0.15)] cursor-pointer ${
                  activeSection === link.id
                    ? 'text-neon-cyan font-bold scale-105 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-white/60 hover:text-neon-cyan hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
 
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan hover:-translate-y-0.5 hover:scale-105 hover:shadow-neon-cyan-glow transition-all duration-200 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>{t.language.switchTo}</span>
            </button>
          </div>
 
          {/* Mobile Menu Button & Language Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-white/15 bg-white/5 text-white/90 hover:border-neon-cyan/50 hover:text-neon-cyan hover:-translate-y-0.5 hover:scale-105 hover:shadow-neon-cyan-glow transition-all duration-150 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
 
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-white hover:border-neon-cyan/50 hover:text-neon-cyan hover:-translate-y-0.5 hover:scale-105 hover:shadow-neon-cyan-glow transition-all duration-150 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card border-t border-white/10 py-6 px-4 flex flex-col space-y-3 bg-dark-bg/95 shadow-2xl backdrop-blur-xl animate-[fadeIn_0.2s_ease-out]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-start px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer ${
                activeSection === link.id
                  ? 'bg-neon-cyan/10 text-neon-cyan font-bold border-l-2 border-neon-cyan [dir="rtl"]:border-l-0 [dir="rtl"]:border-r-2 [dir="rtl"]:border-neon-cyan'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
