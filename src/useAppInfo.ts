import EpBtn from './packages/EpBtn'
import type { EpBtnItem } from './packages/EpBtn/types'

export const useAppInfo = () => {
  const btn: EpBtnItem[] = [
    {
      label: 'XXX',
      type: 'primary'
    },
    {
      label: 'x2',
      type: 'danger'
    }
  ]

  return {
    renderBtn: () => {
      return h(EpBtn, {
        item: btn
      })
    }
  }
}
