import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Terrário All White',
    description: 'Minimalismo puro. Estrutura branca selada que amplia a luminosidade e destaca o animal.',
    price: 'R$ 650,25',
    image: 'https://picsum.photos/600/400?random=10',
    tags: ['115x50x50cm', 'Clean', 'Best Seller']
  },
  {
    id: '2',
    name: 'Terrário All Black',
    description: 'Sofisticação absoluta. Acabamento preto fosco premium para ambientes modernos e elegantes.',
    price: 'R$ 1.062,54',
    image: 'https://picsum.photos/600/400?random=11',
    tags: ['150x50x50cm', 'Premium', 'Luxo']
  },
  {
    id: '3',
    name: 'Modelo Woody',
    description: 'Conexão natural. Acabamento em madeira tratada que traz aconchego e rusticidade orgânica.',
    price: 'R$ 890,00',
    image: 'https://picsum.photos/600/400?random=12',
    tags: ['100x50x50cm', 'Orgânico', 'Natural']
  }
];

// 3D Tilt Card Component
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };
  
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
  
    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-32 bg-therra-dark text-therra-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-therra-light/20 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-therra-gold/10 rounded-full blur-[96px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif">Coleção Signature</h2>
            <p className="text-therra-cream/60 max-w-md text-lg font-light">
              Modelos exclusivos à pronta entrega. A fusão perfeita entre funcionalidade biológica e alta decoração.
            </p>
          </div>
          <a href="#custom" className="group flex items-center gap-3 text-therra-gold font-medium pb-1 border-b border-transparent hover:border-therra-gold transition-all">
            <span>Ver opções sob medida</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 perspective-1000">
          {products.map((product, index) => (
            <TiltCard
              key={product.id}
              className="group relative bg-[#1f4545] rounded-[2rem] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 border border-white/5"
            >
              {/* Image Area */}
              <div className="h-72 overflow-hidden relative rounded-t-[2rem] transform-style-3d">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute top-5 right-5 z-20 flex flex-col gap-2 items-end translate-z-20">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/10 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 translate-z-10 bg-[#1f4545] rounded-b-[2rem]">
                <h3 className="text-2xl font-bold mb-2 font-serif text-white">{product.name}</h3>
                <p className="text-therra-cream/70 mb-6 h-16 text-sm leading-relaxed">{product.description}</p>
                
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-xs text-therra-cream/50 uppercase tracking-wide">
                    <Check size={14} className="text-therra-gold" /> Entrega 100% montada
                  </div>
                  <div className="flex items-center gap-2 text-xs text-therra-cream/50 uppercase tracking-wide">
                    <Check size={14} className="text-therra-gold" /> Vidro 4mm reforçado
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <span className="text-xs text-therra-cream/40 block uppercase tracking-widest">Investimento</span>
                    <span className="text-2xl font-bold text-therra-gold">{product.price}</span>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: -45 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white text-therra-dark flex items-center justify-center hover:bg-therra-gold transition-colors shadow-lg"
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;