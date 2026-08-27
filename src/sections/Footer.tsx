import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';
import { scrollToTop } from '../lib/scroll';

const Footer: React.FC = () => {
  const { name } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper mt-8">
      <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="font-display text-2xl tracking-tight">{name}</p>
            <p className="mt-2 text-sm text-paper/55 max-w-xs leading-relaxed">
              Designed and built by hand — React, TypeScript, Tailwind. No template, no page builder.
            </p>
          </div>

          <nav className="flex items-center gap-6 text-sm text-paper/65">
            <a href={portfolioData.contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">
              GitHub
            </a>
            <a href={portfolioData.contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${portfolioData.contactInfo.email}`} className="hover:text-paper transition-colors">
              Email
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-paper/15 flex items-center justify-between gap-4">
          <p className="text-xs text-paper/45">
            © {currentYear} {name} · Nagercoil, India
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-xs text-paper/65 hover:text-paper transition-colors"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-paper/25 group-hover:border-paper group-hover:-translate-y-0.5 transition-all duration-300">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
