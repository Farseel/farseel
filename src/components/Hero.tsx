import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);


const Hero: React.FC = () => {
  const words = ['Full-Stack Engineer', 'UI/UX Architect', 'Problem Solver'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setTypewriterText(words[index].substring(0, subIndex));
  }, [subIndex, index]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Animated Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="container">
        <div className="hero-grid">
          {/* Hero text content */}
          <div className="hero-content">
            <span className="hero-greeting">Welcome to my space</span>
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Alex Morgan</span>
            </h1>
            <div className="hero-subtitle">
              <span>I am a </span>
              <span className="text-gradient" style={{ fontWeight: 700 }}>
                {typewriterText}
              </span>
              <span className="typewriter-cursor">|</span>
            </div>
            <p className="hero-subtext">
              I specialize in crafting high-performance, visually gorgeous web applications.
              Fusing clean software engineering principles with dynamic, responsive design
              to solve complex problems.
            </p>

            <div className="hero-actions">
              <button onClick={() => handleScrollTo('projects')} className="btn btn-primary">
                View My Work
                <ArrowRight size={16} />
              </button>
              <button onClick={() => handleScrollTo('contact')} className="btn btn-secondary">
                Let's Talk
              </button>
            </div>

            <div className="hero-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="mailto:alex@example.com" className="social-icon-btn" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Hero visual graphic */}
          <div className="hero-graphic">
            <div className="graphic-container">
              {/* Decorative Background Glow Grid */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle, hsl(var(--color-primary) / 0.15) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                borderRadius: '50%',
              }} />

              {/* IDE Code Mockup */}
              <div className="mockup-dashboard glass-panel">
                <div className="mockup-header">
                  <span className="mockup-dot red" />
                  <span className="mockup-dot yellow" />
                  <span className="mockup-dot green" />
                </div>
                <div className="mockup-body">
                  <p><span className="comment">// Custom developer configuration</span></p>
                  <p>
                    <span className="keyword">const</span> developer = &#123;
                  </p>
                  <p style={{ paddingLeft: '1rem' }}>
                    name: <span className="string">'Alex Morgan'</span>,
                  </p>
                  <p style={{ paddingLeft: '1rem' }}>
                    role: <span className="string">'Full-Stack Engineer'</span>,
                  </p>
                  <p style={{ paddingLeft: '1rem' }}>
                    skills: [
                  </p>
                  <p style={{ paddingLeft: '2rem' }}>
                    <span className="string">'React'</span>, <span className="string">'TypeScript'</span>,
                  </p>
                  <p style={{ paddingLeft: '2rem' }}>
                    <span className="string">'Node.js'</span>, <span className="string">'GraphQL'</span>
                  </p>
                  <p style={{ paddingLeft: '1rem' }}>
                    ],
                  </p>
                  <p style={{ paddingLeft: '1rem' }}>
                    loveForCleanCode: <span className="keyword">true</span>,
                  </p>
                  <p style={{ paddingLeft: '1rem' }}>
                    solveProblems: <span className="function">()</span> <span className="keyword">=&gt;</span> &#123;
                  </p>
                  <p style={{ paddingLeft: '2rem' }}>
                    <span className="keyword">return</span> <span className="string">'Optimal Solution'</span>;
                  </p>
                  <p style={{ paddingLeft: '1rem' }}>
                    &#125;
                  </p>
                  <p>&#125;;</p>
                </div>
              </div>

              {/* Stats Card Overlay */}
              <div className="floating-card glass-panel">
                <div className="card-icon">
                  <Sparkles size={18} />
                </div>
                <div className="card-info">
                  <span className="card-label">Focus Area</span>
                  <span className="card-value">Performance & UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
