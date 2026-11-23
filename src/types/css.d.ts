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
