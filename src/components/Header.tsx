import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WHATSAPP_RAW_LINK } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Hours', href: '#hours' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky bar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-brand-beige/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group"
          >
            <div className="p-2 bg-brand-beige rounded-lg text-brand-dark transition-transform duration-300 group-hover:scale-105">
              <Utensils className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-white">
              Taque's <span className="text-brand-beige">Kota</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                id={`desktop-nav-${item.label.toLowerCase()}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-brand-white hover:text-brand-beige transition-colors tracking-wide py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              id="desktop-order-btn"
              href={WHATSAPP_RAW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand-beige text-brand-dark hover:bg-brand-white hover:text-brand-dark text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md shadow-brand-beige/10 hover:shadow-white/10"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-white hover:text-brand-beige p-2 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-dark-soft/98 border-t border-brand-beige/20"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  id={`mobile-nav-${item.label.toLowerCase()}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-base font-medium text-brand-white hover:text-brand-beige hover:bg-white/5 px-3 py-2.5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  id="mobile-order-btn"
                  href={WHATSAPP_RAW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full px-5 py-3 bg-brand-beige text-brand-dark font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-brand-white transition-colors"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
