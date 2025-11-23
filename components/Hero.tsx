import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const yImage = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  // Floating particles animation
  const particles = Array.from({ length: 6 });

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center bg-[#F7F5F0]">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-therra-gold/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-therra-dark/5 rounded-full blur-[100px]" />

      {/* Floating Leaves/Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-therra-gold/40 rounded-full"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0.3 
          }}
          animate={{ 
            y: [null, Math.random() * -100],
            x: [null, Math.random() * 50 - 25],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            style={{ y: yText, opacity }}
            className="lg:w-1/2 relative"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-therra-gold/30 shadow-sm mb-8"
            >
              <Star size={14} className="text-therra-gold fill-therra-gold" />
              <span className="text-xs font-bold tracking-widest uppercase text-therra-dark">Premium Handmade Quality</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-5xl lg:text-7xl font-bold text-therra-dark leading-[1.1] mb-8"
            >
              O Habitat <br />
              <span className="italic font-serif text-therra-gold relative inline-block">
                Perfeito
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-therra-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span> para <br />
              o seu Pet.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-therra-muted mb-10 max-w-lg leading-relaxed border-l-2 border-therra-gold/30 pl-6"
            >
              Terrários artesanais de alta performance. Unimos a biologia do seu animal com o design sofisticado que sua casa merece.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#products" 
                className="group px-8 py-4 bg-therra-dark text-white rounded-xl font-medium transition-all shadow-[0_10px_30px_-10px_rgba(26,61,61,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(26,61,61,0.6)] flex items-center justify-center gap-3 overflow-hidden relative"
              >
                <span className="relative z-10">Ver Coleção</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-therra-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#custom" 
                className="px-8 py-4 bg-transparent text-therra-dark border border-therra-dark/20 rounded-xl font-medium transition-all hover:bg-white hover:border-transparent hover:shadow-lg flex items-center justify-center"
              >
                Projeto Sob Medida
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex items-center gap-4"
            >
               <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-4 border-[#F7F5F0] overflow-hidden bg-gray-200">
                      <img src={`https://picsum.photos/100/100?random=${i+50}`} alt="User" className="w-full h-full object-cover" />
                   </div>
                 ))}
               </div>
               <div>
                 <div className="flex text-therra-gold mb-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <p className="text-sm text-therra-muted"><span className="font-bold text-therra-dark">500+</span> Tutores Felizes</p>
               </div>
            </motion.div>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div 
            style={{ y: yImage }}
            className="lg:w-1/2 relative"
          >
            {/* Main Image Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="relative z-20"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white">
                <img 
                  src="https://picsum.photos/800/1000?random=1&grayscale" 
                  alt="Terrário Premium All Black" 
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Info Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl border-l-4 border-therra-gold"
                >
                  <div className="flex justify-between items-end">
                    <div>
                        <p className="text-xs text-therra-dark/70 uppercase tracking-wider font-bold mb-1">Best Seller</p>
                        <h3 className="font-serif font-bold text-therra-dark text-2xl">Modelo All Black</h3>
                        <p className="text-therra-text/80 text-sm mt-1">MDF Premium • Ventilação Superior</p>
                    </div>
                    <div className="bg-therra-dark text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight size={18} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative elements behind */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
               className="absolute -top-10 -right-10 w-32 h-32 border-2 border-dashed border-therra-gold/30 rounded-full z-0"
            />
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute top-20 -right-8 z-30 glass-card p-4 rounded-lg flex items-center gap-3 shadow-lg animate-bounce"
              style={{ animationDuration: '3s' }}
            >
               <div className="bg-green-100 p-2 rounded-full text-green-700">
                 <ShieldCheck size={20} />
               </div>
               <div>
                 <p className="text-xs text-gray-500 font-bold uppercase">Garantia</p>
                 <p className="text-sm font-bold text-therra-dark">1 Ano Total</p>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;