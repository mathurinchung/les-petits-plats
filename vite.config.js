import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: '/les-petits-plats/',
  server: {
    host: '0.0.0.0',
    port: 5500
  }
});