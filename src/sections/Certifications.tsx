import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, GraduationCap } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

const Certifications: React.FC = () => {
  const { certifications, education } = portfolioData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 16 } 
    }
  };

  return (
    <section id="certifications" className="py-24 bg-bg-primary relative bg-grid">
      {/* Subtle lab grid indicator */}
      <div className="absolute top-0 right-0 w-[40px] h-[40px] border-b border-l border-white/5 flex items-center justify-center font-mono text-[8px] text-text-secondary/20">
        SEC-05
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Certifications column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary">
              Credentials
            </span>
            <h2 className="text-3xl font-sans font-extrabold text-text-light mt-3 mb-8">
              Professional Certifications
            </h2>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-accent-green/20 hover:shadow-glow-emerald-sm transition-all duration-300 flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-bg-primary border border-white/5 flex items-center justify-center text-accent-secondary group-hover:bg-accent-green/5 group-hover:border-accent-green/35 transition-colors">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm md:text-base text-text-light group-hover:text-accent-secondary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="font-mono text-xs text-text-secondary mt-1">
                      Issuer: {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary">
              Academics
            </span>
            <h2 className="text-3xl font-sans font-extrabold text-text-light mt-3 mb-8">
              Education Overview
            </h2>

            <motion.div
              variants={cardVariants}
              className="p-8 rounded-3xl bg-bg-card border border-white/5 hover:border-accent-green/10 hover:shadow-glow-emerald-sm transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Chemistry Lab grid watermarks */}
              <div className="absolute top-4 right-6 font-mono text-[8px] text-text-secondary/10 pointer-events-none select-none">
                ACAD_RECORD_8.25
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-bg-primary border border-white/5 flex items-center justify-center text-accent-secondary">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-base md:text-lg text-text-light">
                      {education.degree}
                    </h3>
                    <p className="font-mono text-xs text-text-secondary mt-0.5">
                      {education.duration}
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-sans">
                  Completed B.Tech in Information Technology with Honours at **{education.institution}**. Engaged in deep training regarding system algorithms, database architectures, programming principles, and software implementation.
                </p>
              </div>

              {/* Large CGPA digital output */}
              <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-text-secondary tracking-widest">
                  Academic Performance
                </span>
                <div className="flex items-baseline gap-1.5 font-mono">
                  <span className="text-xs text-text-secondary">CGPA</span>
                  <span className="text-3xl font-extrabold text-accent-secondary tracking-tight">
                    {education.grade.split(' ')[1]}
                  </span>
                  <span className="text-xs text-text-secondary/40">/ 10.0</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
