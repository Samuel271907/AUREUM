import React from 'react';
import { ShieldCheck, Truck, Gem, Bitcoin } from 'lucide-react';

const ValueProp: React.FC = () => {
  const props = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Autenticidad Garantizada",
      desc: "Cada pieza incluye certificado de origen y garantía internacional."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logística Segura",
      desc: "Entrega blindada en Cartagena y envíos asegurados a todo el país."
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Atención Privada",
      desc: "Citas privadas en nuestro showroom o consultoría virtual."
    },
    {
      icon: <Bitcoin className="w-8 h-8" />,
      title: "Web3 Ready",
      desc: "Aceptamos criptomonedas y emitimos certificados de propiedad NFT."
    }
  ];

  return (
    <section className="py-20 bg-gold-50 border-y border-gold-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {props.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white border border-gold-200 flex items-center justify-center text-gold-500 mb-6 shadow-sm">
                {item.icon}
              </div>
              <h4 className="font-serif text-lg mb-3 text-dark font-semibold">{item.title}</h4>
              <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;