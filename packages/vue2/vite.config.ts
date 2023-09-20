import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue2(), vue2Jsx()],
  build: {
    minify: false,
    target: 'esnext',
    rollupOptions: {
      external: ['vue'], // 将 'vue' 从打包结果中排除
    },
  },
})
