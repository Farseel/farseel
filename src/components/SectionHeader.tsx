import React from 'react';
import { motion } from 'framer-motion';
import { EASE } from '../lib/motion';

/**
 * Editorial section header: label on the left, index number on the right,
 * sitting on a hairline rule that separates every major section.
 */
const SectionHeader: React.FC<{ num: string; label: string }> = ({ num, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, ease: EASE }}
    className="flex items-baseline justify-between"
  >
    <span className="meta-label">{label}</span>
    <span className="meta-label tabular-nums">({num})</span>
  </motion.div>
);

export default SectionHeader;
