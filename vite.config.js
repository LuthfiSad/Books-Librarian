import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist'
  },
  plugins: [react()],
  envPrefix: "LIB_",
  resolve: {
    alias: {
      '@/core': path.resolve(__dirname, './src/core'),
      '@/features': path.resolve(__dirname, './src/features'),
    }
  }
});
