<script lang="tsx">
export default {
  inheritAttrs: false,
}
</script>
<script lang="tsx" setup>
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'
import { NormalObject, setData, SetDataEvent } from '@vunk/core'
import { SkAppForm, __SkAppForm } from '@skzz/platform/components/app-form'
import { baseFontSize } from '@skzz/platform/theme'
const themeStore = useThemeStore()

const formData = computed(() => {
  const obj:NormalObject = {}
  Object.entries(themeStore.fontSizeStyles).forEach(([k, v]) => {
    if (k.startsWith('--f-')) {
      obj[k] = +v.replace('rem', '')
    } else {
      obj[k] = v
    }

  })
  return obj
})
const setFormData = (e: SetDataEvent) => {
  if (e.k.startsWith('--f-')) {
    e.v = `${e.v}rem`
  } 
  setData(themeStore.fontSizeStyles, e)
}

const formItems: __SkAppForm.CoreFormItem<'font-size'|keyof typeof baseFontSize>[] = [
  {
    templateType: 'VkfInput',
    prop: 'font-size',
    label: 'font-size',
  },

  {
    templateType: 'VkfInputNumber',
    prop: '--f-xxs',
    label: 'f-xxs',
    step: 0.1,
  },
  {
    templateType: 'VkfInputNumber',
    prop: '--f-xs',
    label: 'f-xs',
    step: 0.1,
  },
  {
    templateType: 'VkfInputNumber',
    prop: '--f-s',
    label: 'f-s',
    step: 0.1,
  },
  {
    templateType: 'VkfInputNumber',
    prop: '--f-m',
    label: 'f-m',
    disabled: true,
  },
  {
    templateType: 'VkfInputNumber',
    prop: '--f-l',
    label: 'f-l',
    step: 0.1,
  },
  {
    templateType: 'VkfInputNumber',
    prop: '--f-xl',
    label: 'f-xl',
    step: 0.1,
  },
  {
    templateType: 'VkfInputNumber',
    prop: '--f-xxl',
    label: 'f-xxl',
    step: 0.1,
  },

]

const formItemsWithDemo = computed(() => {
  return formItems.map(item => {
    return {
      templateType: 'VkfFlex',
      align: 'baseline',
      templateSlots: [
        {
          templateType: 'VkfFlex',
          basis: '350px',
          templateSlots: [
            item,
          ],
        },
       
        {
          templateType: 'Component',
          is: () => <div style={
            {
              fontSize: `var(${item.prop})`,
            }
          }>{item.label}</div>,
        },
      ],
    } as __SkAppForm.FormItem
  })
})


</script>
<template>
  <SkAppForm 
    :label-width="100"
    :form-items="formItemsWithDemo" 
    :data="formData"
    v-bind="$attrs"
    @setData="setFormData"
  >
  </SkAppForm>
</template>
<style>

</style>