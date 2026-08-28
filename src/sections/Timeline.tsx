import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../constants/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { fadeUp } from '../lib/motion';

const Timeline: React.FC = () => {
  const { timeline } = portfolioData;

  return (
    <section id="timeline" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 border-t border-line pt-10 md:pt-12">
        <SectionHeader num="03" label="Experience" />

        <div className="mt-12 md:mt-16 flex flex-col">
          {timeline.map((item, idx) => (
            <motion.article
              key={idx}
              {...fadeUp(idx * 0.08)}
              className="grid grid-cols-1 md:grid-cols-[210px_1fr] gap-x-14 gap-y-4 py-12 md:py-14 border-t border-line"
            >
              {/* Date column */}
              <div className="md:pt-1.5">
                <p className="font-mono text-xs tracking-[0.04em] text-brass">{item.date}</p>
                <p className="mt-1.5 text-sm text-cream-faint">{item.company}</p>
              </div>

              {/* Role + notes */}
              <div>
                <h3 className="font-display text-2xl md:text-[1.75rem] tracking-[-0.01em] text-cream">
                  {item.role}
                  <span className="text-cream-faint"> · </span>
                  <span className="italic text-cream-muted">{item.company}</span>
                </h3>

                <ul className="mt-5 space-y-2 max-w-prose">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-baseline gap-3 text-sm leading-relaxed text-cream-muted">
                      <span aria-hidden className="text-brass select-none shrink-0">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Education rides under experience as part of the same story */}
        <motion.div {...fadeUp()} className="border-t border-line py-12 md:py-14">
          <p className="meta-label mb-6">Education</p>
          <div className="grid grid-cols-1 md:grid-cols-[210px_1fr] gap-x-14 gap-y-2">
            <p className="font-mono text-xs tracking-[0.04em] text-brass pt-0.5">
              {portfolioData.education.duration}
            </p>
            <div>
              <h3 className="font-display text-xl md:text-2xl tracking-[-0.01em] text-cream">
                {portfolioData.education.degree}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                {portfolioData.education.institution}, {portfolioData.education.place} ·{' '}
                {portfolioData.education.gradeLabel} {portfolioData.education.grade}/10
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
