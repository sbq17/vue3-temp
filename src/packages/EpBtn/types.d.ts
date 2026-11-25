/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SlotAppend, BtnSlotKey, CssTypeWithFn, OnEvent } from '@/types'
import type { ButtonInstance, ButtonProps } from 'element-plus'

export declare type EpBtnParams = {
  btn: EpBtnItem
  btnInstance?: ButtonInstance
}

export declare type EpBtnEmit<OtherAttrs = Record<string, any>> = {
  click: (option: EpBtnParams & { evt: MouseEvent } & OtherAttrs) => void
}

export interface EpBtnItem<OtherAttrs = Record<string, any>>
  extends
  ButtonProps,
  OnEvent<EpBtnEmit<OtherAttrs>>,
  SlotAppend<BtnSlotKey, EpBtnParams>,
  CssTypeWithFn<EpBtnParams> {
  disabled?: boolean | ((option: EpBtnParams) => boolean | undefined)
  loading?: boolean | ((option: EpBtnParams) => boolean | undefined)
  label?: string | ((options: EpBtnParams) => VNodeChild)
  show?: boolean | ((option: EpBtnParams) => boolean | undefined)
}

type PickProperty<T, Arg> = T extends (arg: Arg) => infer R ? R : T

/**
 * 编写一个泛型
 * PickProperty(disabled, option) option的类型为EpBtnParams, 推导的返回类型为boolean
 * PickProperty(loading, option) option的类型为EpBtnParams, 推导的返回类型为boolean
 * PickProperty(label, option) option的类型为EpBtnParams, 推导的返回类型为VNodeChild
 *
 */

export interface EpBtnProps {
  /**
   * 使用包裹器
   */
  hasWrapper?: boolean
  /**
   * 渲染按钮配置
   */
  item?: EpBtnItem<any>[] | EpBtnItem<any>
}
