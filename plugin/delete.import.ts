import { existsSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import type { Plugin } from 'vite'

export const deleteUnpluginFile = () => {
  const FILES_TO_DELETE = [
    fileURLToPath(new URL('../types/auto-import.d.ts', import.meta.url)),
    fileURLToPath(new URL('../types/components.d.ts', import.meta.url)),
    fileURLToPath(new URL('../.eslintrc-auto-import.json', import.meta.url))
  ]

  const deleteFn = () => {
    FILES_TO_DELETE.forEach(filePath => {
      if (existsSync(filePath)) {
        try {
          rmSync(filePath)
        } catch (error) {
          console.log(`Error is : ${error}`)
        }
      }
    })
  }

  const PLUGIN: Plugin = {
    name: 'DELETE_UNPLUGIN_FILES',

    configureServer: () => {
      deleteFn()
    }
  }

  return PLUGIN
}
