import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // CI sets BASE_PATH (e.g. /repo) for GitHub Pages project sites; empty means root.
  base: process.env.BASE_PATH ? `${process.env.BASE_PATH}/` : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
