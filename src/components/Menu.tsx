import { motion } from 'motion/react';
import { ShoppingCart, Flame } from 'lucide-react';
import { MENU_ITEMS } from '../data';

export default function Menu() {
  const getWhatsAppOrderLink = (itemName: string, price: number) => {
    const formattedMessage = `Hello Taque's Kota! I'd like to place an order for: ${itemName} ($${price.toFixed(2)}).`;
    return `https://wa.me/263774675739?text=${encodeURIComponent(formattedMessage)}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section
      id="menu"
      className="py-24 bg-brand-dark-soft relative border-t border-b border-brand-beige/10"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-brand-dark to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            id="menu-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1 bg-brand-beige/10 text-brand-beige px-3: py-1 px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Flame className="h-3 w-3 animate-pulse" />
            <span>Campus Favorites</span>
          </motion.div>
          
          <motion.h2
            id="menu-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-white font-sans tracking-tight"
          >
            Our Menu
          </motion.h2>
          <div className="w-16 h-1 bg-brand-beige mx-auto mt-4 rounded-full" />
        </div>

        {/* Menu Cards Grid */}
        <motion.div
          id="menu-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {MENU_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              id={`menu-card-${item.id}`}
              variants={itemVariants}
              className="group bento-card bento-card-hover flex flex-col h-full shadow-lg p-0 overflow-hidden"
            >
              {/* Image Container with Aspect Ratio and Badge handling */}
              <div className="relative overflow-hidden aspect-[4/3] bg-brand-dark-soft">
                <img
                  id={`menu-card-img-${item.id}`}
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Visual dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent pointer-events-none" />

                {/* Best Value Badge */}
                {item.badge && (
                  <span
                    id={`menu-card-badge-${item.id}`}
                    className="absolute top-3 right-3 bg-brand-beige text-brand-dark font-black text-[10px] tracking-widest px-3 py-1.5 rounded-md shadow-md uppercase"
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow justify-between text-left space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3
                      id={`menu-card-title-${item.id}`}
                      className="text-lg font-bold text-brand-white group-hover:text-brand-beige transition-colors line-clamp-2 leading-snug"
                    >
                      {item.name}
                    </h3>
                  </div>
                  <p
                    id={`menu-card-desc-${item.id}`}
                    className="text-gray-400 text-sm font-light min-h-[40px] line-clamp-2 leading-relaxed"
                  >
                    {item.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Price */}
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl font-black text-brand-beige font-sans">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Order Button */}
                  <a
                    id={`menu-card-order-btn-${item.id}`}
                    href={getWhatsAppOrderLink(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 bg-brand-beige text-brand-dark font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-brand-white focus:scale-95"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Order Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
