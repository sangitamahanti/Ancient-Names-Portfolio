import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ------------------------------------------------------------
  // THE CRITICAL CONFIGURATION FOR GITHUB PAGES DEPLOYMENT
  // The 'base' property sets the root path for all assets.
  // It must be the name of your repository, surrounded by slashes.
  base: '/ancient-names-portfolio/', 
  // ------------------------------------------------------------
})