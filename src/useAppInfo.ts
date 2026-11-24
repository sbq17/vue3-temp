import EpBtn from '@/packages/EpBtn'

export const useAppInfo = () => {
  return {
    renderBtn: () => {
      return h(EpBtn)
    }
  }
}
