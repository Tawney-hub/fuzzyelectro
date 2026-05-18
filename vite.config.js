import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    // Serve index.html for all routes (SPA fallback)
    historyApiFallback: true
  },
  preview: {
    port: 4173
  },
  build: {
    outDir: 'dist'
  }
})
