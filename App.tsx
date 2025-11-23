import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Customization from './components/Customization';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-therra-text font-sans selection:bg-therra-gold selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <ProductShowcase />
        <Features />
        <Customization />
        <ProcessTimeline />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />

      {/* Floating WhatsApp Button (All screens) */}
      <motion.a
        href="https://wa.me/5511991073346"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        style={{ scale, opacity }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors group"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 group-hover:opacity-100"></div>
        <MessageCircle size={28} fill="white" className="relative z-10" />
      </motion.a>
    </div>
  );
};

export default App;