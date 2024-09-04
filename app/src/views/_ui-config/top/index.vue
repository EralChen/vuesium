<script lang="ts" setup>
import { SkAppCard } from '@skzz/platform/components/app-card'
import ConfigForm from './ConfigForm.vue'
import { useThemeStore } from '@/stores/theme'
import { setData } from '@vunk/core'
import ThemeClipboardButton from '_c/ThemeClipboardButton/index.vue'
const themeStore = useThemeStore()

</script>
<template>
  <div class="h-page plr-page pb-page">
    <div class="bg-bg-overlay h-100%">
      <SkAppCard
        class="h-100%"
        :header="'顶部配置'"
      >
        <template #header__options>
          <ThemeClipboardButton :target="'layoutTopStyles'"></ThemeClipboardButton>
        </template>
        <div class="ptb-form-pt plr-form-pl">
          <ConfigForm
            :label-width="205"
            :data="themeStore.layoutTopStyles"
            @setData="setData(themeStore.layoutTopStyles, $event)"
          ></ConfigForm>
        </div>
      </SkAppCard>
    </div>
  </div>
</template>
