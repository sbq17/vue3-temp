/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 */
export declare type OnEvent<Events extends Record<string, any>> = {
  [K in keyof Events as `on${Capitalize<K>}`]?: Events[K]
}

/**
 * 通用 SlotAppend 类型
 * @param SlotKeys - 插槽名称的联合类型（如 'default' | 'loading'）
 * @param OptionData - 插槽函数接收的参数类型
 */
export declare type SlotMap<SlotKeys extends string, OptionData> = {
  [K in SlotKeys]?: (option: OptionData) => VNodeChild
}

/**
 * 通用 SlotAppend 类型
 * @param SlotKeys - 插槽名称的联合类型（如 'default' | 'loading'）
 * @param OptionData - 插槽函数接收的参数类型
 */
export declare type SlotAppend<SlotKeys extends string, OptionData> = {
  [K in SlotKeys as `${K}Slot`]?: (option: OptionData) => VNodeChild
}
