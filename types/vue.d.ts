import type { CssType } from '../src/types'

import '@vue/runtime-dom'

declare module '@vue/runtime-dom' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface VNodeProps extends CssType { }
}
