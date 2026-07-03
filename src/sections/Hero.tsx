import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';
import MagneticButton from '../components/MagneticButton';

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

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  symbol: string;
}

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { name, title, tagline } = portfolioData.personalInfo;
  const { github, linkedin, email } = portfolioData.contactInfo;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const symbols = ['C', 'H', 'O', 'N', 'Cl', 'Br', 'I'];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 35), 45);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 8 + 8,
          symbol: symbols[Math.floor(Math.random() * symbols.length)]
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw bonds (lines) between close elements
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(47, 168, 79, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw element nodes
      particles.forEach((p) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(23, 23, 23, 0.8)';
        ctx.strokeStyle = 'rgba(47, 168, 79, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();

        // Write element letter inside node
        ctx.font = '800 10px monospace';
        ctx.fillStyle = 'rgba(109, 209, 124, 0.6)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.symbol, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
      {/* Chemical connection background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Lab decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent-green/3 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-accent-secondary/2 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Subtle chemistry badge */}
          <motion.span 
            variants={itemVariants} 
            className="px-4 py-1.5 rounded-full bg-accent-green/5 border border-accent-green/15 text-accent-secondary font-mono text-xs tracking-widest uppercase flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-ping" />
            Precision Engineering
          </motion.span>

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
            className="text-lg md:text-2xl font-mono tracking-tight text-gradient-green font-semibold"
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
            className="flex flex-wrap items-center justify-center gap-4 mt-4"
          >
            <MagneticButton>
              <button 
                onClick={() => handleScrollTo('projects')}
                className="px-6 py-3 rounded-full bg-accent-green text-bg-primary font-semibold text-sm hover:bg-accent-secondary transition-colors duration-300 shadow-glow-emerald"
              >
                View Projects
              </button>
            </MagneticButton>

            <MagneticButton>
              <button 
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3 rounded-full border border-white/10 bg-bg-card hover:bg-white/5 font-semibold text-sm transition-all duration-300"
              >
                Contact Me
              </button>
            </MagneticButton>

            <MagneticButton>
              <a 
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-full bg-white/5 border border-white/5 text-text-light hover:bg-white/10 font-semibold text-sm transition-all duration-300 flex items-center gap-2"
              >
                Download CV
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social icons links grid */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-6 mt-8"
          >
            <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/3 border border-white/5 text-text-secondary hover:text-accent-secondary hover:border-accent-green/20 hover:shadow-glow-emerald-sm transition-all duration-300" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/3 border border-white/5 text-text-secondary hover:text-accent-secondary hover:border-accent-green/20 hover:shadow-glow-emerald-sm transition-all duration-300" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${email}`} className="p-3 rounded-full bg-white/3 border border-white/5 text-text-secondary hover:text-accent-secondary hover:border-accent-green/20 hover:shadow-glow-emerald-sm transition-all duration-300" aria-label="Email">
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
          <ArrowDown size={14} className="text-accent-green" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
