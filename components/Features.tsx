import React from 'react';
import { motion } from 'framer-motion';
import { Wind, ShieldCheck, Gem, Layers } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Bio-Ventilação",
    description: "Sistema exclusivo de fluxo de ar cruzado que previne fungos e mantém a temperatura ideal sem correntes diretas.",
    icon: <Wind size={28} />
  },
  {
    title: "MDF Ultra-Premium",
    description: "Material de 15mm com tripla selagem. Resistente à umidade, urina e arranhões. Durabilidade superior a 10 anos.",
    icon: <Layers size={28} />
  },
  {
    title: "Vidro Crystal Clear",
    description: "Vidros reforçados de 4mm com transparência total. Fixação com silicone atóxico de cura neutra.",
    icon: <ShieldCheck size={28} />
  },
  {
    title: "Design Integrado",
    description: "Mobiliário que compõe sua decoração. Gavetas invisíveis 'push-to-open' e acabamento sem parafusos aparentes.",
    icon: <Gem size={28} />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden">
      {/* Background Details */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#F7F5F0] to-white" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-therra-gold font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Excelência em Detalhes
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-therra-dark mb-6"
          >
            Por que somos a escolha <br /> dos tutores exigentes?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-therra-gold/10 transition-all duration-300 group cursor-default relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-therra-cream to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-therra-cream rounded-2xl flex items-center justify-center text-therra-dark mb-6 shadow-inner group-hover:bg-therra-dark group-hover:text-therra-gold transition-colors duration-300 transform group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-therra-dark mb-4 font-serif">{feature.title}</h3>
                <p className="text-therra-muted leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;