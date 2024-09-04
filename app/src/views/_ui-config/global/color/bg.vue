<script lang="tsx">
export default {
  inheritAttrs: false,
}
</script>
<script lang="tsx" setup>
import { SkAppForm, __SkAppForm } from '@skzz/platform/components/app-form'
import { elBgColorWithMode } from '@skzz/platform/theme'
import { computed } from 'vue'
const props = defineProps({
  formItemBasis: {
    type: String,
    default: '150px',
  },
})
const formItems: __SkAppForm.CoreFormItem <keyof typeof elBgColorWithMode['default']>[] = [
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-bg-color-page',
    label: 'Page',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-bg-color',
    label: 'Background',
  },
  {
    templateType: 'VkfColorPicker',
    showAlpha: true,
    prop: '--el-bg-color-overlay',
    label: 'Overlay',
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