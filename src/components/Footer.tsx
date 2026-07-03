import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="text-gradient">&lt;Alex.Dev /&gt;</span>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.
        </p>
        <div className="footer-links-group">
          <button
            onClick={handleScrollToTop}
            className="footer-btn-top"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
