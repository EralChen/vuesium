<script lang="tsx">
export default {
  inheritAttrs: false,
}
</script>
<script lang="tsx" setup>
import { SkAppForm, __SkAppForm } from '@skzz/platform/components/app-form'
import { elFillColorWithMode } from '@skzz/platform/theme'
import { computed } from 'vue'
const props = defineProps({
  formItemBasis: {
    type: String,
    default: '150px',
  },
})
const formItems: __SkAppForm.CoreFormItem<keyof typeof elFillColorWithMode['default']>[] = [
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-fill-color',
    label: 'Fill',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-fill-color-light',
    label: 'Fill Light',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-fill-color-lighter',
    label: 'Fill Lighter',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-fill-color-extra-light',
    label: 'Fill Extra Light',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-fill-color-dark',
    label: 'Fill Dark',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-fill-color-darker',
    label: 'Fill Darker',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-fill-color-blank',
    label: 'Fill Blank',
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
          is: () => <div class="bg-info plr-m ptb-xxs">
            <div style={
              {
                background: `var(${item.prop})`,
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