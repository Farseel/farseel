import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../constants/portfolioData';
import BorderGlow from '../components/BorderGlow';

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
              className="font-mono text-xs uppercase tracking-widest text-accent-blue"
            >
              Biography
            </motion.span>
            
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-text-light mt-3 mb-6"
            >
              Building Solutions through <span className="text-gradient-blue">Code & Data</span>
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
              className="font-mono text-xs uppercase tracking-widest text-accent-blue mb-3"
            >
              Technical Core
            </motion.span>
            
            <motion.h3 
              variants={fadeUpVariants}
              className="text-2xl font-sans font-extrabold text-text-light mb-8"
            >
              Technical Skills Grid
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, idx) => {
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUpVariants}
                  >
                    <BorderGlow
                      borderRadius={16}
                      backgroundColor="rgba(13, 17, 39, 0.45)"
                      glowColor="210 85 55"
                      className="glassmorphic-card p-5 group h-full"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 border border-white/10 rounded-lg bg-bg-primary/60 flex items-center justify-center font-mono text-xs text-accent-blue font-bold group-hover:border-accent-blue/40 transition-colors">
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                        <h4 className="font-sans font-bold text-sm text-text-light group-hover:text-accent-blue transition-colors">
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
                    </BorderGlow>
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
