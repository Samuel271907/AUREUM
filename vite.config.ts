import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Using '.' instead of process.cwd() avoids TypeScript errors if @types/node is missing
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // Vital para que Vercel inyecte la API KEY en el código del cliente.
      // Usamos || '' para evitar que sea 'undefined' en el código compilado.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  };
});