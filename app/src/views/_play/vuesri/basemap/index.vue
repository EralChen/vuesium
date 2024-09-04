
<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'
import { VathThreeRenderNode } from '@vuesri/three/components/three-render-node'
// import { VathPipeLayer, __VathPipeLayer } from '@vuesri/three/components/pipe-layer'
import { VathArcLayer, __VathArcLayer } from './arc-layer'
import { Graphic, Polyline } from '@vuesri/core/arcgis'

const pipeSource = [
  new Graphic({
    geometry: new Polyline({
      paths: [
        [
          [120, 30],
          [121, 31],
          [122, 32],
          [123, 33],
          [124, 34],
          [125, 35],
        ],
      ],
    }),
  }),
]
const layerLoad: __VathArcLayer.OnLoad = (e) => {
  e.layer.when().then(() => {
    e.view.goTo(
      e.layer.fullExtent,
    )
  })
}
</script>
<template>
  <page-x>
    <VaSceneView>
      <VaTdtBasemap
        :type="'vec_w'"
        :spatial-reference="{
          wkid: 3857
        }"
      ></VaTdtBasemap>

      <VathThreeRenderNode>
        <VathArcLayer
          :source="pipeSource"
          @load="layerLoad"
        >
        </VathArcLayer>
      </VathThreeRenderNode>
    </VaSceneView>
  </page-x>
</template>
