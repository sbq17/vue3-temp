import type { SimpleRow } from '@/types'
import type { LtItem } from './item'

/**
 *
 */
export declare type LtParams<Row = SimpleRow> = {
  row: Row
  prop: keyof Row
  value: Row[keyof Row]
  rowIndex: number
  item: LtItem<Row>
  itemIndex: number
}

export declare type LtThParams<Row = SimpleRow> = Pick<
  LtParams<Row>,
  'prop' | 'item' | 'itemIndex'
>

export type LtPosition = 'left' | 'center' | 'right'
