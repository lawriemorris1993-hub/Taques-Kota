import { motion } from 'motion/react';
import { Truck, PhoneCall, Gift } from 'lucide-react';
import { WHATSAPP_RAW_LINK } from '../data';

export default function Delivery() {
  return (
    <section
      id="free-delivery"
      className="relative py-24 bg-brand-dark overflow-hidden border-b border-brand-beige/10"
    >
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-beige/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          id="delivery-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="bento-card bento-card-hover p-8 sm:p-14 relative shadow-xl overflow-hidden"
        >
          {/* Subtle background icon pattern */}
          <div className="absolute -right-10 -bottom-10 opacity-5 w-44 h-44 text-brand-beige pointer-events-none">
            <Truck className="w-full h-full" />
          </div>

          <div className="flex flex-col items-center space-y-6">
            {/* Delivery Icon Container */}
            <motion.div
              id="delivery-icon-container"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="p-5 bg-brand-beige text-brand-dark rounded-full shadow-lg shadow-brand-beige/10"
            >
              <Truck className="h-10 w-10" />
            </motion.div>

            {/* Headline */}
            <h2
              id="delivery-title"
              className="text-2xl sm:text-3xl font-extrabold text-brand-white uppercase tracking-tight"
            >
              Free Delivery Around Campus
            </h2>

            {/* Content Text */}
            <p
              id="delivery-text"
              className="text-gray-300 font-light text-base sm:text-lg max-w-xl leading-relaxed"
            >
              "Order from anywhere around campus and enjoy fast delivery at no extra cost."
            </p>

            {/* Accent Highlight details */}
            <div className="flex items-center space-x-2 text-brand-beige text-xs font-semibold uppercase tracking-widest bg-brand-beige/10 py-2 px-4 rounded-xl">
              <Gift className="h-4 w-4" />
              <span>No Minimum Order Threshold</span>
            </div>

            {/* Order Action Button */}
            <a
              id="delivery-whatsapp-btn"
              href={WHATSAPP_RAW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-beige text-brand-dark font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-brand-white hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
