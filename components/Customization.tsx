import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Palette, Grid, Box, ArrowRight } from 'lucide-react';

const Customization: React.FC = () => {
  return (
    <section id="custom" className="py-32 bg-[#F2EFE9] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative group">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <img 
                  src="https://picsum.photos/800/600?random=50" 
                  alt="Projeto Sob Medida" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating Overlay Card 1 */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -left-4 md:-left-10 glass-dark p-6 rounded-2xl max-w-xs text-white shadow-xl border border-white/10"
              >
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-therra-gold/20 rounded-lg text-therra-gold">
                     <Ruler size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1 text-therra-gold">Qualquer Medida</h4>
                     <p className="text-sm text-gray-300 leading-snug">Adaptamos o projeto milimetricamente ao seu espaço disponível.</p>
                   </div>
                </div>
              </motion.div>
            </motion.div>

             {/* Decorative backdrop */}
             <div className="absolute -top-10 -right-10 w-full h-full bg-therra-gold/10 rounded-[2.5rem] -z-0 transform rotate-3 transition-transform group-hover:rotate-6 duration-500" />
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-therra-gold font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Atelier Therrarios
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold text-therra-dark mb-8 font-serif leading-tight"
            >
              Sua imaginação é <br /> o único <span className="text-therra-light italic">limite</span>.
            </motion.h2>
            
            <p className="text-lg text-therra-muted mb-12 leading-relaxed border-l-4 border-therra-gold pl-6">
              Não encontrou o tamanho ideal? Desenvolvemos projetos 100% personalizados para espécies exóticas ou móveis integrados.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: <Palette />, text: "Acabamentos Premium" },
                { icon: <Box />, text: "Compartimentos Extras" },
                { icon: <Grid />, text: "Rodinhas Reforçadas" },
                { icon: <Ruler />, text: "Layouts Complexos" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-default group"
                >
                  <div className="text-therra-light group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="font-medium text-therra-dark text-sm md:text-base">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/5511991073346" 
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-therra-dark text-white rounded-xl font-medium hover:bg-therra-light transition-colors shadow-[0_10px_20px_-5px_rgba(26,61,61,0.4)] gap-3"
            >
              Solicitar Orçamento Exclusivo
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;