import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import imageOptimizer from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true, // يُظهر معلومات في الـ console عن الملفات المضغوطة
      disable: false, // تأكد أن الضغط غير معطّل
      threshold: 1024, // اضغط الملفات التي حجمها أكبر من 1KB
      algorithm: 'gzip', // استخدم Gzip للضغط
      ext: '.gz', // امتداد الملفات المضغوطة
    }),
    imageOptimizer({
      webp: { quality: 80 },
      avif: { quality: 80 },
    })
  ],
  build: {
    outDir: 'dist', // تأكد أن الإخراج يتم في مجلد "dist"
    assetsDir: 'assets', // ضع الملفات في مجلد "assets"
    chunkSizeWarningLimit: 1000, // تقليل تحذيرات حجم الملفات
  },
  server: {
    compress: true, // تفعيل الضغط أثناء التشغيل المحلي
  }
});
