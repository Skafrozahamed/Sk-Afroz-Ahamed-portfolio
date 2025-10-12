import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Sk-Afroz-Ahamed-portfolio/', // Match your repository name exactly
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable for production to reduce file size
  },
})
