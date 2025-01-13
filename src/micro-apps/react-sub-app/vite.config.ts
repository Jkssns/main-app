import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    qiankun('sub-app-container', {
      useDevMode: true
    })
  ],
  base: 'http://localhost:3555'
})
