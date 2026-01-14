import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ★ここを変更（または行自体を削除）
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: { output: { manualChunks: undefined } },
  },
})
