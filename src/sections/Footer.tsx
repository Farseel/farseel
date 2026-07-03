import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';

const Footer: React.FC = () => {
  const { name } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-bg-primary relative border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="font-mono text-xs text-text-secondary">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
          <p className="font-mono text-[9px] text-text-secondary/30">
            Formulated with Precision // Obsidian Charcoal Green Theme
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={handleScrollToTop}
          className="p-3 rounded-full bg-bg-card border border-white/5 hover:border-accent-green/20 hover:text-accent-secondary hover:shadow-glow-emerald-sm transition-all duration-300 text-text-secondary group"
          aria-label="Back to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Floating abstract decorative canvas particle nodes */}
      <div className="absolute bottom-[-10px] left-[15%] w-2 h-2 rounded-full bg-accent-green/10" />
      <div className="absolute bottom-10 right-[25%] w-1.5 h-1.5 rounded-full bg-accent-secondary/5" />
    </footer>
  );
};

export default Footer;
