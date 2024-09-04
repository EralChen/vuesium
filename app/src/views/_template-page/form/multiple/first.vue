<script lang="ts" setup>
import { SkAppForm, __SkAppForm } from '@skzz/platform/components/app-form'
const formItems: __SkAppForm.CoreFormItem[] = [
  {
    templateType: 'VkfInput',
    prop: '--el-button-text-color',
    label: '文字颜色',

    // span: 24,
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-bg-color',
    label: '背景色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-border-color',
    label: '边框颜色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-outline-color',
    label: '轮廓颜色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-active-color',
    label: '激活颜色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-hover-text-color',
    label: '悬停文字颜色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-hover-link-text-color',
    label: '悬停链接文字颜色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-hover-bg-color',
    label: '悬停背景色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-hover-border-color',
    label: '悬停边框颜色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-active-bg-color',
    label: '激活背景色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-active-border-color',
    label: '激活边框颜色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-disabled-text-color',
    label: '禁用文字颜色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-disabled-bg-color',
    label: '禁用背景色',
  },
  {
    templateType: 'VkfInput',
    prop: '--el-button-disabled-border-color',
    label: '禁用边框颜色',
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