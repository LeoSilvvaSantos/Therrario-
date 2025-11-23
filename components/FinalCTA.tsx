import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-therra-dark" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-therra-light/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-therra-gold/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white font-serif mb-6"
        >
          Seu pet merece viver <br /> em um palácio.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-therra-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          Garanta um ambiente seguro, ventilado e sofisticado hoje mesmo. Atendimento exclusivo para tirar todas as suas dúvidas.
        </motion.p>

        <motion.a
          href="https://wa.me/5511991073346"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-10 py-5 bg-therra-gold text-therra-dark rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(201,169,97,0.6)] hover:shadow-[0_0_60px_-10px_rgba(201,169,97,0.8)] transition-all"
        >
          <MessageCircle size={24} />
          Falar com Especialista
        </motion.a>
        
        <p className="mt-6 text-sm text-white/30">Resposta média em menos de 1 hora.</p>
      </div>
    </section>
  );
};

export default FinalCTA;