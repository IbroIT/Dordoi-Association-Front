import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://dordoi-backend-f6584db3b47e.herokuapp.com',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
