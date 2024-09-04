<script lang="tsx">
export default {
  inheritAttrs: false,
}
</script>
<script lang="tsx" setup>
import { SkAppForm, __SkAppForm } from '@skzz/platform/components/app-form'
import { elBorderColorWithMode } from '@skzz/platform/theme'
import { computed } from 'vue'
const props = defineProps({
  formItemBasis: {
    type: String,
    default: '150px',
  },
})
const formItems: __SkAppForm.CoreFormItem<keyof typeof elBorderColorWithMode['default']>[] = [
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-border-color',
    label: 'Border',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-border-color-light',
    label: 'Border Light',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-border-color-lighter',
    label: 'Border Lighter',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-border-color-extra-light',
    label: 'Border Extra Light',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-border-color-dark',
    label: 'Border Dark',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-border-color-darker',
    label: 'Border Darker',
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
          basis: props.formItemBasis,
          templateSlots: [
            item,
          ],
        },
        {
          templateType: 'Component',
          is: () => 
            <div class="plr-m ptb-xxs" style={
              {
                border: `2px solid var(${item.prop})`,
              }
      
            }>
              { item.prop }
            </div>,
       
        },
      ],
    }
  })
})
</script>
<template>
  <SkAppForm
    :form-items="formItemsWithDemo"
    v-bind="$attrs"
  />
</template>
<style>

</style>