<script lang="ts" setup>
import { SkAppForm, __SkAppForm } from '@skzz/platform'
import { elTableV2Theme } from '@skzz/platform/theme'

const formItems: __SkAppForm.CoreFormItem<keyof typeof elTableV2Theme>[] = [
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-table-border-color',
    label: '边框颜色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-table-border',
    label: '边框',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-table-text-color',
    label: '文字颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-table-header-text-color',
    label: '表头文字颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-table-row-hover-bg-color',
    label: '行悬停背景颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-table-current-row-bg-color',
    label: '当前行背景颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-table-header-bg-color',
    label: '表头背景颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-table-fixed-box-shadow',
    label: '固定列阴影',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-table-bg-color',
    label: '背景颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-table-tr-bg-color',
    label: '行背景颜色',
  },
  {
    templateType: 'SkCssColorPicker',
    prop: '--el-table-expanded-cell-bg-color',
    label: '展开行背景颜色',
  },
  
]
</script>
<template>
  <SkAppForm
    :label-position="'top'"
    :layout="true"
    :form-items="formItems"
  >
  </SkAppForm>
</template>
