import EpBtn from './packages/EpBtn'

export const useAppInfo = () => {
  const foo = markRaw([])

  return {
    renderBtn: () => {
      return h(EpBtn)
    }
  }
}
