import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';

import JSX from "./plugin/jsx.js";

const transformBeforePlugin = () => ({
  name: 'transform-before',
  transform(code, id) {
    const slots = /v-slots/g;
    code = code.replace(slots, 'scopedSlots');

    const props = /\{\s*\.\.\.([^\s\}]+)\s*\}/g;
    code = code.replace(props, (match, capturedValue) => {
      return `props={ ${capturedValue} }`;
    });

    return code
  }
})

const transformAfterPlugin = () => ({
  name: 'transform-after',
  transform(code, id) {
    
    // console.log(code);

    return code
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(), 
    transformBeforePlugin(),
    vue2Jsx({
        vModel: true,
        compositionAPI: true,
        // babelPlugins: [JSX]
    }),
    transformAfterPlugin()
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
