import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';
import { scrollToId } from '../lib/scroll';
import { EASE } from '../lib/motion';

const Hero: React.FC = () => {
  const { name, title, tagline } = portfolioData.personalInfo;
  const { github, linkedin, email } = portfolioData.contactInfo;

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <div className="max-w-5xl mx-auto w-full px-6 flex-1 flex flex-col justify-center pt-32 pb-20">

        {/* Availability line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center justify-between mb-10 md:mb-14"
        >
          <span className="flex items-center gap-2.5 meta-label text-brass">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brass" aria-hidden />
            Open to work
          </span>
          <span className="meta-label hidden sm:block">Nagercoil, India</span>
        </motion.div>

        {/* Name — one clear line, roman, medium weight so every letter reads */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="font-display font-medium leading-[1.02] tracking-[-0.02em] text-[clamp(2.9rem,9.5vw,7.5rem)]"
        >
          {name}
          <span className="text-brass">.</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
          className="mt-8 font-display italic text-xl md:text-2xl text-cream-muted"
        >
          {title}.
        </motion.p>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
          className="mt-5 max-w-xl leading-[1.75] text-[15px] md:text-base text-cream-muted"
        >
          {tagline}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <button
            onClick={() => scrollToId('projects')}
            className="px-7 py-3.5 bg-cream text-ink text-sm font-medium rounded-sm hover:bg-brass transition-colors duration-300"
          >
            See the work
          </button>

          <button
            onClick={() => scrollToId('contact')}
            className="link-underline text-sm text-cream flex items-center gap-1"
          >
            <span>Get in touch</span>
            <ArrowUpRight size={14} strokeWidth={2} className="relative top-[1px]" />
          </button>
        </motion.div>

        {/* Social row pinned to the bottom of the fold */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-20 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-6">
            <a href={github} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-cream-muted">
              GitHub
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-cream-muted">
              LinkedIn
            </a>
            <a href={`mailto:${email}`} className="link-underline text-sm text-cream-muted">
              Email
            </a>
          </div>
          <span className="meta-label">Portfolio — 2026</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
