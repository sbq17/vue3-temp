import type { StyleNumberKey } from '@/types'

const CSS_NUMBER_KEY: Record<StyleNumberKey, string> = {
  width: 'width',
  minWidth: 'minWidth',
  'min-width': 'minWidth',
  maxWidth: 'maxWidth',
  'max-width': 'maxWidth',
  height: 'height',
  minHeight: 'minHeight',
  'min-height': 'minHeight',
  maxHeight: 'maxHeight',
  'max-height': 'maxHeight'
} as const

export const CSS_NUM_MAP = new Map(
  Object.entries(CSS_NUMBER_KEY) as [string, string][]
)
