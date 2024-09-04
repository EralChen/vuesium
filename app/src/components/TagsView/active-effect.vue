<script lang="ts" setup>
import { getCurrentInstance, nextTick, watch } from 'vue'

const props = defineProps({
  isActive: Boolean,
})

const emit = defineEmits({
  'active': (e: {
    el: HTMLAnchorElement,
    offsetLeft: number,
    containerWidth: number,
    scrollLeft: number,
  }) => e,
})

const vm = getCurrentInstance()



watch(() => props.isActive, (isActive) => {
  if (isActive && vm) {

    nextTick(() => {
      const textEl = vm.vnode.el as HTMLElement
      const aEl = textEl.parentElement as HTMLAnchorElement

      const container = aEl.parentElement as HTMLElement
      const containerWidth = container.offsetWidth


      const scrollbarView = container.parentElement as HTMLElement

      const scrollbarWrap = scrollbarView.parentElement as HTMLElement



      emit('active', {
        el: aEl,
        offsetLeft: aEl.offsetLeft,
        scrollLeft: scrollbarWrap.scrollLeft,
        containerWidth: containerWidth,
      })
    })
  }
}, { immediate: true })
</script>

<template>
  <slot></slot>
</template>
