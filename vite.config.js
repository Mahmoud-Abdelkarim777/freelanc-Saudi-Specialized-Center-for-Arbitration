import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true, 
      disable: false, 
      threshold: 1024, 
      algorithm: 'gzip', 
      ext: '.gz',
    })
    
  ],
  build: {
    outDir: 'dist', 
    assetsDir: 'assets', 
    chunkSizeWarningLimit: 1000, 
  },
  server: {
    compress: true, 
  }
});
