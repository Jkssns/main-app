import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
  plugins: [qiankun("sub-app-container", { useDevMode: true }), vue(), ],
  server: {
    port: 5050,
  },
  base: 'https://static-mp-a268227e-62b2-4f41-9a02-f9379fb12ac8.next.bspapp.com/dist/'
})
