import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Wallet, Gem } from 'lucide-react';
import Button from './Button';
import { WalletState } from '../types';

interface HeaderProps {
  onCartClick: () => void;
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [walletState, setWalletState] = useState<WalletState>('disconnected');
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConnect = () => {
    if (walletState === 'disconnected') {
      setWalletState('connecting');
      // Mock connection delay
      setTimeout(() => {
        setWalletState('connected');
        setWalletAddress('0x71C...9A21');
      }, 1500);
    } else {
      setWalletState('disconnected');
      setWalletAddress('');
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen ? 'bg-gold-50/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Gem className="w-6 h-6 text-gold-500" />
          <span className="font-serif text-2xl tracking-widest font-semibold text-dark">
            AUREUM
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Colecciones', 'Relojes', 'Maison', 'Contacto'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-sans tracking-widest text-dark hover:text-gold-500 transition-colors"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={handleConnect}
            className={`flex items-center gap-2 text-xs uppercase tracking-widest transition-colors ${
              walletState === 'connected' ? 'text-emerald-700' : 'text-dark hover:text-gold-500'
            }`}
          >
            <Wallet className="w-4 h-4" />
            {walletState === 'connecting' ? 'Connecting...' : 
             walletState === 'connected' ? walletAddress : 'Connect Wallet'}
          </button>
          
          <button onClick={onCartClick} className="relative text-dark hover:text-gold-500 transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-400 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gold-50 border-t border-gold-100 p-6 flex flex-col gap-6 shadow-xl">
          <nav className="flex flex-col gap-4">
            {['Colecciones', 'Relojes', 'Maison', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-lg font-serif text-dark"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="h-px bg-gold-200 w-full" />
          <div className="flex flex-col gap-4">
             <Button variant="outline" size="sm" onClick={handleConnect} className="w-full justify-center">
              {walletState === 'connected' ? walletAddress : 'Conectar Wallet'}
             </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;