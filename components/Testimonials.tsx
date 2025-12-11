import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Isabella M.',
    role: 'Coleccionista',
    content: "La atención en el showroom de Cartagena fue impecable. Adquirir mi primer reloj de edición limitada con certificado NFT fue una experiencia única.",
    rating: 5,
    image: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: '2',
    name: 'Carlos D.',
    role: 'Cliente VIP',
    content: "Aureum combina la tradición de la alta joyería con la modernidad. El proceso de compra con cripto fue fluido y seguro.",
    rating: 5,
    image: 'https://picsum.photos/id/91/100/100'
  },
  {
    id: '3',
    name: 'Elena R.',
    role: 'Arquitecta',
    content: "Piezas que son verdaderas obras de arte. El anillo de compromiso que diseñamos juntos superó todas mis expectativas.",
    rating: 5,
    image: 'https://picsum.photos/id/65/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark text-gold-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">La Voz de la Excelencia</h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="flex gap-1 text-gold-400 mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-serif text-lg leading-relaxed italic mb-8 text-gray-300">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full grayscale opacity-80" />
                <div>
                  <h5 className="font-sans text-sm font-bold uppercase tracking-widest text-white">{t.name}</h5>
                  <span className="text-xs text-gold-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;