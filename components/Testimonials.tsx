import React from 'react';
import { Testimonial } from '../types';
import { Quote, Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    name: "João Silva",
    role: "Tutor de Hamster Sírio",
    text: "Eu adorei o terrário, ficou lindo e realmente trouxe um charme especial aqui em casa.",
    image: "https://picsum.photos/100/100?random=88"
  },
  {
    name: "Mariana Costa",
    role: "Tutora de Gerbil",
    text: "A ideia de colocar gavetas é sensacional, ajuda muito a guardar as coisas do pet. Acabamento perfeito.",
    image: "https://picsum.photos/100/100?random=89"
  },
  {
    name: "Pedro Alves",
    role: "Tutor de Rato Twister",
    text: "Recomendo muito o trabalho. A ventilação é excelente e o vidro frontal dá uma visão total.",
    image: "https://picsum.photos/100/100?random=90"
  },
  {
    name: "Ana Clara",
    role: "Tutora de Corn Snake",
    text: "Segurança era minha prioridade e o sistema de travas é ótimo. O design all black ficou incrível na sala.",
    image: "https://picsum.photos/100/100?random=91"
  },
  {
    name: "Lucas Mendes",
    role: "Tutor de Hamster Anão",
    text: "Produto de extrema qualidade. Chegou antes do prazo e o atendimento foi super atencioso.",
    image: "https://picsum.photos/100/100?random=92"
  }
];

interface TestimonialCardProps {
  t: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ t }) => (
  <div className="w-[350px] bg-white p-8 rounded-2xl flex-shrink-0 border border-therra-cream shadow-sm hover:shadow-lg transition-all mx-4 relative group">
    <div className="absolute -top-4 right-8 w-10 h-10 bg-therra-cream text-therra-gold flex items-center justify-center rounded-full group-hover:bg-therra-gold group-hover:text-white transition-colors">
       <Quote size={18} fill="currentColor" />
    </div>
    
    <div className="flex gap-1 text-therra-gold mb-4">
        {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
    </div>

    <p className="text-therra-dark/80 italic mb-6 leading-relaxed text-sm line-clamp-3">"{t.text}"</p>
    
    <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
      <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-therra-cream" />
      <div>
        <h4 className="font-bold text-therra-dark text-sm">{t.name}</h4>
        <p className="text-xs text-therra-muted">{t.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#F7F5F0] relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-bold text-therra-dark font-serif mb-4">Quem compra, recomenda</h2>
        <p className="text-therra-muted">Junte-se a nossa comunidade de tutores apaixonados.</p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
         {/* Left Fade */}
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F7F5F0] to-transparent z-10 pointer-events-none" />
         {/* Right Fade */}
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F7F5F0] to-transparent z-10 pointer-events-none" />

         {/* Scroll Track */}
         <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
         </div>
      </div>

      <div className="mt-12 text-center">
         <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-therra-dark font-medium border-b border-therra-dark hover:text-therra-gold hover:border-therra-gold transition-colors">
            Ver mais feedbacks no Instagram
         </a>
      </div>
    </section>
  );
};

export default Testimonials;