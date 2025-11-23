import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: "500+", label: "Terrários Entregues" },
  { number: "100%", label: "Clientes Satisfeitos" },
  { number: "12x", label: "Parcelamento" },
  { number: "1 Ano", label: "Garantia Total" },
];

const SocialProof: React.FC = () => {
  return (
    <section className="bg-therra-dark py-12 border-b border-white/5 relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
       
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center px-4"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-therra-gold font-serif mb-2">{stat.number}</h3>
              <p className="text-therra-cream/60 text-sm md:text-base uppercase tracking-wider font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;