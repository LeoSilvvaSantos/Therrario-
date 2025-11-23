import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Ruler, Hammer, Truck } from 'lucide-react';

const steps = [
  {
    title: "Atendimento Personalizado",
    description: "Converse com nossos especialistas via WhatsApp para definir o modelo ideal para seu pet.",
    icon: <MessageCircle size={24} />
  },
  {
    title: "Definição de Projeto",
    description: "Escolha entre modelos da coleção ou desenvolva um projeto sob medida com nosso time.",
    icon: <Ruler size={24} />
  },
  {
    title: "Fabricação Artesanal",
    description: "Produção cuidadosa em 7-15 dias úteis, utilizando materiais premium e selagem atóxica.",
    icon: <Hammer size={24} />
  },
  {
    title: "Entrega Segura",
    description: "Seu terrário chega montado e pronto para uso. Entregamos em SP e enviamos para todo Brasil.",
    icon: <Truck size={24} />
  }
];

const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-therra-dark font-serif mb-4">Como funciona?</h2>
          <p className="text-therra-muted">Do primeiro contato até o habitat perfeito em sua casa.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-therra-cream md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 md:items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Icon Bubble (Center) */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-therra-gold rounded-full border-4 border-white shadow-lg z-10 transform -translate-x-1/2 flex items-center justify-center text-white">
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>

                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="bg-[#F9F9F9] p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-therra-dark mb-4 shadow-sm ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-therra-dark mb-2">{step.title}</h3>
                    <p className="text-therra-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty spacer for other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;