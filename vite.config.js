import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 💡 THIS LINE FIXES THE BLANK PAGE ON GITHUB PAGES
  base: '/Ancient-Names-Portfolio/',
})