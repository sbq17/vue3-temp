import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath } from 'node:url'
import { deleteUnpluginFile } from './plugin/delete.import.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          from: 'vue',
          imports: ['VNodeProps', 'VNodeChild', 'Raw', 'CSSProperties'],
          type: true
        }
      ],
      eslintrc: {
        enabled: true
      },
      resolvers: [ElementPlusResolver()],
      dirs: ['src/utils/', 'src/constant/'],
      dts: 'types/auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      globs: [
        'src/packages/*.(ts|tsx|js|jsx|vue)',
        'src/packages/*/index.(ts|tsx|js|jsx|vue)'
      ],
      dts: 'types/components.d.ts'
    }),
    deleteUnpluginFile()
  ],
  server: {
    host: true,
    open: true,
    hmr: true,
    port: 4545
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/', import.meta.url))
    }
  }
})
