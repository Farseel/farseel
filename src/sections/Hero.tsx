import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';
import { scrollToId } from '../lib/scroll';
import { EASE } from '../lib/motion';

const Hero: React.FC = () => {
  const { name, title, tagline } = portfolioData.personalInfo;
  const { github, linkedin, email } = portfolioData.contactInfo;

  // Name split across two lines so the serif can breathe
  const [firstLine, ...restWords] = name.split(' ');
  const secondLine = restWords.join(' ');

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
          <span className="flex items-center gap-2.5 meta-label text-rust">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-rust" aria-hidden />
            Open to work
          </span>
          <span className="meta-label hidden sm:block">Nagercoil, India</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="font-display font-medium leading-[0.95] tracking-[-0.03em] text-[clamp(3.2rem,11vw,8rem)]"
        >
          {firstLine}
          {secondLine && (
            <>
              <br />
              <span className="italic font-light">{secondLine}</span>
              <span className="text-rust">.</span>
            </>
          )}
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
          className="mt-8 font-display italic font-light text-xl md:text-2xl text-ink-soft"
        >
          {title}.
        </motion.p>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
          className="mt-5 max-w-xl leading-[1.75] text-[15px] md:text-base text-ink-soft"
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
            className="px-7 py-3.5 bg-ink text-paper text-sm font-medium rounded-sm hover:bg-rust active:bg-rust-deep transition-colors duration-300"
          >
            See the work
          </button>

          <button
            onClick={() => scrollToId('contact')}
            className="link-underline text-sm text-ink flex items-center gap-1"
          >
            Get in touch
            <ArrowUpRight size={14} strokeWidth={2} />
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
            <a href={github} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-ink-soft">
              GitHub
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-ink-soft">
              LinkedIn
            </a>
            <a href={`mailto:${email}`} className="link-underline text-sm text-ink-soft">
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
