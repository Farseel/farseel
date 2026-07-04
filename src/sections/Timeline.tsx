import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Briefcase } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';
import BorderGlow from '../components/BorderGlow';

const TimelineItem: React.FC<{ 
  item: typeof portfolioData.timeline[0]; 
  index: number 
}> = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div 
      ref={ref}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Node Bullet point */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        className="absolute left-[-9px] top-1.5 w-[18px] h-[18px] rounded-full bg-bg-card border-2 border-accent-blue z-20 flex items-center justify-center"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
      </motion.div>

      {/* Date badge on top */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 mb-2 font-mono text-[10px] text-accent-blue uppercase tracking-widest"
      >
        <Calendar size={12} />
        <span>{item.date}</span>
      </motion.div>

      {/* Body card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ type: 'spring', stiffness: 100, damping: 18 }}
      >
        <BorderGlow
          borderRadius={16}
          backgroundColor="rgba(13, 17, 39, 0.45)"
          glowColor="210 85 55"
          className="glassmorphic-card"
        >
          <div className="p-6 md:p-8 relative w-full h-full">
            {/* Grid watermarks */}
            <div className="absolute top-4 right-6 font-mono text-[8px] text-text-secondary/10 pointer-events-none select-none">
              LOG-0{index + 1}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-bg-primary/60 border border-white/10 flex items-center justify-center text-accent-blue">
                <Briefcase size={14} />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-base md:text-lg text-text-light">
                  {item.role}
                </h3>
                <p className="font-mono text-xs text-text-secondary">
                  {item.company}
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {item.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary leading-normal">
                  <span className="text-accent-blue mt-1 text-[8px]">▶</span>
                  <span className="font-sans">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </BorderGlow>
      </motion.div>
    </div>
  );
};


const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { timeline } = portfolioData;

  // Track scroll inside timeline wrapper to grow path line height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <section id="timeline" className="py-24 bg-bg-secondary relative border-y border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-blue">
            Chronology
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-text-light mt-3">
            Experience History
          </h2>
          <div className="w-16 h-[2px] bg-accent-blue mt-4" />
        </div>

        {/* Timeline List wrapper */}
        <div 
          ref={containerRef}
          className="relative ml-2 md:ml-4"
        >
          {/* Vertical scroll growing line */}
          <motion.div 
            className="absolute left-0 top-2 bottom-2 w-[1px] bg-accent-blue origin-top z-10"
            style={{ scaleY }}
          />

          {/* Underlay faded static line */}
          <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-white/5" />

          {/* Map Items */}
          <div className="flex flex-col">
            {timeline.map((item, idx) => (
              <TimelineItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
