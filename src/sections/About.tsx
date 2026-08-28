import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../constants/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { fadeUp } from '../lib/motion';

const About: React.FC = () => {
  const { bio } = portfolioData.aboutMe;
  const { skills } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 border-t border-line pt-10 md:pt-12">
        <SectionHeader num="01" label="About" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-12 md:mt-16">
          {/* Bio */}
          <div className="lg:col-span-7">
            <motion.h2
              {...fadeUp()}
              className="font-display text-3xl md:text-[2.6rem] leading-[1.15] tracking-[-0.015em] text-cream"
            >
              Care about the craft,
              <br />
              <span className="italic text-cream-muted">not just the result.</span>
            </motion.h2>

            <div className="mt-7 max-w-prose flex flex-col gap-5 text-[15px] md:text-base leading-[1.8] text-cream-muted">
              {bio.map((paragraph, idx) => (
                <motion.p key={idx} {...fadeUp(0.08 + idx * 0.08)}>
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Skills as a plain index — no chip grids */}
          <div className="lg:col-span-5 lg:pl-4">
            <motion.p {...fadeUp()} className="meta-label mb-6">
              Things I work with
            </motion.p>
            <dl>
              {skills.map((group, idx) => (
                <motion.div
                  key={idx}
                  {...fadeUp(idx * 0.05)}
                  className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-x-6 py-3.5 border-t border-line"
                >
                  <dt className="text-sm font-medium text-cream pt-0.5">{group.category}</dt>
                  <dd className="text-sm leading-relaxed text-cream-faint mt-1 sm:mt-0">
                    {group.items.join(', ')}.
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
