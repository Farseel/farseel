import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'certifications', label: 'Credentials' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled styling
      setScrolled(currentScrollY > 20);

      // Hide / Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true); // Scrolling down, hide
      } else {
        setHidden(false); // Scrolling up, show
      }
      setLastScrollY(currentScrollY);

      // Active section highlight
      const scrollPosition = currentScrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 w-full px-4`}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className={`max-w-5xl mx-auto rounded-full border border-white/5 px-6 py-3 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-bg-card/75 backdrop-blur-md shadow-glow-emerald-sm' : 'bg-transparent'
      }`}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="font-sans font-extrabold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-accent-secondary">[</span>
          <span className="text-text-light">Farseel</span>
          <span className="text-accent-green">.Dev</span>
          <span className="text-accent-secondary">]</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 py-1 block ${
                  activeSection === item.id ? 'text-text-light font-semibold' : 'text-text-secondary hover:text-text-light'
                }`}
              >
                {item.label}
              </a>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSectionIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-green rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-light hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-bg-card/95 border border-white/5 rounded-2xl p-6 shadow-2xl backdrop-blur-lg flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                  activeSection === item.id 
                    ? 'bg-accent-green/10 text-accent-secondary' 
                    : 'text-text-secondary hover:bg-white/5 hover:text-text-light'
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
