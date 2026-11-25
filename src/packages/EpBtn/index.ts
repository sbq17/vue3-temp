import type { BtnSlotKey, CssType, SlotMap } from '@/types'
import type { EpBtnItem, EpBtnParams, EpBtnProps } from './types'
import type { ButtonInstance, ButtonProps } from 'element-plus'
import './index.css'

export default defineComponent<EpBtnProps>(
  props => {
    const STATIC_WRAPPER_CSS: CssType = {
      class: 'ep_btn_wrapper'
    }

    const STATIC_NODE_PROPS: VNodeProps = {
      ...STATIC_WRAPPER_CSS
    }

    const btnRefs: ButtonInstance[] = []

    const renderBtn = (btn: EpBtnItem, i: number) => {
      const BTN_PARAMS: EpBtnParams = {
        btn,
        btnInstance: btnRefs[i]
      }

      const { show: _show, ...otherRest } = btn

      const show = pickProperty(_show, BTN_PARAMS)

      if (show === false) {
        return null
      }

      const {
        disabled: _disabled,
        loading: _loading,
        label: _label,
        defaultSlot,
        loadingSlot,
        iconSlot,
        class: _class,
        style: _style,
        size = 'small',
        ...rest
      } = otherRest

      const disabled = pickProperty(_disabled, BTN_PARAMS)
      const loading = pickProperty(_loading, BTN_PARAMS)
      const label = defaultSlot
        ? defaultSlot(BTN_PARAMS)
        : pickProperty(_label, BTN_PARAMS)

      const cssInfo = pickCss({
        class: _class,
        classOption: BTN_PARAMS,
        style: _style,
        styleOption: BTN_PARAMS
      })

      const slots: SlotMap<BtnSlotKey, EpBtnParams> = {
        default: () => [label]
      }

      if (loadingSlot) {
        slots.loading = () => loadingSlot(BTN_PARAMS)
      }

      if (iconSlot) {
        slots.icon = () => iconSlot(BTN_PARAMS)
      }

      const props: VNodeProps & ButtonProps = {
        ...cssInfo,
        ...rest,
        ref: el => {
          btnRefs[i] = el
        },
        size,
        disabled,
        loading
      }

      return h(ElButton, props, slots)
    }

    return () => {
      const { hasWrapper, item } = props

      let btns: EpBtnItem[] = []

      if (item instanceof Array) {
        btns = item
      } else if (item) {
        btns.push(item)
      }

      const nodes = btns.map(renderBtn)

      if (hasWrapper === false) {
        return nodes
      }

      return h('div', STATIC_NODE_PROPS, nodes)
    }
  },
  {
    name: 'EpBtn',
    props: ['hasWrapper', 'item']
  }
)
