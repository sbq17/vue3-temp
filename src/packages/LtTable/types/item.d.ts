import type { CssTypeAppendWithFn, SimpleRow } from '@/types'
import type { VNodeChild } from 'vue'
import type { LtParams, LtPosition, LtThParams } from './common'

export interface LtItem<Row = SimpleRow>
  extends
  CssTypeAppendWithFn<'th' | 'thCell', LtThParams<Row>>,
  CssTypeAppendWithFn<'td' | 'tdCell', LtParams<Row>>,
  CssTypeAppendWithFn<'cell', LtParams<Row>> {
  label?: string | ((option: LtThParams<Row>) => VNodeChild)
  prop?: keyof Row
  show?: boolean | ((option: LtThParams<Row>) => boolean | undefined)
  order?: number
  sort?: boolean | 'custom'
  sortFn?: () => void
  format?: (option: LtParams<Row>) => VNodeChild
  align?: LtPosition
  thAlign?: LtPosition
  tdAlign?: LtPosition
  width?: number
  minWidth?: number
  maxWidth?: number
}
