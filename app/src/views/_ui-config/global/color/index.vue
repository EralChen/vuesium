<script lang="ts" setup>
import PageX from '_c/PageX/index.vue'
import BaseVue from './base.vue'
import BgVue from './bg.vue'
import TextVue from './text.vue'
import FillVue from './fill.vue'
import BorderVue from './border.vue'
import { SkAppModule, SkAppCard } from '@skzz/platform'
import { useThemeStore } from '@/stores/theme'
import { setData, SetDataEvent } from '@vunk/core'
import ThemeClipboardButton from '@/components/ThemeClipboardButton/index.vue'
import { computed } from 'vue'
const themeStore = useThemeStore()

const formVueProps = computed(() => {
  return {
    labelWidth: 150,
    formItemBasis: '250px',
    data: themeStore.colorStyles,
    onSetData: (event: SetDataEvent) => {
      setData(themeStore.colorStyles, event)
    },
  }
})


</script>
<template>
  <PageX>
    <SkAppCard
      class="h-100%"
      :header="'ElementPlus 颜色'"
    >
      <template #header__options>
        <ThemeClipboardButton :target="'colorStyles'"></ThemeClipboardButton>
      </template>

      <ElScrollbar>
        <SkAppModule :title="'基础颜色'">
          <BaseVue v-bind="formVueProps" />
        </SkAppModule>
        <SkAppModule :title="'背景颜色'">
          <BgVue v-bind="formVueProps"></BgVue>
        </SkAppModule>
        <SkAppModule :title="'文本颜色'">
          <TextVue v-bind="formVueProps"></TextVue>
        </SkAppModule>
        <SkAppModule :title="'填充颜色'">
          <FillVue v-bind="formVueProps"></FillVue>
        </SkAppModule>
        <SkAppModule :title="'边框颜色'">
          <BorderVue v-bind="formVueProps"></BorderVue>
        </SkAppModule>
      </ElScrollbar>
    </SkAppCard>
  </PageX>
</template>
