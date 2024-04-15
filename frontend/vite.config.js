import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteEnvCompatible from 'vite-plugin-env-compatible';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteEnvCompatible(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
