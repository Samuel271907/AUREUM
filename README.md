# Aureum Cartagena | Luxury Jewelry & Timepieces

Una experiencia digital exclusiva diseñada para una boutique de alta joyería y relojería en Cartagena. Este proyecto fusiona la estética minimalista del lujo tradicional con la innovación moderna de la Web3 y la asistencia por Inteligencia Artificial.

![Project Status](https://img.shields.io/badge/Status-Active-gold) ![License](https://img.shields.io/badge/License-MIT-black)

## 🌟 Visión General

**Aureum Cartagena** no es solo un e-commerce, es una extensión digital del showroom físico. La plataforma está diseñada para cautivar a una audiencia sofisticada, ofreciendo una navegación fluida, imágenes de alto impacto y herramientas tecnológicas que generan confianza y exclusividad.

## ✨ Características Principales

### 💎 Experiencia de Usuario (UX/UI) de Lujo
- **Diseño Minimalista**: Uso estratégico del espacio negativo (breathing space) y una paleta de colores sobria (Gold & Dark) para resaltar los productos.
- **Tipografía Elegante**: Combinación de *Cinzel* (Serif) para títulos señoriales y *Lato* (Sans) para legibilidad moderna.
- **Micro-interacciones**: Efectos hover suaves en productos y transiciones fluidas en el carrito de compras.

### 🤖 AI Concierge (Powered by Gemini)
- **Asistente Inteligente**: Integración de la API de Google Gemini (`@google/genai`) que actúa como un concierge experto.
- **Conocimiento Especializado**: El modelo está instruido para responder con un tono sofisticado sobre gemología, relojería suiza y detalles de la marca.
- **Streaming Responses**: Respuestas en tiempo real para una conversación natural y fluida.

### 🌐 Integración Web3 & Crypto
- **Wallet Connect Simulation**: Interfaz para conectar billeteras digitales (Metamask, etc.).
- **NFT Certification**: Distintivos visuales para productos de "Edición Limitada" que incluyen certificados de autenticidad digital.
- **Crypto Payments Ready**: Mención y preparación visual para métodos de pago alternativos.

## 🛠️ Stack Tecnológico

- **Frontend**: React 18, TypeScript
- **Estilos**: Tailwind CSS (Utility-first framework)
- **Inteligencia Artificial**: Google Gemini API
- **Iconografía**: Lucide React
- **Build System**: ES Modules (Compatible con entornos modernos sin configuración compleja)

## 📂 Estructura del Proyecto

```
/
├── components/          # Componentes de UI reutilizables
│   ├── AIConcierge.tsx  # Widget de chat con IA
│   ├── Hero.tsx         # Sección principal de impacto
│   ├── Header.tsx       # Navegación y estado de Wallet
│   └── ...
├── services/
│   └── geminiService.ts # Lógica de conexión con Google GenAI
├── types.ts             # Definiciones de tipos TypeScript
├── App.tsx              # Componente principal
└── index.html           # Punto de entrada
```

## 🚀 Instalación y Uso

Este proyecto está diseñado para ser modular y fácil de desplegar.

### Requisitos Previos
- Node.js (opcional, para entornos de desarrollo locales estándar).
- Una **API KEY** válida de Google Gemini.

### Configuración
El proyecto utiliza `process.env.API_KEY` para autenticar las peticiones a la IA. Asegúrate de configurar esta variable en tu entorno de despliegue o archivo `.env`.

```bash
# Ejemplo de variable de entorno
API_KEY=tu_api_key_de_google
```

## 🎨 Sistema de Diseño

- **Colores**:
  - `gold-50` (#FBF9F1): Fondo principal, crema suave.
  - `gold-400` (#D4AF37): Acentos dorados y botones.
  - `dark` (#0A0A0A): Textos y elementos de contraste.

- **Tipografía**:
  - Encabezados: `font-serif` (Cinzel)
  - Cuerpo: `font-sans` (Lato)

---

© 2025 Aureum Cartagena. Developed for Luxury.
