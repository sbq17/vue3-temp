import type { Expand } from '@/types'
import type CssTypeWithFn from '@/types'
/* eslint-disable @typescript-eslint/no-explicit-any */

export declare type ClassType =
  string | Record<string, boolean> | null | undefined

export declare type ClassVo = ClassType[] | ClassType

export declare type StyleType = string | CSSProperties | null | undefined
export declare type StyleVo = StyleType[] | StyleType

export declare type StyleNumberKey =
  | 'width'
  | 'minWidth'
  | 'min-width'
  | 'maxWidth'
  | 'max-width'
  | 'height'
  | 'minHeight'
  | 'min-height'
  | 'maxHeight'
  | 'max-height'

export declare type CssType = {
  class?: ClassVo
  style?: StyleVo
}

export declare type CssTypeWithFn<Option = any> = {
  [K in keyof CssType]?: CssType[K] | ((option: Option) => CssType[K])
}

type WidthHeightType = {
  [
  K in StyleNumberKey as K extends `${infer P}-${infer Q}`
  ? `${P}${Capitalize<Q>}`
  : K
  ]?: number | string
}

type WidthHeightWithFn<Option = any> = {
  [K in keyof WidthHeightType]:
  WidthHeightType[K] | ((option: Option) => WidthHeightType[K])
}

export declare type CssTypeAppendWithFn<
  Append extends string = string,
  Option = any
> = Expand<{
  [
  K in keyof CssTypeWithFn<Option> as `${Append}${Capitalize<K>}`
  ]: CssTypeWithFn<Option>[K]
}>
