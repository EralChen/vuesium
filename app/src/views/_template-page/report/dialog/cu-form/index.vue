<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { SkAppForm, __SkAppForm } from '@skzz/platform/components/app-form'
import { Row } from '../types'

export default defineComponent({
  components: {
    SkAppForm,
  },
  props: {
    data: {
      type: Object as PropType<Row>,
      required: true,
    },
  },
  emits: {
    submit: (data: Row) => data,
  },
  setup (props, { emit }) {
    const formItems: __SkAppForm.FormItem<keyof Row>[] = [
      {
        templateType: 'VkfInput',
        prop: 'name',
        label: '姓名',
      },
      {
        templateType: 'VkfInput',
        prop: 'roleId',
        label: '编码',
      },

      {
        templateType: 'VkfButton',
        buttonLabel: '提交',
        type: 'primary',
        size: 'large',
        class: 'is-btn-group',
        onClick: () => {
          emit('submit', props.data)
        },
      },
    ]
    return {
      formItems,
    }
  },
})
</script>
<template>
  <SkAppForm 
    :data="data"
    :form-items="formItems"
  ></SkAppForm>
</template>
