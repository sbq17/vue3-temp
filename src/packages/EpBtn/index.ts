import type { CssType } from '@/types'
import type { EpBtnProps } from './types'

export default defineComponent<EpBtnProps>(
  props => {
    const STATIC_WRAPPER_CSS: CssType = {
      class: 'ep_btn_wrapper'
    }

    const STATIC_NODE_PROPS: VNodeProps = {
      ...STATIC_WRAPPER_CSS
    }

    return () => {
      const hasWrapper = props.hasWrapper

      return h('div', STATIC_NODE_PROPS, 12)
    }
  },
  {
    name: 'EpBtn',
    props: ['hasWrapper', 'item']
  }
)
