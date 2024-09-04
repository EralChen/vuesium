import { bindPropsFactory } from '@vunk/core/shared/utils-vue'
import { PropType } from 'vue'

export const props = {
  type: {
    type: String as PropType<'rtl'| 'ltr' | 'ttb'| 'btt'>,
    default: 'ltr', 
  },
  itemClass: {
    type: [String, Object, Array],
    default: 'overflow-hidden',
  },
}

export const createBindProps = bindPropsFactory(props)
