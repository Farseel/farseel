import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../constants/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { fadeUp } from '../lib/motion';

const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 md:py-28 bg-raised">
      <div className="max-w-5xl mx-auto px-6 border-t border-line pt-10 md:pt-12">
        <SectionHeader num="04" label="Credentials" />

        <motion.div
          {...fadeUp(0.05)}
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"
        >
          {/* Certifications */}
          <div>
            <p className="meta-label mb-5">Certifications</p>
            <ul>
              {certifications.map((cert, idx) => (
                <li
                  key={idx}
                  className="py-4 border-t border-line first:border-t-0 last:border-b last:border-line flex items-baseline justify-between gap-4"
                >
                  <span className="text-sm font-medium text-cream">{cert.name}</span>
                  <span className="shrink-0 text-xs text-cream-faint">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education summary */}
          <div>
            <p className="meta-label mb-5">Degree</p>
            <div className="py-4 border-t border-line first:border-t-0">
              <p className="text-sm font-medium text-cream leading-relaxed">
                {portfolioData.education.degree}
              </p>
              <p className="mt-1.5 text-sm text-cream-faint leading-relaxed">
                {portfolioData.education.institution}, {portfolioData.education.place}
              </p>
              <p className="mt-3 text-sm text-cream-muted">
                {portfolioData.education.duration} · {portfolioData.education.gradeLabel}{' '}
                {portfolioData.education.grade}/10
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
