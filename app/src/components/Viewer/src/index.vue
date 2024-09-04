<script lang="ts" setup>
import { VaMapView, VaTdtBasemap, VaBasemapToggle, VaBasemapToggleNextBasemap } from '@vuesri/core'
import { useSharedDark } from '@skzz/platform/composables'
import { VaZoom } from '@vuesri/core/components/zoom'
import { props as dProps } from './ctx'
import { Deferred } from '@vunk/core/shared/utils-promise'
import { watch } from 'vue'

defineProps({
  ...dProps,
})
const imgDef = new Deferred<__esri.Basemap>()
const vecDef = new Deferred<__esri.Basemap>()
const toggleDef = new Deferred<__esri.BasemapToggle>()
const isDark = useSharedDark()

watch(isDark,  () => {
  toggle()
})
function toggle () {
  Promise.all([imgDef.promise, vecDef.promise, toggleDef.promise])
    .then(async ([img, vec, toggle]) => {
      if (isDark.value) { // 如果 isDark 则底图为 img_c'
        toggle.activeBasemap !== img && toggle.toggle()  
      } else { // 如果不是 isDark 则底图为 vec_c
        toggle.activeBasemap !== vec && toggle.toggle()
      }
    })
}
</script>
<template>
  <VaMapView :default-options="defaultOptions">
    <VaTdtBasemap
      :type="'vec_c'"
      @load="vecDef.resolve($event.basemap)"
    />
    <VaZoom :position="'bottom-trailing'"></VaZoom>

    <VaBasemapToggle
      :position="'bottom-leading'"
      @load="toggleDef.resolve($event.basemapToggle)"
    >
      <VaTdtBasemap
        :orphan="true"
        :type="'img_c'" 
    
        @load="imgDef.resolve($event.basemap)"
      >
        <VaBasemapToggleNextBasemap></VaBasemapToggleNextBasemap>
      </VaTdtBasemap>
    </VaBasemapToggle>
    <slot></slot>
  </VaMapView>
</template>
