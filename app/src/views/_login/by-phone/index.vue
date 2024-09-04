<script lang="tsx" setup>
import { SkAppForm, __SkAppForm } from '@skzz/platform/components/app-form'
import { setData } from '@vunk/core'
import { ElButton } from 'element-plus'
import { computed, ref } from 'vue'

const formData = ref({
  phone: '',
  code: '',
})

const count = ref(0)
const timer = ref(0)
// 获取验证码的按钮, 包含倒计时逻辑
const startCount = () => {
  count.value = 60
  timer.value = window.setInterval(() => {
    count.value--
    if (count.value <= 0) {
      clearInterval(timer.value)
    }
  }, 1000)
}
const codeBtn = () => {
  return count.value ? <ElButton>
    {count.value}秒后重试
  </ElButton> : <ElButton
    class={'bg-primary text-white'}
    onClick={() => {
      startCount()
      rCode()
    }}
  >获取验证码</ElButton>
}
const baseFomrItemProps = {
  labelWidth: 0,
  size: 'large' as const,
  class: {
    'mb-28px': true,
  },
}
const formItems = computed<__SkAppForm.FormItem[]>(() => {
  return [
    {
      templateType: 'VkfInput',
      ...baseFomrItemProps,
      prop: 'phone',
      placeholder: '请输入手机号',
      rules: {
        required: true,
        message: '请输入手机号',
      },
    },
    {
      templateType: 'VkfInput',
      prop: 'code',
      ...baseFomrItemProps,
      placeholder: '请输入验证码',
      rules: {
        required: true,
        message: '请输入验证码',
      },
      class: {
        ...baseFomrItemProps.class,
        'no-count': !count.value,
        'cx': true,
      },
      inputSlots: {
        append: () => codeBtn(),
      },
    },
    {
      templateType: 'VkfButton',
      buttonLabel: '登录',
      class: 'sub-btn-full pt-56px',
      type: 'primary',
      size: 'large',
      onClick: () => {
        // console.log('login')
      },
    },
  ]
})
function rCode () {
  // 获取验证码
}
</script>
<template>
  <SkAppForm
    :data="formData"
    :form-items="formItems"
    @set-data="setData(formData, $event)"
  >
  </SkAppForm>
</template>
<style>
.no-count .el-input-group__append{
  background-color: var(--el-color-primary);
  color: var(--el-color-white);
}
</style>