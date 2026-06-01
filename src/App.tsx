/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Delivery from './components/Delivery';
import HoursAndWhy from './components/HoursAndWhy';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark overflow-x-hidden antialiased font-sans text-brand-white">
      {/* Premium Sticky Navigation Bar */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section Banner */}
        <Hero />

        {/* Brand Mission & Story */}
        <About />

        {/* High-Resolution Grid Food Cards */}
        <Menu />

        {/* Campus Delivery Call-to-Action */}
        <Delivery />

        {/* Operating Hours and Feature Cards */}
        <HoursAndWhy />

        {/* Form interactive message generators */}
        <Contact />
      </main>

      {/* Structured coordinates footer */}
      <Footer />
    </div>
  );
}
