import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2';
// import vue2Jsx from '@vitejs/plugin-vue2-jsx';
import vue2Jsx from './plugin/vue2Jsx';
// import { transformAfterPlugin, transformBeforePlugin } from "./plugin/transform";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(), 
    // transformBeforePlugin(),
    vue2Jsx({
      vModel: true,
    }),
    // transformAfterPlugin()
  ],
  build: {
    minify: false,
    target: 'esnext',
    rollupOptions: {
      external: ['vue'], // 将 'vue' 从打包结果中排除
    },
  },
  server: {
    port: 6091
  }
})
