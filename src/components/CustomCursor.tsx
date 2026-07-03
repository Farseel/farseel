import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Outer circle coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Inner dot coordinates
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Spring settings for lagging outer follow effect
  const springConfig = { damping: 40, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop/pointer devices
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    if (isMobile) return;

    // Apply cursor hide class to body
    document.body.classList.add('custom-cursor-hidden');

    const moveCursor = (e: MouseEvent) => {
      // Position outer circle
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      // Position inner dot
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Listen for hover states on buttons and links
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive-item')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-hidden');
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-green pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(47, 168, 79, 0.1)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(47, 168, 79, 0.3)' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent-secondary pointer-events-none z-[10000]"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
