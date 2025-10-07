import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration tailored for the Temperature dashboard front-end.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
});
