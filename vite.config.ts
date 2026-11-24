import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: true
      },
      resolvers: [ElementPlusResolver()],
      dirs: ['./src/utils/', './src/constant/'],
      dts: 'types/auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components/index.(ts|tsx|js|jsx|vue)'],
      dts: 'types/components.d.ts'
    })
  ],
  server: {
    host: true,
    open: true,
    hmr: true,
    port: 4545
  },
  resolve: {
    alias: {
      '@': './src'
    }
  }
})
