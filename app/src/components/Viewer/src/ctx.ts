import { bindPropsFactory } from '@vunk/core/shared/utils-vue'
import { PropType } from 'vue'

export const props = {
  defaultOptions: {
    type: Object as PropType<__esri.MapViewProperties>,
    defalut: () => ({}),
  },
}

export const createBindProps = bindPropsFactory(props)
