import React from 'react';
import Button from './Button';

const LocationInfo: React.FC = () => {
  return (
    <section className="py-0 flex flex-col md:flex-row h-auto md:h-[600px]">
      <div className="w-full md:w-1/2 bg-gold-50 p-12 md:p-20 flex flex-col justify-center">
        <span className="text-gold-500 font-bold tracking-widest text-xs uppercase mb-4">Visítenos</span>
        <h2 className="font-serif text-4xl mb-8 text-dark">Aureum Maison<br/>Cartagena</h2>
        
        <div className="space-y-6 font-sans text-gray-600 mb-10">
          <div>
            <h4 className="text-dark font-bold uppercase text-sm tracking-wide mb-1">Dirección</h4>
            <p>Calle Santo Domingo #33-29</p>
            <p>Centro Histórico, Cartagena de Indias</p>
          </div>
          
          <div>
            <h4 className="text-dark font-bold uppercase text-sm tracking-wide mb-1">Horario</h4>
            <p>Lunes - Sábado: 10:00 AM - 8:00 PM</p>
            <p>Domingo: Cita Previa</p>
          </div>
          
          <div>
            <h4 className="text-dark font-bold uppercase text-sm tracking-wide mb-1">Contacto</h4>
            <p>+57 (300) 123-4567</p>
            <p>concierge@aureum.co</p>
          </div>
        </div>

        <div className="flex gap-4">
           <Button variant="primary" size="md">Agendar Cita</Button>
           <Button variant="outline" size="md">WhatsApp</Button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 bg-gray-200 relative min-h-[400px]">
        {/* Using iframe for map as it requires no API key for basic embedding */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1802927233777!2d-75.55325302396348!3d10.42718696587989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f98e65386d3%3A0x868b20921029c786!2sCartagena%20de%20Indias%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1715438885012!5m2!1ses!2sco" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationInfo;