import type { CssType } from '../src/types'

import '@vue/runtime-dom'

declare module '@vue/runtime-dom' {
  interface VNodeProps extends CssType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?: (el: any) => void
  }
}
