import React from 'react';
import { Instagram, Facebook, MessageCircle, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#142e2e] text-therra-cream pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-therra-gold text-therra-dark flex items-center justify-center rounded-lg font-serif font-bold text-xl">T</div>
               <span className="font-serif text-2xl font-bold tracking-wider">THERRARIOS</span>
            </div>
            <p className="text-therra-cream/60 max-w-sm mb-8 leading-relaxed font-light">
              A primeira boutique de terrários premium do Brasil. Transformando o lar do seu pet com segurança, conforto biológico e design de alto padrão.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-therra-gold hover:text-therra-dark hover:border-therra-gold transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-therra-gold hover:text-therra-dark hover:border-therra-gold transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-therra-gold font-serif">Explorar</h4>
            <ul className="space-y-4 text-therra-cream/60">
              <li><a href="#home" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-therra-gold rounded-full opacity-0 group-hover:opacity-100"></span> Início</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Coleção Signature</a></li>
              <li><a href="#custom" className="hover:text-white transition-colors">Projetos Sob Medida</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-therra-gold font-serif">Atendimento</h4>
            <ul className="space-y-4 text-therra-cream/60">
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="mt-1 text-therra-gold" />
                <span>(11) 99107-3346 <br/> <span className="text-xs text-white/30">WhatsApp Direct</span></span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-therra-gold" />
                <span>São Paulo - SP <br/> <span className="text-xs text-white/30">Enviamos para todo Brasil</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-therra-gold" />
                <span>Seg - Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-therra-cream/30">
          <p>&copy; 2025 Therrarios. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;