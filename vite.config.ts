import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {      
      input: {
        contentScript:  resolve(__dirname, 'src/contentScript.tsx'),
        'injects/download': resolve(__dirname, 'src/injects/download.tsx'),
      },
      output: {
        entryFileNames: "[name].js"
      }
      
    },
  }
})
