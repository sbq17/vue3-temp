/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CSSProperties } from 'vue'

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

export declare type CssTypeWidthFn<Option = any> = {
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
