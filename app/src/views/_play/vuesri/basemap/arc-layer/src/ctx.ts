import { PropType } from 'vue'
import { LoadEvent } from './types'
import { _VathEntityLayerEventsCtx } from '@vuesri/three/components/entity-layer-events'
export const props = {
  source: {
    type: Array as PropType<__esri.Graphic[]>,
    default: () => [],
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
  ..._VathEntityLayerEventsCtx.emits,
}
