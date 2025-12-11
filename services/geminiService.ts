import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const streamGeminiResponse = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string,
  onChunk: (text: string) => void
) => {
  if (!apiKey) {
    onChunk("Lo siento, el servicio de concierge no está disponible en este momento (API Key missing).");
    return;
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `Eres 'Aureum Concierge', un asistente virtual experto y sofisticado para una boutique de joyería de lujo en Cartagena. 
        Tu tono es elegante, profesional, cálido y exclusivo. 
        Ayudas a los clientes a escoger joyas y relojes, explicas sobre materiales (oro 18k, diamantes, zafiros) y mecánica de relojes suizos.
        También puedes explicar cómo funciona nuestra integración Web3 y los certificados de autenticidad NFT.
        Responde de manera concisa pero sofisticada.`,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessageStream({ message: newMessage });

    for await (const chunk of result) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Gemini Error:", error);
    onChunk("Disculpa, ha ocurrido un error momentáneo en mi conexión. Por favor, intenta de nuevo.");
  }
};