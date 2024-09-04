<script lang="ts" setup>
import { SkAppForm, __SkAppForm } from '@skzz/platform'
import { useThemeStore } from '@/stores/theme'
import { elButtonPrimaryTheme } from '@skzz/platform/theme'
import { setData } from '@vunk/core'
const themeStore = useThemeStore()
/* 
  --el-button-text-color: var(--el-color-white);
  --el-button-bg-color: var(--el-color-primary);
  --el-button-border-color: var(--el-color-primary);
  --el-button-outline-color: var(--el-color-primary-light-5);
  --el-button-active-color: var(--el-color-primary-dark-2);
  --el-button-hover-text-color: var(--el-color-white);
  --el-button-hover-link-text-color: var(--el-color-primary-light-5);
  --el-button-hover-bg-color: var(--el-color-primary-light-3);
  --el-button-hover-border-color: var(--el-color-primary-light-3);
  --el-button-active-bg-color: var(--el-color-primary-dark-2);
  --el-button-active-border-color: var(--el-color-primary-dark-2);
  --el-button-disabled-text-color: var(--el-color-white);
  --el-button-disabled-bg-color: var(--el-color-primary-light-5);
  --el-button-disabled-border-color: var(--el-color-primary-light-5);
*/
const formItems: __SkAppForm.CoreFormItem<keyof typeof elButtonPrimaryTheme>[] = [
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-text-color',
    label: '文字颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-bg-color',
    label: '背景色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-border-color',
    label: '边框颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-outline-color',
    label: '轮廓颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-active-color',
    label: '激活颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-hover-text-color',
    label: '悬停文字颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-hover-link-text-color',
    label: '悬停链接文字颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-hover-bg-color',
    label: '悬停背景色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-hover-border-color',
    label: '悬停边框颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-active-bg-color',
    label: '激活背景色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-active-border-color',
    label: '激活边框颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-disabled-text-color',
    label: '禁用文字颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-disabled-bg-color',
    label: '禁用背景色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-button-disabled-border-color',
    label: '禁用边框颜色',
  },

] 
</script>
<template>
  <SkAppForm 
    :label-position="'top'"
    :layout="true"
    :label-width="150"
    class="plr-form-pl ptb-form-pt"
    :form-items="formItems"
    :data="themeStore.cardStyles"
    @setData="setData(themeStore.cardStyles, $event)"
  ></SkAppForm>
</template>
