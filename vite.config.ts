import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: { output: { manualChunks: undefined } },
  },
})
