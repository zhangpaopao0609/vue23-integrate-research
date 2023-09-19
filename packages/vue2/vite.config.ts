import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue2()],
  build: {
    minify: false,
    outDir: path.resolve(__dirname, 'dist') ,
    target: 'esnext',
    rollupOptions: {
      external: ['vue'], // 将 'vue' 从打包结果中排除
    },
  },
})
