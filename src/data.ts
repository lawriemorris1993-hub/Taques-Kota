import { MenuItem, Feature } from './types';

export const WHATSAPP_NUMBER = '+263 774 675 739';
export const WHATSAPP_RAW_LINK = 'https://wa.me/263774675739';

export const HERO_IMAGE = '/src/assets/images/hero_banner_1780331972483.png';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'kasi-kota',
    name: 'Fresh Kasi Kota',
    price: 1.50,
    description: 'Freshly prepared Kota packed with flavour and served hot.',
    image: '/src/assets/images/kasi_kota_1780331989837.png'
  },
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    price: 1.00,
    description: 'Juicy burger prepared fresh and served hot.',
    image: '/src/assets/images/classic_burger_1780332010782.png'
  },
  {
    id: 'kasi-chips',
    name: 'Kasi Style Chips',
    price: 1.00,
    description: 'Golden crispy chips seasoned to perfection.',
    image: '/src/assets/images/kasi_chips_1780332029189.png'
  },
  {
    id: 'combo-meal',
    name: 'Burger + Chips + 500ml Pepsi Combo',
    price: 2.00,
    description: 'The perfect meal combo for lunch.',
    image: '/src/assets/images/combo_meal_1780332052349.png',
    badge: 'BEST VALUE'
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'Fresh Daily',
    description: 'Prepared fresh every day.',
    iconName: 'ChefHat'
  },
  {
    title: 'Affordable Prices',
    description: 'Great meals at student-friendly prices.',
    iconName: 'Sparkles'
  },
  {
    title: 'Fast Delivery',
    description: 'Quick delivery around campus.',
    iconName: 'Bike'
  }
];
