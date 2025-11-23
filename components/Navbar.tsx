import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Coleção', href: '#products' },
    { name: 'Diferenciais', href: '#features' },
    { name: 'Sob Medida', href: '#custom' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3 glass-panel shadow-sm' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-therra-dark text-therra-gold flex items-center justify-center rounded-lg shadow-lg group-hover:bg-therra-gold group-hover:text-therra-dark transition-all duration-300 transform group-hover:rotate-3">
              <span className="font-serif text-2xl font-bold">T</span>
            </div>
            <span className={`font-serif text-xl font-bold tracking-wide transition-colors duration-300 ${isScrolled ? 'text-therra-dark' : 'text-therra-dark'}`}>
              THERRARIOS
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-therra-dark font-medium text-sm uppercase tracking-widest hover:text-therra-gold transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-therra-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5511991073346" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-therra-dark text-white rounded-full hover:bg-therra-light transition-all shadow-lg hover:shadow-therra-gold/20 border border-transparent hover:border-therra-gold/50"
            >
              <MessageCircle size={18} />
              <span className="font-medium">Falar no WhatsApp</span>
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-therra-dark p-2 rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-therra-gold origin-left"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-[#F7F5F0] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={link.href}
                  className="text-3xl font-serif font-bold text-therra-dark border-b border-gray-200 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="https://wa.me/5511991073346"
                className="w-full text-center py-4 bg-therra-dark text-white rounded-xl text-lg font-medium mt-4"
              >
                Falar no WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;