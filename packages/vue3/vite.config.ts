import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'
import { transformAdapter } from "./plugin/transform";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [transformAdapter(), vue(), vueJsx()],
  build: {
    minify: false,
    target: 'esnext',
    rollupOptions: {
      external: ['vue'], // 将 'vue' 从打包结果中排除
    },
  },
  server: {
    port: 6090
  }
})
