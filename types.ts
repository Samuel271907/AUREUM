export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'anillos' | 'collares' | 'relojes_hombre' | 'relojes_mujer' | 'edicion_limitada';
  image: string;
  hoverImage: string;
  isNft?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export type WalletState = 'disconnected' | 'connecting' | 'connected';