import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactElement;
  range?: number; // Distance threshold in pixels
  strength?: number; // Displacement multiplier (0 to 1)
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  range = 60, 
  strength = 0.35 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Find centers
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Compute distance
    const distX = clientX - centerX;
    const distY = clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    
    if (distance < range) {
      // Pull element toward mouse
      setPosition({ 
        x: distX * strength, 
        y: distY * strength 
      });
    } else {
      // Out of range, snap back
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
