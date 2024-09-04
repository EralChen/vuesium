<script lang="ts" setup>
import { SkMultipage } from '@skzz/platform/components/multipage'
import { ref } from 'vue'
import BaseVue from './base/index.vue'
import NameVue from './name/index.vue'
import ThemeClipboardButton from '_c/ThemeClipboardButton/index.vue'

const currentPage = ref('base')
const modules = ref([
  { label: '基础字号', value: 'base' },
  { label: '命名字号', value: 'name' },
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
      class="bg-bg-overlay h-100%"
      :header-class="'plr-form-pl'"
      :modules="modules"
    >
      <template #base>
        <div class="plr-form-pl ptb-form-pt">
          <BaseVue />
        </div>
      </template>

      <template #base__options>
        <ThemeClipboardButton :target="'fontSizeStyles'">
        </ThemeClipboardButton>
      </template>

      <template #name>
        <div class="plr-form-pl ptb-form-pt">
          <NameVue></NameVue>
        </div>
      </template>
    </SkMultipage>
  </div>
</template>

