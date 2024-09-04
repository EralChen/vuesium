<script lang="ts" setup>
import { AllTemplatesSource, VkfForm } from '@vunk/form'
import { elMenuTheme } from '@skzz/platform/theme'

const formItems: AllTemplatesSource<keyof typeof elMenuTheme['default']>[] = [
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-menu-active-color',
    label: 'Active Color',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-menu-text-color',
    label: 'Text Color',

  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-menu-hover-text-color',
    label: 'Hover Text Color',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-menu-bg-color',
    label: 'Background Color',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-menu-hover-bg-color',
    label: 'Hover Background Color',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-menu-item-height',
    label: 'Item Height',
    placeholder: elMenuTheme.default['--el-menu-item-height'],
  },
  {
    templateType: 'VkfInput',
    prop: '--el-menu-sub-item-height',
    label: 'Sub Item Height',
    placeholder: elMenuTheme.default['--el-menu-sub-item-height'],
  },
  {
    templateType: 'VkfInput',
    prop: '--el-menu-horizontal-sub-item-height',
    label: 'Horizontal Sub Item Height',
    placeholder: elMenuTheme.default['--el-menu-horizontal-sub-item-height'],
  },
  {
    templateType: 'VkfInput',
    prop: '--el-menu-item-font-size',
    label: 'Item Font Size',
    placeholder: elMenuTheme.default['--el-menu-item-font-size'],
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-menu-item-hover-fill',
    label: 'Item Hover Fill',

  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-menu-border-color',
    label: 'Border Color',

  },
  {
    templateType: 'VkfInput',
    
    prop: '--el-menu-base-level-padding',
    label: 'Base Level Padding',
    placeholder: elMenuTheme.default['--el-menu-base-level-padding'],
  },
  {
    templateType: 'VkfInput',
    prop: '--el-menu-level-padding',
    label: 'Level Padding',
    placeholder: elMenuTheme.default['--el-menu-level-padding'],
  },
  {
    templateType: 'VkfInput',
    prop: '--el-menu-icon-width',
    label: 'Icon Width',
    placeholder: elMenuTheme.default['--el-menu-icon-width'],
  },


]

</script>
<template>
  <VkfForm
    class="bg-bg-overlay"
    :label-width="'14em'"
    :form-items="formItems"
  />
</template>
