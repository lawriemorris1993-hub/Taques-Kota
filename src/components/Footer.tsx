import { Utensils, Bike, Clock, Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';

export default function Footer() {
  return (
    <footer
      id="main-footer"
      className="bg-[#0a0a0a] text-gray-400 py-16 border-t border-brand-beige/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-brand-beige text-brand-dark rounded-md">
                <Utensils className="h-4 w-4" />
              </div>
              <span className="text-xl font-black text-brand-white tracking-tight">
                Taque's <span className="text-brand-beige">Kota</span>
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed">
              Serving the absolute best, premium-quality Kasi flavours on campus. Fast preparation, great taste, student rates.
            </p>
          </div>

          {/* Column 2: Quick Features */}
          <div className="space-y-3">
            <h4 className="text-brand-white text-xs font-bold uppercase tracking-widest border-b border-brand-beige/20 pb-2">
              Our Identity
            </h4>
            <ul className="space-y-2 text-sm font-light">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-brand-beige rounded-full" />
                <span>Fresh Kasi Flavour</span>
              </li>
              <li className="flex items-center space-x-1.5 text-brand-beige font-semibold">
                <Bike className="h-4 w-4" />
                <span>Free Delivery Around Campus</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours info */}
          <div className="space-y-3">
            <h4 className="text-brand-white text-xs font-bold uppercase tracking-widest border-b border-brand-beige/20 pb-2">
              Our Hours
            </h4>
            <div className="space-y-3 text-sm font-light">
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-brand-beige mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-brand-white font-medium">Monday – Friday</p>
                  <p>08:00 – 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Hotline Support */}
          <div className="space-y-3">
            <h4 className="text-brand-white text-xs font-bold uppercase tracking-widest border-b border-brand-beige/20 pb-2">
              Get Food
            </h4>
            <div className="space-y-3 text-sm font-light">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-brand-beige mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-brand-white font-medium">WhatsApp hotline</p>
                  <p className="text-brand-beige font-semibold">{WHATSAPP_NUMBER}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Closing details */}
        <div className="mt-12 pt-8 border-t border-brand-beige/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <p id="footer-copyright" className="text-gray-500">
            Copyright © 2026 Taque's Kota. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#home" className="hover:text-brand-beige transition-colors">Back to Top</a>
            <span className="text-gray-700">|</span>
            <a href="#menu" className="hover:text-brand-beige transition-colors">Our Menu</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
