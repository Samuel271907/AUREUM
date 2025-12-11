import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/433/1920/1080" 
          alt="Luxury Watch Background" 
          className="w-full h-full object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-90 animate-fade-in-up">
          Establecido en Cartagena
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight animate-fade-in-up delay-100">
          Excelencia <br /> <span className="italic font-light">Atemporal</span>
        </h1>
        <p className="max-w-xl mx-auto font-sans text-lg text-gray-200 mb-10 font-light tracking-wide animate-fade-in-up delay-200">
          Descubra colecciones exclusivas de alta joyería y relojería. 
          Tradición artesanal fusionada con certificación digital Web3.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <Button variant="secondary" size="lg">
            Explorar Colección
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-dark">
            Visitar Showroom
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <span className="text-xs tracking-widest uppercase writing-vertical">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;