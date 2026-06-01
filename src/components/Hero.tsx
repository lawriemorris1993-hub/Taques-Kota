import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, Bike } from 'lucide-react';
import { HERO_IMAGE, WHATSAPP_RAW_LINK } from '../data';

export default function Hero() {
  const handleViewMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      const offset = 80;
      const position = menuSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: position - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-beige/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-beige/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            id="hero-text-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            {/* Highlighted Badge */}
            <motion.div
              id="hero-free-delivery-badge"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-brand-beige/10 border border-brand-beige/30 px-4 py-2 rounded-full text-brand-beige font-semibold tracking-wide text-xs uppercase"
            >
              <Bike className="h-4 w-4 animate-bounce" />
              <span>Free Delivery Around Campus</span>
            </motion.div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-white leading-[1.1] font-sans"
            >
              Fresh Kasi Flavour <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-beige via-white to-brand-beige">
                Delivered to You
              </span>
            </h1>

            {/* Subheadline */}
            <p
              id="hero-subheadline"
              className="text-lg text-gray-300 max-w-xl font-light leading-relaxed"
            >
              Delicious Kotas, Burgers, Chips and Combos at Student-Friendly Prices.
            </p>

            {/* Hero Buttons */}
            <div id="hero-actions" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a
                id="hero-order-whatsapp"
                href={WHATSAPP_RAW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 bg-brand-beige text-brand-dark font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-brand-white hover:shadow-lg hover:shadow-brand-beige/10 group"
              >
                <PhoneCall className="h-4 w-4 transition-transform group-hover:rotate-12" />
                <span>Order on WhatsApp</span>
              </a>

              <button
                id="hero-view-menu"
                onClick={handleViewMenuClick}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-brand-beige/40 text-brand-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:border-brand-beige hover:bg-white/5 active:scale-95 group"
              >
                <span>View Menu</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Hero Image Showcase */}
          <motion.div
            id="hero-showcase-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center w-full relative"
          >
            {/* Visual accent circles behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-beige to-white opacity-25 rounded-2xl blur-lg pointer-events-none" />
            
            <div className="relative overflow-hidden bento-card bento-card-hover p-0 shadow-2xl w-full max-w-[480px] lg:max-w-full aspect-[4/3] sm:aspect-[16:9] lg:aspect-[4/3]">
              <img
                id="hero-banner-img"
                src={HERO_IMAGE}
                alt="Taque's Kota Feast"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Soft overlay gradient near edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-85 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
