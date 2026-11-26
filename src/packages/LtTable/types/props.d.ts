import type { SimpleRow } from '@/types'
import type { LtItem } from './item'

export interface LtProps<Row = SimpleRow> {
  items?: LtItem<Row>[]
  data?: Row[]
  //
}
