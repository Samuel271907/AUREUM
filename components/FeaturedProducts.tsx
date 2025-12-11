import React, { useState } from 'react';
import { Product } from '../types';
import Button from './Button';
import { Hexagon } from 'lucide-react';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Oak Offshore',
    price: 45000,
    category: 'relojes_hombre',
    image: 'https://picsum.photos/id/175/800/800',
    hoverImage: 'https://picsum.photos/id/103/800/800',
    isNft: true
  },
  {
    id: '2',
    name: 'Diamante Solitario 2ct',
    price: 12500,
    category: 'anillos',
    image: 'https://picsum.photos/id/146/800/800',
    hoverImage: 'https://picsum.photos/id/35/800/800'
  },
  {
    id: '3',
    name: 'Collar Perlas del Caribe',
    price: 8200,
    category: 'collares',
    image: 'https://picsum.photos/id/64/800/800',
    hoverImage: 'https://picsum.photos/id/99/800/800'
  },
  {
    id: '4',
    name: 'Chronograph Limited Edition',
    price: 62000,
    category: 'edicion_limitada',
    image: 'https://picsum.photos/id/250/800/800',
    hoverImage: 'https://picsum.photos/id/18/800/800',
    isNft: true
  },
  {
    id: '5',
    name: 'Anillo Zafiro Eterno',
    price: 9800,
    category: 'anillos',
    image: 'https://picsum.photos/id/129/800/800',
    hoverImage: 'https://picsum.photos/id/200/800/800'
  },
  {
    id: '6',
    name: 'Cartier Tank Vintage',
    price: 28000,
    category: 'relojes_mujer',
    image: 'https://picsum.photos/id/65/800/800',
    hoverImage: 'https://picsum.photos/id/66/800/800'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'Todo' },
  { id: 'relojes_hombre', label: 'Relojes Él' },
  { id: 'relojes_mujer', label: 'Relojes Ella' },
  { id: 'anillos', label: 'Anillos' },
  { id: 'edicion_limitada', label: 'Edición Limitada' },
];

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="colecciones" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4 text-dark">Selección Exclusiva</h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-sm uppercase tracking-widest pb-1 border-b-2 transition-all duration-300 ${
                  activeCategory === cat.id ? 'border-dark text-dark' : 'border-transparent text-gray-400 hover:text-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 mb-6">
                {product.isNft && (
                  <div className="absolute top-4 left-4 z-10 bg-dark/80 backdrop-blur text-white text-[10px] px-2 py-1 uppercase tracking-wider flex items-center gap-1">
                    <Hexagon size={10} className="text-gold-400"/> NFT Certified
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                />
                <img 
                  src={product.hoverImage} 
                  alt={`${product.name} alt`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100 scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm border-t border-gold-100">
                   <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-full"
                    onClick={() => onAddToCart(product)}
                   >
                     Añadir al Carrito
                   </Button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-2 group-hover:text-gold-500 transition-colors">{product.name}</h3>
                <p className="font-sans text-gray-500 font-light tracking-wide">
                  ${product.price.toLocaleString('en-US')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;