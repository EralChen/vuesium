<script lang="tsx">
export default {
  inheritAttrs: false,
}
</script>
<script lang="tsx" setup>
import { useThemeStore } from '@/stores/theme'
import { setData } from '@vunk/core'
import { SkAppForm, __SkAppForm } from '@skzz/platform/components/app-form'
import { namedFontSize, baseFontSizeOptions } from '@skzz/platform/theme'
const themeStore = useThemeStore()


const formItems: __SkAppForm.FormItem<keyof typeof namedFontSize>[] = [
  {
    templateType: 'VkfSelect',
    prop: '--f-module-title',
    label: 'f-module-title',
    allowCreate: true,
    filterable: true,
    clearable: true,
    options: baseFontSizeOptions,
  },
  {
    templateType: 'Component',
    is: () => <p class='text-text-secondary mb-xl'>
      模块标题字体大小
    </p>,
  },

  {
    templateType: 'VkfSelect',
    prop: '--f-card-title',
    label: 'f-card-title',
    allowCreate: true,
    filterable: true,
    clearable: true,
    options: baseFontSizeOptions,
  },
  {
    templateType: 'Component',
    is: () => <p class='text-text-secondary mb-xl'>
      卡片标题字体大小
    </p>,
  },


]

</script>
<template>
  <SkAppForm 
    :label-width="110"
    :form-items="formItems" 
    :data="themeStore.fontSizeNamedStyles"
    v-bind="$attrs"
    @setData="setData(themeStore.fontSizeNamedStyles, $event)"
  >
  </SkAppForm>
</template>
<style>

</style>