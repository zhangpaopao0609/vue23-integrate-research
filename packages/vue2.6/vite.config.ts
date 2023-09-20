import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ createVuePlugin({
    jsx: true
  })],
  build: {
    minify: false,
    target: 'esnext',
    rollupOptions: {
      external: ['vue'], // 将 'vue' 从打包结果中排除
    },
  },
})
