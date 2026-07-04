import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';
import MagneticButton from '../components/MagneticButton';
import BorderGlow from '../components/BorderGlow';

// SVG Custom Brand Icons to avoid Lucide deprecation issues
const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero: React.FC = () => {
  const { name, title, tagline } = portfolioData.personalInfo;
  const { github, linkedin, email } = portfolioData.contactInfo;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 18 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary bg-radial-glow bg-grid py-20 px-4">

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent-blue/3 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-accent-sky/2 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >

          {/* Staggered Name Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-sans font-extrabold tracking-tighter text-text-light"
          >
            {name}
          </motion.h1>

          {/* Subtitle / Role Tag */}
          <motion.h2 
            variants={itemVariants}
            className="text-lg md:text-2xl font-mono tracking-tight text-gradient-blue font-semibold"
          >
            {title}
          </motion.h2>

          {/* Narrative summary paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-text-secondary max-w-2xl text-sm md:text-base leading-relaxed font-sans"
          >
            {tagline}
          </motion.p>

          {/* Actions & Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mt-4"
          >
            <MagneticButton>
              <div className="relative group">
                <BorderGlow
                  borderRadius={9999}
                  backgroundColor="transparent"
                  glowColor="210 85 55"
                  className="rounded-full"
                >
                  <button 
                    onClick={() => handleScrollTo('projects')}
                    className="px-6 py-3 rounded-full bg-accent-blue text-text-light font-semibold text-sm hover:bg-accent-secondary hover:text-text-light transition-colors duration-300"
                  >
                    View Projects
                  </button>
                </BorderGlow>
              </div>
            </MagneticButton>

            <MagneticButton>
              <div className="relative group">
                <BorderGlow
                  borderRadius={9999}
                  backgroundColor="transparent"
                  glowColor="210 85 55"
                  className="rounded-full"
                >
                  <button 
                    onClick={() => handleScrollTo('contact')}
                    className="px-6 py-3 rounded-full border border-white/10 bg-bg-card hover:bg-white/5 font-semibold text-sm transition-all duration-300"
                  >
                    Contact Me
                  </button>
                </BorderGlow>
              </div>
            </MagneticButton>
          </motion.div>

          {/* Social icons links grid */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-6 mt-8"
          >
            <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/3 border border-white/5 text-text-secondary hover:text-accent-sky hover:border-accent-blue/20 hover:shadow-glow-blue-sm transition-all duration-300" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/3 border border-white/5 text-text-secondary hover:text-accent-sky hover:border-accent-blue/20 hover:shadow-glow-blue-sm transition-all duration-300" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${email}`} className="p-3 rounded-full bg-white/3 border border-white/5 text-text-secondary hover:text-accent-sky hover:border-accent-blue/20 hover:shadow-glow-blue-sm transition-all duration-300" aria-label="Email">
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-80 transition-opacity cursor-pointer" onClick={() => handleScrollTo('about')}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-accent-blue" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
