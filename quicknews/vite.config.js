import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: '`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=9d4b8772c127454085b200daf7d4c3bd&page=${page + 1}',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
