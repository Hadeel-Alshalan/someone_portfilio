import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverColor, setHoverColor] = useState<'cyan' | 'violet' | 'pink' | 'emerald'>('cyan');

  // Color theme maps
  const colorMap = {
    cyan: { hex: '#00f0ff', rgb: '0, 240, 255' },
    violet: { hex: '#a033ff', rgb: '160, 51, 255' },
    pink: { hex: '#ff00a0', rgb: '255, 0, 160' },
    emerald: { hex: '#10b981', rgb: '16, 185, 129' },
  };

  // Position motion values for immediate tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth lagging springs for the trailing ring effect
  const springConfig = { damping: 30, stiffness: 220, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only activate cursor if the device has a mouse/fine pointer
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Track active interactions
    const checkHoverables = () => {
      const hoverables = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .glass-card, .cursor-pointer, .project-accordion'
      );
      
      const onEnter = (e: Event) => {
        setIsHovered(true);
        const target = e.currentTarget as HTMLElement;
        
        // Inspect current element classes
        let color: 'cyan' | 'violet' | 'pink' | 'emerald' = 'cyan';
        const classes = target.className || '';
        
        if (classes.includes('violet') || classes.includes('shadow-neon-violet-glow')) {
          color = 'violet';
        } else if (classes.includes('pink') || classes.includes('shadow-neon-pink-glow')) {
          color = 'pink';
        } else if (classes.includes('emerald') || classes.includes('shadow-neon-emerald-glow')) {
          color = 'emerald';
        } else {
          // Check closest parent card color theme
          const closestCard = target.closest('.glass-card');
          if (closestCard) {
            const cardClasses = closestCard.className || '';
            if (cardClasses.includes('violet') || cardClasses.includes('shadow-neon-violet-glow')) {
              color = 'violet';
            } else if (cardClasses.includes('pink') || cardClasses.includes('shadow-neon-pink-glow')) {
              color = 'pink';
            } else if (cardClasses.includes('emerald') || cardClasses.includes('shadow-neon-emerald-glow')) {
              color = 'emerald';
            }
          }
        }
        
        setHoverColor(color);
      };
      
      const onLeave = () => {
        setIsHovered(false);
        setHoverColor('cyan');
      };

      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    // Run hover checks
    checkHoverables();

    // Use MutationObserver to monitor dynamic DOM additions (e.g. accordion expansions)
    const observer = new MutationObserver(checkHoverables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny active inner core dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-screen -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"
        style={{
          x: cursorX,
          y: cursorY,
          backgroundColor: colorMap[hoverColor].hex,
          boxShadow: `0 0 10px ${colorMap[hoverColor].hex}`,
        }}
      />

      {/* Trailing outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border transition-[border-color,background-color,box-shadow] duration-300"
        style={{
          x: springX,
          y: springY,
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          backgroundColor: isHovered 
            ? `rgba(${colorMap[hoverColor].rgb}, 0.05)` 
            : `rgba(${colorMap[hoverColor].rgb}, 0.02)`,
          borderColor: isHovered 
            ? `rgba(${colorMap[hoverColor].rgb}, 0.8)` 
            : `rgba(${colorMap[hoverColor].rgb}, 0.4)`,
          boxShadow: isHovered 
            ? `0 0 25px rgba(${colorMap[hoverColor].rgb}, 0.4)` 
            : `0 0 10px rgba(${colorMap[hoverColor].rgb}, 0.1)`,
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      />
    </>
  );
};
