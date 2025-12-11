import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import ValueProp from './components/ValueProp';
import Testimonials from './components/Testimonials';
import LocationInfo from './components/LocationInfo';
import Footer from './components/Footer';
import AIConcierge from './components/AIConcierge';
import { Product } from './types';
import { X } from 'lucide-react';

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-dark antialiased overflow-x-hidden">
      <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <Hero />
        <ValueProp />
        <FeaturedProducts onAddToCart={addToCart} />
        <LocationInfo />
        <Testimonials />
      </main>

      <Footer />
      <AIConcierge />

      {/* Simple Cart Overlay */}
      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[51] shadow-2xl flex flex-col animate-slide-in">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gold-50">
              <h2 className="font-serif text-xl text-dark">Su Bolsa de Compra</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-dark">
                <X />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                  <p className="font-serif italic">Su bolsa está vacía</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-gold-500 hover:text-dark text-sm uppercase tracking-widest border-b border-gold-500 pb-1"
                  >
                    Seguir Comprando
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {cart.map((item, idx) => (
                    <li key={`${item.id}-${idx}`} className="flex gap-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover bg-gray-100" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm font-medium">{item.name}</h4>
                          <button onClick={() => removeFromCart(idx)} className="text-xs text-gray-400 hover:text-red-500">
                            <X size={14} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{item.category}</p>
                        <p className="text-sm font-bold text-dark">${item.price.toLocaleString()}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gold-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm uppercase tracking-widest text-gray-600">Total Estimado</span>
                  <span className="font-serif text-xl font-bold">
                    ${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
                  </span>
                </div>
                <button className="w-full bg-dark text-white py-4 text-sm uppercase tracking-widest hover:bg-gold-500 hover:text-dark transition-colors">
                  Proceder al Pago
                </button>
                <div className="text-center mt-3">
                    <span className="text-[10px] text-gray-500">Aceptamos Visa, MasterCard y Crypto (ETH/USDC)</span>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;