import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { dictionary, projectsData } from '../../context/dictionary';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Cpu, Database, Shield, Activity, Zap, 
  TrendingUp, Check, Eye, Lock,
  ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';

// Custom GlowCard / GlassCard helper replicating the Vercel app's card styles
const GlowCard: React.FC<{
  className?: string;
  glowColor?: 'cyan' | 'violet' | 'pink' | 'emerald';
  intensity?: 'low' | 'medium' | 'high';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ className = '', glowColor = 'cyan', intensity = 'medium', children, style }) => {
  const getGlowStyles = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          borderTop: '6px solid #00f0ff',
          glowRgb: '0, 240, 255',
          boxShadow: intensity === 'high' 
            ? '0 0 50px rgba(0, 240, 255, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
            : '0 0 30px rgba(0, 240, 255, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)'
        };
      case 'violet':
        return {
          borderTop: '6px solid #a033ff',
          glowRgb: '160, 51, 255',
          boxShadow: intensity === 'high' 
            ? '0 0 50px rgba(160, 51, 255, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
            : '0 0 30px rgba(160, 51, 255, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)'
        };
      case 'pink':
        return {
          borderTop: '6px solid #ff00a0',
          glowRgb: '255, 0, 160',
          boxShadow: intensity === 'high' 
            ? '0 0 50px rgba(255, 0, 160, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
            : '0 0 30px rgba(255, 0, 160, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)'
        };
      case 'emerald':
        return {
          borderTop: '6px solid #10b981',
          glowRgb: '16, 185, 129',
          boxShadow: intensity === 'high' 
            ? '0 0 50px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
            : '0 0 30px rgba(16, 185, 129, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)'
        };
      default:
        return { borderTop: '6px solid #00f0ff', glowRgb: '0, 240, 255', boxShadow: '' };
    }
  };

  const { borderTop, glowRgb, boxShadow } = getGlowStyles(glowColor);

  return (
    <div
      className={`group glass-card transition-all duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-neon-${glowColor}-glow ${className}`}
      style={{ 
        ...style, 
        borderTop,
        boxShadow: style?.boxShadow || boxShadow 
      }}
    >
      {/* Dynamic Backlight Glow: Bleeds color *behind* the card edges onto the page background on hover */}
      <div 
        className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[inherit] pointer-events-none blur-[40px]"
        style={{
          background: `radial-gradient(circle, rgba(${glowRgb}, 0.25) 0%, transparent 70%)`,
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Soft color spotlight inside the card */}
      <div 
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit] pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(${glowRgb}, 0.08) 0%, transparent 80%)`,
        }}
      />
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-neon-${glowColor}/10 rounded-full blur-2xl -z-10 pointer-events-none`} />
      {children}
    </div>
  );
};

// Image Slider Component for expanded flagship projects
const ImageSlider: React.FC<{ images: string[]; color: string }> = ({ images, color }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getColorGlowClass = (c: string) => {
    switch (c) {
      case 'cyan': return 'shadow-[0_0_15px_#00f0ff] bg-neon-cyan';
      case 'violet': return 'shadow-[0_0_15px_#a033ff] bg-neon-violet';
      case 'pink': return 'shadow-[0_0_15px_#ff00a0] bg-neon-pink';
      case 'emerald': return 'shadow-[0_0_15px_#10b981] bg-neon-emerald';
      default: return 'shadow-[0_0_15px_#00f0ff] bg-neon-cyan';
    }
  };

  return (
    <div className="relative rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl group w-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeIndex}
          src={images[activeIndex]}
          alt={`Project screenshot ${activeIndex + 1}`}
          className="w-full h-full max-h-[70vh] object-contain mx-auto"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-black/80 transition-all z-10 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-black/80 transition-all z-10 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === activeIndex
                    ? `w-8 ${getColorGlowClass(color)}`
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// 3D Rotating Carousel Component
const ThreeDCarousel: React.FC<{ projects: typeof projectsData }> = ({ projects }) => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const activeProject = projects[activeIndex];

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const isMobile = screenWidth < 640;

  const calculateCardPosition = (relativeIndex: number) => {
    const absIndex = Math.abs(relativeIndex);
    const isCenter = relativeIndex === 0;
    const angle = relativeIndex * 25; // 25 degrees step
    const distance = isMobile ? 140 : 280;

    const xOffset = Math.sin(angle * Math.PI / 180) * distance;
    const zDepth = Math.cos(angle * Math.PI / 180) * distance - distance;

    return {
      x: xOffset,
      z: zDepth,
      rotateY: -angle * 0.6,
      scale: isCenter ? 1.15 : 0.75 - absIndex * 0.08,
      opacity: isCenter ? 1 : 0.5 - absIndex * 0.15,
      zIndex: 10 - absIndex,
      blur: isCenter ? 0 : absIndex * 2
    };
  };

  const getColorRgb = (color: string, opacity: number = 1) => {
    switch (color) {
      case 'cyan': return `rgba(0, 240, 255, ${opacity})`;
      case 'violet': return `rgba(160, 51, 255, ${opacity})`;
      case 'pink': return `rgba(255, 0, 160, ${opacity})`;
      case 'emerald': return `rgba(16, 185, 129, ${opacity})`;
      default: return `rgba(0, 240, 255, ${opacity})`;
    }
  };

  const renderIcon = (iconName: string, colorClass: string, sizeClass: string = "w-5 h-5") => {
    const props = { className: `${sizeClass} ${colorClass}` };
    switch (iconName) {
      case 'cpu': return <Cpu {...props} />;
      case 'database': return <Database {...props} />;
      case 'shield': return <Shield {...props} />;
      case 'activity': return <Activity {...props} />;
      case 'zap': return <Zap {...props} />;
      case 'lock': return <Lock {...props} />;
      case 'trending-up': return <TrendingUp {...props} />;
      case 'check': return <Check {...props} />;
      case 'eye': return <Eye {...props} />;
      default: return <Cpu {...props} />;
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* 3D Carousel Stage */}
      <div className="relative w-full h-[280px] sm:h-[400px] flex items-center justify-center mb-8 sm:mb-12" style={{ perspective: '1200px' }}>
        <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          <AnimatePresence initial={false}>
            {projects.map((project, idx) => {
              let relativeIndex = idx - activeIndex;

              // Circular wrapping
              if (relativeIndex > projects.length / 2) relativeIndex -= projects.length;
              if (relativeIndex < -projects.length / 2) relativeIndex += projects.length;

              const isCenter = relativeIndex === 0;
              const isVisible = Math.abs(relativeIndex) <= 3;
              const cardProps = calculateCardPosition(relativeIndex);

              if (!isVisible) return null;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: cardProps.opacity,
                    scale: cardProps.scale,
                    x: cardProps.x,
                    z: cardProps.z,
                    rotateY: cardProps.rotateY,
                    zIndex: cardProps.zIndex,
                    filter: `blur(${cardProps.blur}px)`
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.8 }}
                  className="absolute cursor-pointer"
                  style={{
                    width: isMobile ? '160px' : '240px',
                    aspectRatio: '4/5',
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => setActiveIndex(idx)}
                >
                  <div
                    className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                      isCenter
                        ? `ring-2 ring-neon-${project.color} shadow-[0_0_60px_${getColorRgb(project.color, 0.4)}]`
                        : "grayscale-[0.3] opacity-70"
                    }`}
                    style={{
                      background: "linear-gradient(145deg, rgba(20,20,35,0.9), rgba(10,10,20,0.95))",
                      border: `1px solid ${
                        isCenter
                          ? getColorRgb(project.color, 0.5)
                          : "rgba(255,255,255,0.08)"
                      }`,
                      boxShadow: isCenter
                        ? `0 25px 50px -12px rgba(0,0,0,0.7), 0 0 40px ${getColorRgb(project.color, 0.3)}`
                        : "0 10px 30px -10px rgba(0,0,0,0.5)"
                    }}
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-[65%] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                    
                    {isCenter && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewImage(project.coverImage || null);
                        }}
                        className="absolute inset-0 z-10 cursor-pointer"
                        aria-label={language === 'ar' ? 'معاينة الصورة' : 'Preview Image'}
                      />
                    )}

                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <p className={`text-${isCenter ? "white" : "white/60"} font-bold text-sm sm:text-base font-cairo text-center mb-1`}>
                        {language === 'ar' ? project.titleAr : project.title}
                      </p>
                      <p className={`text-${isCenter ? `neon-${project.color}` : "white/30"} text-[10px] sm:text-xs font-mono text-center uppercase tracking-wider`}>
                        {project.title}
                      </p>
                    </div>

                    {isCenter && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`absolute top-3 right-3 w-3 h-3 rounded-full bg-neon-${project.color} shadow-[0_0_15px_currentColor]`}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="relative flex justify-center gap-16 w-full max-w-xs mb-8">
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="p-3 rounded-full bg-black/40 border border-white/10 text-white/60 hover:bg-neon-cyan/20 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all backdrop-blur-xl z-30 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="p-3 rounded-full bg-black/40 border border-white/10 text-white/60 hover:bg-neon-cyan/20 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all backdrop-blur-xl z-30 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex gap-2 mb-8 z-30">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              idx === activeIndex
                ? `w-8 bg-neon-${projects[idx].color}`
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Underlying Detail Card */}
      <div className="w-full max-w-4xl mx-auto px-4 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <GlowCard className="p-6 sm:p-8 border-t-2 overflow-hidden rounded-3xl" glowColor={activeProject.color} intensity="medium">
              <div className="grid md:grid-cols-5 gap-6 items-stretch" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {/* Visual Cover */}
                <div className="md:col-span-2 relative group">
                  <div className="relative h-48 sm:h-full min-h-[220px] rounded-2xl overflow-hidden border border-white/10 bg-black">
                    <img
                      src={activeProject.images?.[0] || activeProject.coverImage}
                      alt={language === 'ar' ? activeProject.titleAr : activeProject.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    <button
                      onClick={() => setPreviewImage(activeProject.images?.[0] || activeProject.coverImage || null)}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-neon-${activeProject.color}/20 border border-neon-${activeProject.color}/50 text-neon-${activeProject.color} hover:bg-neon-${activeProject.color}/40 transition-all z-10 cursor-pointer`}
                      aria-label={language === 'ar' ? 'معاينة الصورة' : 'Preview Image'}
                    >
                      <Eye className="w-6 h-6 animate-pulse" />
                    </button>
                    
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full bg-neon-${activeProject.color}/20 border border-neon-${activeProject.color}/40 text-neon-${activeProject.color} text-xs font-bold font-mono shadow-md`}>
                      {language === 'ar' ? activeProject.metricAr : activeProject.metric}
                    </div>
                  </div>
                </div>

                {/* Information Area */}
                <div className={`md:col-span-3 space-y-4 flex flex-col justify-between ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      {renderIcon(activeProject.stats?.[0]?.icon || 'cpu', `text-neon-${activeProject.color}`, "w-8 h-8")}
                      <h4 className="text-xl sm:text-2xl font-bold text-white font-cairo">
                        {language === 'ar' ? activeProject.titleAr : activeProject.title}
                      </h4>
                    </div>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed font-cairo font-light">
                      {language === 'ar' ? activeProject.descriptionAr : activeProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeProject.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-3 py-1 rounded-full text-xs font-mono bg-neon-${activeProject.color}/10 text-neon-${activeProject.color}/80 border border-neon-${activeProject.color}/20`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-3 mt-6 flex-grow">
                    {(language === 'ar' ? activeProject.detailsAr : activeProject.details).slice(0, 2).map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        <h5 className="text-white/80 font-semibold text-sm mb-1 font-cairo flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-neon-${activeProject.color}`} />
                          {detail.title}
                        </h5>
                        <p className="text-white/50 text-xs leading-relaxed font-cairo">
                          {detail.content}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[998] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 sm:p-8"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-[95vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewImage(null)}
                className="fixed top-28 right-8 p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 hover:scale-110 active:scale-95 transition-all z-[999] backdrop-blur-xl border border-white/20 shadow-2xl group cursor-pointer"
                aria-label="إغلاق"
              >
                <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              <div className="relative w-full flex items-center justify-center">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl bg-black"
                />
              </div>

              {activeProject.images && activeProject.images.length > 1 && (
                <div className="flex gap-2 mt-4 justify-center flex-wrap">
                  {activeProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPreviewImage(img)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        previewImage === img
                          ? `border-neon-${activeProject.color} ring-2 ring-neon-${activeProject.color}/50`
                          : "border-white/20 hover:border-white/50"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {activeProject.images && activeProject.images.length > 1 && (
                <div className="mt-2 text-white/60 text-sm font-mono">
                  {activeProject.images.indexOf(previewImage) + 1} / {activeProject.images.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Projects Section
export const ProjectsSection: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = dictionary[language];
  
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Divide Rayyan's 6 projects: 2 Flagship Accordions, 4 Gallery Carousels
  const flagshipProjects = projectsData.filter(
    (p) => p.id === 'synapse-os' || p.id === 'omni-vision'
  );
  
  const carouselProjects = projectsData.filter(
    (p) => p.id !== 'synapse-os' && p.id !== 'omni-vision'
  );

  const toggleExpanded = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const renderIcon = (iconName: string, colorClass: string, sizeClass: string = "w-6 h-6") => {
    const props = { className: `${sizeClass} ${colorClass}` };
    switch (iconName) {
      case 'cpu': return <Cpu {...props} />;
      case 'database': return <Database {...props} />;
      case 'shield': return <Shield {...props} />;
      case 'activity': return <Activity {...props} />;
      case 'zap': return <Zap {...props} />;
      case 'lock': return <Lock {...props} />;
      case 'trending-up': return <TrendingUp {...props} />;
      case 'check': return <Check {...props} />;
      case 'eye': return <Eye {...props} />;
      default: return <Cpu {...props} />;
    }
  };

  return (
    <section id="projects" className="relative py-16 sm:py-24 overflow-hidden bg-[#030308]">
      {/* Decorative Glow Nodes */}
      <div className="absolute top-0 -right-[400px] w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[180px] -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 -left-[350px] w-[700px] h-[700px] bg-neon-pink/5 rounded-full blur-[160px] -z-10 pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-4 px-8 py-2 rounded-full glass-card border-2 border-white/5 text-[10px] sm:text-xs font-black text-neon-cyan mb-10 tracking-[0.5em] uppercase shadow-2xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_10px_#00ffff]" />
            {t.projects.badge}
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tighter leading-none font-montserrat">
            {t.projects.title}
          </h2>
          
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto font-cairo leading-relaxed font-light">
            {t.projects.description}
          </p>
        </div>

        {/* Flagship Accordions */}
        <div className="space-y-16 mb-32" dir={dir}>
          {flagshipProjects.map((project, idx) => {
            const isExpanded = expandedProject === project.id;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.2 }}
              >
                <GlowCard 
                  className={`p-2 border-t-[8px] border-neon-${project.color} transition-all duration-1000 hover:shadow-[0_0_100px_rgba(var(--neon-${project.color}-rgb),0.1)] rounded-[48px] overflow-hidden`}
                  intensity={isExpanded ? "high" : "medium"}
                  glowColor={project.color}
                >
                  {/* Clickable Header Area */}
                  <div 
                    className="p-6 sm:p-8 cursor-pointer select-none"
                    onClick={() => toggleExpanded(project.id)}
                  >
                    <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-start justify-between">
                      
                      {/* Left: Icon, titles and short description */}
                      <div className="flex gap-6 sm:gap-8 items-center flex-1">
                        <div className={`p-4 sm:p-5 rounded-2xl bg-neon-${project.color}/10 text-neon-${project.color} border-2 border-neon-${project.color}/20 flex-shrink-0 shadow-xl`}>
                          {renderIcon(project.stats?.[0]?.icon || 'cpu', `text-neon-${project.color}`, "w-10 h-10 sm:w-12 sm:h-12")}
                        </div>
                        <div className={`space-y-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-none tracking-tight font-montserrat">
                            {project.title}
                          </h3>
                          <p className={`text-neon-${project.color} font-display text-base sm:text-lg font-bold font-cairo`}>
                            {project.titleAr}
                          </p>
                          <p className="text-white/60 max-w-xl font-cairo text-sm sm:text-base leading-relaxed font-light">
                            {language === 'ar' ? project.descriptionAr : project.description}
                          </p>
                        </div>
                      </div>

                      {/* Right: Operational Stats & Expansion Indicator */}
                      <div className="flex items-center gap-4 self-center lg:self-start">
                        <div className="flex gap-3 flex-wrap justify-center">
                          {project.stats?.map((stat, sIdx) => (
                            <div 
                              key={sIdx} 
                              className="text-center p-4 rounded-2xl bg-black/60 border border-white/5 min-w-[100px] backdrop-blur-xl shadow-lg"
                            >
                              <div className={`text-lg font-bold text-neon-${project.color} font-mono`}>
                                {stat.value}
                              </div>
                              <div className="text-[10px] text-white/40 font-cairo uppercase tracking-wider mt-1">
                                {language === 'ar' ? stat.labelAr : stat.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Expand Chevron Icon */}
                        <button
                          className={`hidden sm:flex p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all shadow-lg group cursor-pointer ${
                            isExpanded ? "rotate-180 bg-neon-cyan/20 border-neon-cyan/50" : ""
                          }`}
                        >
                          <ChevronDown className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                        </button>
                      </div>

                    </div>

                    {/* Architectural Highlights Row */}
                    <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-white/5 font-cairo">
                      {project.highlights?.map((high, hIdx) => (
                        <div 
                          key={hIdx}
                          className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group shadow-lg"
                        >
                          {renderIcon(high.icon, `text-neon-${project.color} group-hover:scale-125 transition-transform duration-500`, "w-5 h-5")}
                          <span className="text-sm text-white/90 font-semibold tracking-tight">
                            {language === 'ar' ? high.titleAr : high.title}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Expandable Deep-Dive Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 sm:p-10 pt-0 border-t border-white/5 bg-gradient-to-b from-transparent to-black/30">
                          
                          {/* Screenshot Slider */}
                          <div className="mb-10 rounded-2xl overflow-hidden shadow-xl border-2 border-white/5">
                            <ImageSlider images={project.images || []} color={project.color} />
                          </div>

                          {/* Dual-column Architectural Deep Dives */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                            {(language === 'ar' ? project.detailsAr : project.details).map((detail, dIdx) => (
                              <motion.div 
                                key={dIdx}
                                className="flex gap-4 items-start bg-white/[0.01] p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + dIdx * 0.1 }}
                              >
                                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-neon-${project.color}/20 text-neon-${project.color} flex-shrink-0 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                                  {renderIcon('database', `text-neon-${project.color}`, "w-6 h-6")}
                                </div>
                                <div className={`flex-1 space-y-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                                  <h4 className="text-white font-bold text-lg font-cairo">
                                    {detail.title}
                                  </h4>
                                  <p className="text-white/50 text-base leading-relaxed font-cairo font-light">
                                    {detail.content}
                                  </p>
                                  {detail.impact && (
                                    <div className={`flex items-center gap-2 text-xs font-bold text-neon-${project.color} bg-neon-${project.color}/10 w-fit px-3 py-1.5 rounded-lg border border-neon-${project.color}/20 shadow-lg ${language === 'ar' ? 'mr-auto ml-0' : 'mr-0 ml-auto'}`}>
                                      <TrendingUp className="w-4 h-4" />
                                      <span className="tracking-wider uppercase font-cairo">
                                        {detail.impact}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            ))}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Heading */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-neon-violet/10 border border-neon-violet/30 text-neon-violet text-[10px] sm:text-xs font-bold font-mono mb-6 tracking-[0.4em] uppercase shadow-lg select-none">
            Technical_Archive
          </div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight font-montserrat">
            {t.projects.projectGallery}
          </h3>
          <p className="text-white/40 font-cairo text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            {t.projects.galleryDesc}
          </p>
        </motion.div>

        {/* 3D Rotating Carousel */}
        <ThreeDCarousel projects={carouselProjects} />

      </div>
    </section>
  );
};
