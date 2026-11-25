/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 条件类型：若 T 是 (option: O) => 某类型，则结果为该类型，否则为 T 本身
 */
type PickProperty<T, Arg> = T extends (arg: Arg) => infer R ? R : T

/**
 * 泛型函数 pickProperty
 * @param target - 普通值或函数
 * @param option - 当 target 为函数时传入的参数
 * @returns 若 target 是函数则返回其调用结果，否则返回 target 本身
 */
export const pickProperty = <T = any, Arg = any>(
  target: T,
  option: Arg
): PickProperty<T, Arg> => {
  if (typeof target === 'function') {
    // 运行时判断后，安全调用
    return target(option)
  }
  return target as any
}
