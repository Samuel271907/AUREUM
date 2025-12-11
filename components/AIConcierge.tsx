import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { streamGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bienvenido a Aureum. Soy su asistente personal. ¿En qué puedo ayudarle hoy? ¿Busca un reloj específico o una joya para una ocasión especial?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    let fullResponse = '';
    // Add placeholder for streaming
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    await streamGeminiResponse(
      messages,
      userMessage,
      (chunk) => {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullResponse;
          return newMessages;
        });
      }
    );

    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'} transition-all duration-300 bg-dark text-gold-400 p-4 rounded-full shadow-2xl hover:bg-gold-500 hover:text-dark border border-gold-500/30`}
      >
        <Sparkles size={24} />
      </button>

      {/* Chat Window */}
      <div className={`
        absolute bottom-0 right-0 
        w-[350px] sm:w-[400px] h-[500px] 
        bg-white rounded-lg shadow-2xl border border-gray-100 
        flex flex-col overflow-hidden
        transition-all duration-300 origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none translate-y-10'}
      `}>
        {/* Header */}
        <div className="bg-dark p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <div>
               <h3 className="font-serif text-sm font-semibold tracking-wide">Aureum Concierge</h3>
               <p className="text-[10px] text-gray-400 uppercase tracking-wider">AI Powered Assistant</p>
             </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gold-50/30 scroll-smooth">
          {messages.map((msg, idx) => (
            <div key={idx} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`
                max-w-[80%] p-3 rounded-lg text-sm leading-relaxed
                ${msg.role === 'user' 
                  ? 'bg-dark text-white rounded-br-none' 
                  : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none shadow-sm'}
              `}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1].text === '' && (
             <div className="flex justify-start mb-4">
               <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm flex gap-1">
                 <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                 <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75" />
                 <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150" />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 bg-white flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Pregunte sobre nuestros diamantes..."
            className="flex-1 text-sm bg-gray-50 border-none outline-none px-4 py-2 rounded-full focus:ring-1 focus:ring-gold-400"
          />
          <button 
            type="submit" 
            disabled={isLoading || !inputValue.trim()}
            className="bg-gold-400 text-white p-2 rounded-full hover:bg-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIConcierge;