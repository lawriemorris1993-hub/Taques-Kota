import { motion } from 'motion/react';
import { Clock, ChefHat, Tag, Bike, Sparkles } from 'lucide-react';
import { FEATURES } from '../data';

export default function HoursAndWhy() {
  // Map icons based on metadata definitions
  const getIcon = (name: string) => {
    switch (name) {
      case 'ChefHat':
        return <ChefHat className="h-6 w-6 text-brand-dark" />;
      case 'Sparkles':
        return <Tag className="h-6 w-6 text-brand-dark" />;
      case 'Bike':
        return <Bike className="h-6 w-6 text-brand-dark" />;
      default:
        return <Sparkles className="h-6 w-6 text-brand-dark" />;
    }
  };

  return (
    <section
      id="hours"
      className="py-24 bg-brand-dark-soft relative border-b border-brand-beige/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-stretch">
          
          {/* Operating Hours Column */}
          <motion.div
            id="hours-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            <div className="relative bento-card bento-card-hover p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-6">
              {/* Highlight clock icon corner circles */}
              <div className="p-4 bg-brand-beige rounded-full text-brand-dark shadow-md animate-pulse">
                <Clock className="h-8 w-8" />
              </div>

              <h2
                id="hours-title"
                className="text-2xl font-black text-brand-white uppercase tracking-wider"
              >
                Operating Hours
              </h2>
              
              <div className="w-12 h-1 bg-brand-beige rounded-full" />

              <div className="space-y-3">
                <p className="text-brand-beige font-extrabold uppercase text-xs tracking-wider">
                  Monday – Friday
                </p>
                <p
                  id="hours-time"
                  className="text-3xl sm:text-4xl font-extrabold text-brand-white tracking-tight"
                >
                  08:00 AM – 05:00 PM
                </p>
              </div>

              <span className="text-gray-400 font-light text-xs uppercase tracking-widest bg-white/5 py-1.5 px-4 rounded-md">
                Fast Service Daily
              </span>
            </div>
          </motion.div>

          {/* Why Choose Us Column */}
          <motion.div
            id="choose-us-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left"
          >
            <div>
              <div className="inline-flex items-center space-x-1.5 text-brand-beige tracking-widest text-xs uppercase font-semibold mb-3">
                <Sparkles className="h-4 w-4" />
                <span>Premium Quality Guarantee</span>
              </div>
              <h2
                id="choose-us-title"
                className="text-3xl font-extrabold text-brand-white font-sans tracking-tight"
              >
                Why Choose Us
              </h2>
              <div className="w-16 h-1 bg-brand-beige mt-4 rounded-full" />
            </div>

            {/* Feature Cards Grid (vertical stack) */}
            <div className="space-y-4">
              {FEATURES.map((feat, index) => (
                <motion.div
                  key={index}
                  id={`choose-feature-card-${index}`}
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center space-x-4 bento-card bento-card-hover p-5"
                >
                  {/* Left Icon Container */}
                  <div className="flex-shrink-0 p-3 bg-brand-beige rounded-xl">
                    {getIcon(feat.iconName)}
                  </div>
                  {/* Right Content */}
                  <div>
                    <h3 className="font-bold text-brand-white tracking-wide">
                      {feat.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-light">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
