import React from 'react';
import { Gem, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Gem className="w-6 h-6 text-gold-500" />
              <span className="font-serif text-xl tracking-widest font-semibold">
                AUREUM
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Alta joyería y relojería en el corazón de Cartagena. 
              Pioneros en la integración de lujo tradicional y certificación Web3.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold-100">Colecciones</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Alta Joyería</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Relojes Suizos</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Compromiso</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Ediciones NFT</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold-100">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Autenticidad & Garantía</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Política de Envíos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold-100">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-4">Suscríbase para recibir invitaciones a eventos exclusivos.</p>
            <div className="flex border-b border-gray-600 pb-2 mb-6">
              <input 
                type="email" 
                placeholder="Su correo electrónico" 
                className="bg-transparent w-full text-sm outline-none placeholder-gray-600 text-white"
              />
              <button className="text-gold-400 text-xs uppercase tracking-widest hover:text-white transition-colors">
                Unirse
              </button>
            </div>
            <div className="flex gap-4 text-gray-400">
              <Instagram size={20} className="hover:text-white cursor-pointer" />
              <Facebook size={20} className="hover:text-white cursor-pointer" />
              <Twitter size={20} className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Aureum Cartagena. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Developed for Luxury</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;