import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../constants/portfolioData';

// Map categories to chemical atomic symbols
const categorySymbolMap: Record<string, string> = {
  'Languages': 'Lg',
  'Frontend': 'Fe',
  'Backend': 'Be',
  'Databases': 'Db',
  'Machine Learning': 'Ml',
  'Cloud & DevOps': 'Do',
  'Engineering': 'Eg'
};

const About: React.FC = () => {
  const { bio } = portfolioData.aboutMe;
  const { skills } = portfolioData;

  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section id="about" className="py-24 bg-bg-secondary relative border-y border-white/5">
      {/* Subtle lab grid indicators */}
      <div className="absolute top-0 right-0 w-[40px] h-[40px] border-b border-l border-white/5 flex items-center justify-center font-mono text-[8px] text-text-secondary/20">
        SEC-02
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          {/* Biography Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.span 
              variants={fadeUpVariants}
              className="font-mono text-xs uppercase tracking-widest text-accent-secondary"
            >
              Biography
            </motion.span>
            
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-text-light mt-3 mb-6"
            >
              Formulating Solutions through <span className="text-gradient-green">Code & Data</span>
            </motion.h2>

            <div className="flex flex-col gap-5 text-text-secondary text-sm md:text-base leading-relaxed font-sans">
              {bio.map((p, idx) => (
                <motion.p key={idx} variants={fadeUpVariants}>
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Skills Matrix Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.span 
              variants={fadeUpVariants}
              className="font-mono text-xs uppercase tracking-widest text-accent-secondary mb-3"
            >
              Technical Core
            </motion.span>
            
            <motion.h3 
              variants={fadeUpVariants}
              className="text-2xl font-sans font-extrabold text-text-light mb-8"
            >
              Skills Compound Grid
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, idx) => {
                const symbol = categorySymbolMap[skillGroup.category] || 'X';
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUpVariants}
                    className="p-5 rounded-2xl bg-bg-card border border-white/5 hover:border-accent-green/20 hover:shadow-glow-emerald-sm transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {/* Periodic table style element box */}
                      <div className="w-10 h-10 border border-accent-green/20 rounded-lg bg-bg-primary flex flex-col items-center justify-center font-mono group-hover:bg-accent-green/5 group-hover:border-accent-green/45 transition-colors">
                        <span className="text-[10px] text-accent-secondary font-bold leading-none">{symbol}</span>
                        <span className="text-[6px] text-text-secondary/50 font-normal leading-none mt-0.5">{idx + 1}</span>
                      </div>
                      <h4 className="font-sans font-bold text-sm text-text-light group-hover:text-accent-secondary transition-colors">
                        {skillGroup.category}
                      </h4>
                    </div>

                    <ul className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((skill, sIdx) => (
                        <li 
                          key={sIdx}
                          className="px-2.5 py-1 rounded bg-bg-primary/50 border border-white/5 text-xs text-text-secondary font-mono hover:text-text-light hover:border-white/10 transition-colors"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
