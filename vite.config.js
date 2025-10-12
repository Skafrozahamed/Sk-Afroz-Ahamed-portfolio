import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Sk-Afroz-Ahamed-portfolio/', // Note: case-sensitive
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable for production
  },
  server: {
    port: 3000,
  },
})
