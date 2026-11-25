import type { ClassVo, StyleNumberKey, StyleVo } from '@/types'
import type { CSSProperties } from 'vue'

export const pickClassName = (...classnameList: ClassVo[]) => {
  const strMap = new Set<string>()

  function addItem(cls: ClassVo) {
    if (cls == null) {
      return
    }
    if (typeof cls === 'string') {
      for (const item of cls.split(/\s+/)) {
        if (item) strMap.add(item)
      }
    } else if (Array.isArray(cls)) {
      cls.forEach(addItem)
    } else {
      Object.entries(cls).forEach(([key, value]) => {
        if (value) {
          strMap.add(key)
        }
      })
    }
  }

  for (const classname of classnameList) {
    addItem(classname)
  }

  return Array.from(strMap).join(' ')
}

export const pickStyle = (...styleList: StyleVo[]) => {
  const styleMap: CSSProperties = {}

  function addItem(style: StyleVo) {
    if (style == null) {
      return
    }
    if (typeof style === 'string') {
      for (const item of style.split('[;；]')) {
        const str = item.trim()

        if (!str) {
          continue
        }

        const colonIndex = str.indexOf(':')

        if (colonIndex === -1) {
          continue
        }

        const key = str.slice(0, colonIndex).trim()
        const value = str.slice(colonIndex + 1).trim()

        if (key && value !== undefined && value !== null && value !== '') {
          if (CSS_NUM_MAP.get(key as StyleNumberKey)) {
            Object.assign(styleMap, pickCssNum2StrInSpecialKeys(key, value))
          } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            styleMap[key as any] = value
          }
        }
      }
    } else if (Array.isArray(style)) {
      style.forEach(addItem)
    } else {
      Object.assign(styleMap, style)
    }
  }

  for (const style of styleList) {
    addItem(style)
  }

  return styleMap
}

export const pickCssNum2StrInSpecialKeys = (
  key: string,
  value: string | number | undefined | null
): CSSProperties => {
  //

  const has = CSS_NUM_MAP.get(key)

  if (value == null || has === undefined) {
    return {}
  } else {
    return { [has]: typeof value === 'number' ? value + 'px' : value }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pickCss = <ClassOption = any, StyleOption = any>(option?: {
  class?: ClassVo | ClassVo[] | ((option: ClassOption) => ClassVo[] | ClassVo)
  classOption?: ClassOption
  style?: StyleVo | ((option: StyleOption) => StyleVo[] | StyleVo)
  styleOption?: StyleOption
}) => {
  const {
    class: classList = [],
    classOption,
    style = [],
    styleOption
  } = option || {}

  let className: ClassVo[] | ClassVo = []

  if (typeof classList === 'function') {
    const foo = classList(classOption! || ({} as ClassOption))

    if (foo instanceof Array) {
      className = foo
    } else {
      className.push(foo)
    }
  } else {
    if (classList instanceof Array) {
      className = classList
    } else {
      className.push(classList)
    }
  }

  let styles: StyleVo[] = []

  if (typeof style === 'function') {
    const foo = style(styleOption! || ({} as StyleOption))

    if (foo instanceof Array) {
      styles = foo
    } else {
      styles.push(foo)
    }
  } else {
    if (style instanceof Array) {
      styles = style
    } else {
      styles.push(style)
    }
  }

  return {
    class: pickClassName(...className),
    style: pickStyle(...styles)
  }
}
