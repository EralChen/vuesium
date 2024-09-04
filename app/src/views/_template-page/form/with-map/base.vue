<script lang="tsx">
export default {
  inheritAttrs: false,
}
</script>
<script lang="tsx" setup>
import { computed } from 'vue'
import { SkAppForm, __SkAppForm } from '@skzz/platform/components/app-form'
import { elColorWithMode } from '@skzz/platform/theme'
const props = defineProps({
  formItemBasis: {
    type: String,
    default: '150px',
  },
})

const formItems: __SkAppForm.CoreFormItem<keyof typeof elColorWithMode['default']>[] = [
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-color-primary',
    label: 'Primary',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-color-success',
    label: 'Success',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-color-warning',
    label: 'Warning',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-color-danger',
    label: 'Danger',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-color-info',
    label: 'Info',
  },
]

const formItemsWithDemo = computed(() => {
  return formItems.map((item) => {
  
    return {
      templateType: 'VkfFlex',
      align: 'baseline',
      templateSlots: [
        {
          templateType: 'VkfFlex',
          basis: props.formItemBasis,
          templateSlots: [
            item,
          ],
        },
      
        {
          templateType: 'Component',
          is: () => <div
            style={
              {
                color: `var(${item.prop})`,
              }
            }
          >{item.prop}</div>,
        },
      ],
    } as __SkAppForm.FormItem
  })
})

</script>
<template>
  <SkAppForm 
    :label-width="80" 
    :form-items="formItemsWithDemo" 
    v-bind="$attrs"
  >
  </SkAppForm>
</template> 