import { defineConfig } from 'vite'
// https://github.com/underfin/vite-plugin-vue2
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin({
      // https://github.com/underfin/vite-plugin-vue2
      jsx: true,
      // https://github.com/vuejs/jsx-vue2/tree/dev/packages/babel-preset-jsx#usage
      jsxOptions: {
        vModel: true,
        compositionAPI: true,
      },
    }), 
  ],
  build: {
    minify: false,
    target: 'esnext',
    rollupOptions: {
      external: ['vue', '@vue/composition-api'], // 将 'vue' 从打包结果中排除
    },
  },
  server: {
    port: 6092
  }
})
