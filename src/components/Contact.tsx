import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, PhoneCall, Send, User, Phone, BookOpen } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_RAW_LINK } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Dynamically compute WhatsApp link based on input
  const getWhatsAppSubmitLink = () => {
    const baseMessage = `Hi Taque's Kota!\n\nName: ${formData.name || '(not provided)'}\nPhone: ${formData.phone || '(not provided)'}\nMessage: ${formData.message || '(not provided)'}`;
    return `https://wa.me/263774675739?text=${encodeURIComponent(baseMessage)}`;
  };

  return (
    <section
      id="contact"
      className="py-24 bg-brand-dark relative"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-beige/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            id="contact-badge"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1 bg-brand-beige/10 text-brand-beige px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <MessageSquare className="h-3 w-3" />
            <span>Get In Touch</span>
          </motion.div>
          
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl font-extrabold text-brand-white font-sans tracking-tight"
          >
            Contact Section
          </h2>
          <p className="text-gray-400 font-light mt-2">
            Have questions or want to place custom orders? Text us directly!
          </p>
          <div className="w-16 h-1 bg-brand-beige mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
          
          {/* Business details and direct order button (5 grid columns) */}
          <motion.div
            id="contact-details-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bento-card bento-card-hover p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3
                id="contact-business-name"
                className="text-2xl font-bold text-brand-white"
              >
                Taque's Kota
              </h3>
              
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Connect with us directly for catering requests, bulk campus deliveries, and order updates. 
                Our team is standing by to deliver hot, mouthwatering food right to you.
              </p>

              <div id="contact-info-list" className="space-y-4 pt-4 border-t border-brand-beige/10">
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 bg-brand-beige rounded-lg text-brand-dark">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-400">WhatsApp Hotline</span>
                    <span id="contact-whatsapp-number" className="font-bold text-brand-white text-md">
                      {WHATSAPP_NUMBER}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Large WhatsApp Main Order Button */}
            <div className="pt-8">
              <a
                id="contact-large-order-btn"
                href={WHATSAPP_RAW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 w-full py-4 bg-brand-beige text-brand-dark font-black uppercase text-xs tracking-wider rounded-xl hover:bg-brand-white transition-all duration-300 shadow-md shadow-brand-beige/10 hover:-translate-y-0.5"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Large WhatsApp Order Button</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Input Form (7 grid columns) */}
          <motion.div
            id="contact-form-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-7 bento-card bento-card-hover p-8"
          >
            <form id="whatsapp-message-form" onSubmit={(e) => e.preventDefault()} className="space-y-5 text-left">
              
              {/* Name Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-beige flex items-center space-x-1">
                  <User className="h-3 w-3" />
                  <span>Full Name</span>
                </label>
                <input
                  id="contact-input-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Student Name / Staff Name"
                  required
                  className="w-full bg-brand-dark border border-brand-beige/20 focus:border-brand-beige rounded-xl px-4 py-3 text-sm text-brand-white placeholder-gray-500 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Phone Number Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-beige flex items-center space-x-1">
                  <Phone className="h-3 w-3" />
                  <span>Phone Number</span>
                </label>
                <input
                  id="contact-input-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g., +263 77 467 5739"
                  required
                  className="w-full bg-brand-dark border border-brand-beige/20 focus:border-brand-beige rounded-xl px-4 py-3 text-sm text-brand-white placeholder-gray-500 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-beige flex items-center space-x-1">
                  <BookOpen className="h-3 w-3" />
                  <span>Your Message / Custom Combo Order</span>
                </label>
                <textarea
                  id="contact-input-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Type your question or specify the food items details you would like to order..."
                  required
                  className="w-full bg-brand-dark border border-brand-beige/20 focus:border-brand-beige rounded-xl px-4 py-3 text-sm text-brand-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Send Submit Button (Open prefilled WhatsApp) */}
              <div className="pt-2">
                <a
                  id="contact-send-btn"
                  href={getWhatsAppSubmitLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2.5 w-full py-4 bg-brand-beige text-brand-dark font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-brand-white transition-all duration-300 shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  <span>Send</span>
                </a>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
