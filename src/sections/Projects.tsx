import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

// Custom inline SVG icons for Github
const GithubIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 70, damping: 16 } 
    }
  };

  return (
    <section id="projects" className="py-24 bg-bg-primary relative bg-grid">
      <div className="absolute top-0 right-10 w-[1px] h-full bg-white/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16 relative">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary">
            Formulations
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-text-light mt-3">
            Featured Projects
          </h2>
          <div className="w-16 h-[2px] bg-accent-green mt-4" />
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-16"
        >
          {projects.map((project, idx) => (
            <motion.article
              key={idx}
              variants={cardVariants}
              className="group rounded-3xl bg-bg-card border border-white/5 p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 hover:border-accent-green/20 hover:shadow-glow-emerald hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
            >
              {/* Chemistry Lab grid watermarks */}
              <div className="absolute top-4 right-6 font-mono text-[9px] text-text-secondary/10 pointer-events-none select-none">
                PRJ-0{idx + 1} // Precision_Level_99.8%
              </div>

              {/* Graphical Panel Mockup */}
              <div className="lg:w-5/12 shrink-0 flex flex-col gap-4">
                {project.type === 'dashboard' ? (
                  /* High Concurrency Ticketing Visual Dashboard */
                  <div className="h-60 rounded-2xl bg-bg-primary border border-white/5 p-4 flex flex-col justify-between overflow-hidden relative font-mono text-[9px] text-accent-secondary/60">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span>BOOKING_STREAM::LOAD_BALANCER</span>
                      <span className="w-2 h-2 rounded-full bg-accent-green animate-ping" />
                    </div>
                    {/* Ticketing Bar Graphs */}
                    <div className="flex items-end gap-2 h-24 mt-2">
                      <div className="w-full bg-accent-muted/20 border border-accent-muted/40 rounded-t h-[60%] flex items-end justify-center pb-1 text-[8px]">90k req/s</div>
                      <div className="w-full bg-accent-green/20 border border-accent-green/40 rounded-t h-[95%] flex items-end justify-center pb-1 text-[8px]">142k req/s</div>
                      <div className="w-full bg-accent-muted/20 border border-accent-muted/40 rounded-t h-[75%] flex items-end justify-center pb-1 text-[8px]">110k req/s</div>
                    </div>
                    <div className="flex justify-between items-center text-[8px] text-text-secondary/40 border-t border-white/5 pt-2">
                      <span>REDIS_LOCK: active</span>
                      <span>DB_POOL: 100/100</span>
                    </div>
                  </div>
                ) : (
                  /* BMI Predictor model output report card */
                  <div className="h-60 rounded-2xl bg-bg-primary border border-white/5 p-6 flex flex-col justify-between overflow-hidden relative">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2 font-mono text-[9px] text-accent-secondary/60">
                      <span>TENSORFLOW_CNN::EVAL_METRICS</span>
                      <span>LOSS: 0.041</span>
                    </div>
                    {/* LCD style metrics display */}
                    <div className="grid grid-cols-2 gap-4 my-auto">
                      {project.metrics?.map((m, mIdx) => (
                        <div key={mIdx} className="bg-bg-secondary p-4 rounded-xl border border-white/5 flex flex-col items-center">
                          <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">{m.label}</span>
                          <span className="text-xl md:text-2xl font-mono text-accent-secondary font-bold mt-1 tracking-tight">{m.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-[8px] font-mono text-text-secondary/30 text-center">
                      Model evaluation completed: precision verified
                    </div>
                  </div>
                )}

                {/* Tech stacks list */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-bg-secondary border border-white/5 text-[10px] font-mono text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details and highlights */}
              <div className="flex flex-col justify-between py-2">
                <div>
                  <h3 className="text-2xl font-sans font-extrabold text-text-light mb-3 group-hover:text-accent-secondary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

                  <ul className="flex flex-col gap-2.5">
                    {project.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs text-text-secondary leading-normal">
                        <span className="text-accent-green mt-1 font-mono text-[10px] select-none">▶</span>
                        <span className="font-sans">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <a
                    href="https://github.com/Farseel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono font-medium text-text-secondary hover:text-accent-secondary transition-colors"
                  >
                    <GithubIcon size={14} />
                    Source Code
                  </a>
                  <span className="w-1 h-1 rounded-full bg-white/10" />
                  <a
                    href="https://github.com/Farseel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono font-medium text-text-secondary hover:text-accent-secondary transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
