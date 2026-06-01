import { motion } from 'motion/react';
import { Sparkles, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-brand-dark overflow-hidden border-t border-brand-beige/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Animated Accent Marker */}
        <motion.div
          id="about-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-1.5 text-brand-beige tracking-widest text-xs uppercase font-semibold mb-4"
        >
          <Sparkles className="h-4 w-4 text-brand-beige" />
          <span>Our Story</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          id="about-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-brand-white font-sans tracking-tight mb-8"
        >
          About Taque's Kota
        </motion.h2>

        {/* Content Card with subtle beige outline */}
        <motion.div
          id="about-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bento-card bento-card-hover p-8 sm:p-12 shadow-xl relative overflow-hidden group"
        >
          {/* Subtle gold shining corner details */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-beige opacity-50 m-4" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-brand-beige opacity-50 m-4" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-brand-beige opacity-50 m-4" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-beige opacity-50 m-4" />

          <p
            id="about-content"
            className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            "Taque's Kota is a campus-based mobile restaurant serving fresh and affordable meals daily. 
            We prepare delicious Kotas, burgers, chips and meal combos, offering fast service and free delivery around campus."
          </p>

          <div
            id="about-badges-grid"
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-beige/10"
          >
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-6 w-6 text-brand-beige" />
              <span className="text-xs font-semibold text-brand-white uppercase tracking-wider">Premium Flavour</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="h-6 w-6 text-brand-beige" />
              <span className="text-xs font-semibold text-brand-white uppercase tracking-wider">Campus Native</span>
            </div>
            <div className="hidden sm:flex flex-col items-center space-y-2">
              <Sparkles className="h-6 w-6 text-brand-beige" />
              <span className="text-xs font-semibold text-brand-white uppercase tracking-wider">Fresh Daily</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
