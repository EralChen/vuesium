<script lang="tsx">
export default {
  inheritAttrs: false,
}
</script>
<script lang="tsx" setup>
import { SkAppForm, __SkAppForm } from '@skzz/platform/components/app-form'
import { elTextColorWithMode } from '@skzz/platform/theme'
import { computed } from 'vue'
const props = defineProps({
  formItemBasis: {
    type: String,
    default: '150px',
  },
})
const formItems: __SkAppForm.CoreFormItem<keyof typeof elTextColorWithMode['default']>[] = [
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-text-color-primary',
    label: 'Primary',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-text-color-regular',
    label: 'Regular',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-text-color-secondary',
    label: 'Secondary',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-text-color-placeholder',
    label: 'Placeholder',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-text-color-disabled',
    label: 'Disabled',
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
          is: () => <div class="plr-m ptb-xxs">
            <div style={
              {
                color: `var(${item.prop})`,
              }
        
            }>
              { item.prop }
            </div>
          </div>,
        },
      ],
  
    } as __SkAppForm.FormItem
  })
})
</script>
<template>
  <SkAppForm
    :form-items="formItemsWithDemo"
    v-bind="$attrs"
  ></SkAppForm>
</template>

<style>

</style>