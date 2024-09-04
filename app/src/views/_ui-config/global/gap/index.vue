<script lang="ts" setup>
import { SkMultipage } from '@skzz/platform/components/multipage'
import { ref } from 'vue'
import BaseVue from './base/index.vue'
import NameVue from './name/index.vue'
const currentPage = ref('base')
const modules = ref([
  { label: '基础间距', value: 'base' },
  { label: '命名间距', value: 'name' },
])
</script>
<template>
  <div
    plr-page
    pb-page
    class="h-page"
  >
    <SkMultipage 
      v-model="currentPage" 
      :modules="modules"
      bg-bg-overlay
      class="h-100%"
      tab-x-class="pl-form-pl"
      body-class="h-100%"
    >
      <template #base>
        <ElScrollbar class="ptb-form-pt plr-form-pl">
          <BaseVue></BaseVue>
        </ElScrollbar>
      </template>
      <template #name>
        <ElScrollbar class="ptb-form-pt plr-form-pl">
          <NameVue></NameVue>
        </ElScrollbar>
      </template>
    </SkMultipage>
  </div>
</template>
<style>

</style>
