import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, GraduationCap } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';
import BorderGlow from '../components/BorderGlow';

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
            <span className="font-mono text-xs uppercase tracking-widest text-accent-blue">
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
                >
                  <BorderGlow
                    borderRadius={16}
                    backgroundColor="rgba(13, 17, 39, 0.45)"
                    glowColor="210 85 55"
                    className="glassmorphic-card"
                  >
                    <div className="p-6 flex items-center gap-5 group w-full h-full">
                      <div className="w-12 h-12 rounded-xl bg-bg-primary/60 border border-white/5 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue/5 group-hover:border-accent-blue/35 transition-colors">
                        <Award size={20} />
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-sm md:text-base text-text-light group-hover:text-accent-blue transition-colors">
                          {cert.name}
                        </h3>
                        <p className="font-mono text-xs text-text-secondary mt-1">
                          Issuer: {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-blue">
              Academics
            </span>
            <h2 className="text-3xl font-sans font-extrabold text-text-light mt-3 mb-8">
              Education Overview
            </h2>

            <motion.div
              variants={cardVariants}
            >
              <BorderGlow
                borderRadius={24}
                backgroundColor="rgba(13, 17, 39, 0.45)"
                glowColor="210 85 55"
                className="glassmorphic-card"
              >
                <div className="p-8 relative w-full h-full flex flex-col justify-between">
                  {/* Grid watermarks */}
                  <div className="absolute top-4 right-6 font-mono text-[8px] text-text-secondary/10 pointer-events-none select-none">
                    RECORD: {education.grade}
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-bg-primary/60 border border-white/5 flex items-center justify-center text-accent-blue">
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

                  {/* CGPA display */}
                  <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase text-text-secondary tracking-widest">
                      Academic Performance
                    </span>
                    <div className="flex items-baseline gap-1.5 font-mono">
                      <span className="text-xs text-text-secondary">CGPA</span>
                      <span className="text-3xl font-extrabold text-accent-blue tracking-tight">
                        {education.grade.split(' ')[1]}
                      </span>
                      <span className="text-xs text-text-secondary/40">/ 10.0</span>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

