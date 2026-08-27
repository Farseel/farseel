import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { fadeUp } from '../lib/motion';

const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 md:py-28 bg-paper-deep/60">
      <div className="max-w-5xl mx-auto px-6 border-t border-line pt-10 md:pt-12">
        <SectionHeader num="02" label="Selected work" />

        <div className="mt-12 md:mt-16 flex flex-col">
          {projects.map((project, idx) => (
            <motion.article
              key={idx}
              {...fadeUp(idx * 0.06)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-14 md:py-16 border-t border-line group"
            >
              {/* Left rail: ghost number + honest metrics */}
              <div className="lg:col-span-4 flex lg:flex-col justify-between items-start lg:gap-10 order-2 lg:order-1">
                <span
                  aria-hidden
                  className="font-display font-light leading-none text-6xl md:text-7xl text-ink/[0.14] select-none"
                >
                  0{idx + 1}
                </span>

                {project.metrics && (
                  <div className="flex gap-10 lg:gap-8 lg:flex-col lg:mt-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="meta-label">{metric.label}</p>
                        <p className="mt-1.5 font-display text-3xl md:text-4xl tracking-tight text-rust-deep">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Main content */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <h3 className="font-display text-3xl md:text-4xl tracking-[-0.015em] leading-tight group-hover:text-rust transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-soft">
                  {project.description}
                </p>

                <ul className="mt-6 space-y-2.5 max-w-prose">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-baseline gap-3 text-sm leading-relaxed text-ink-soft">
                      <span aria-hidden className="text-rust select-none shrink-0">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 font-mono text-[11px] leading-relaxed tracking-[0.02em] text-ink-faint">
                  {project.techStack.join(' · ')}
                </p>

                <div className="mt-6 flex items-center gap-6">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-ink flex items-center gap-1"
                  >
                    Source code
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
