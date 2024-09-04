<script lang="tsx" setup>
import { loginByPassword } from '@skzz/platform/api/login'
import { setData, SetDataEvent } from '@vunk/core'
import { SkAppForm, __SkAppForm } from '@skzz/platform/components/app-form'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { LoginFormData } from '../types'
import CaptchaVue from './captcha.vue'

// const props = defineProps({
// })
const emit = defineEmits({
  setData: (e: SetDataEvent<keyof LoginFormData>) => e,
  login: (e: LoginFormData) => e,
})
/* --------------------- */
const router = useRouter()



const formData = ref({
  userCode: 'gyzz',
  password: '123456',
} as LoginFormData)

const login = () => {
  loginByPassword(formData.value).then(() => {
    router.push({ path: '/home' })
  })
}

const defaultFormItemProps = {
  labelWidth: 0,
  size: 'large' as const,
  class: 'mb-28px',
}
const formItems: __SkAppForm.FormItem<keyof LoginFormData>[] = [
  {
    templateType: 'VkfInput',
    ...defaultFormItemProps,
    prop: 'userCode',
    rules: {
      required: true,
      message: '请输入用户名',
    },
    
  },
  {
    templateType: 'VkfInput',
    ...defaultFormItemProps,
    prop: 'password',
    rules: {
      required: true,
      message: '请输入密码',
    },
  },
  {
    templateType: 'Component',
    // will set captchaId and captcha
    is: () => <CaptchaVue
      data={formData.value}
      prop="captcha"
      {
        ...defaultFormItemProps
      }
      onSetData={e => setData(formData.value, e)}
    ></CaptchaVue>,
  },
  {
    templateType: 'VkfButton',
    buttonLabel: '登录',
    class: 'sub-btn-full pt-56px',
    type: 'primary',
    size: 'large',
    
    validate: true,
    onClick: () => {
      login()
      emit('login', formData.value)
    },
  },
]

</script>
<template>
  <SkAppForm 
    :data="formData"
    :form-items="formItems"
    @set-data="setData(formData, $event)"
    @enter="login"
  >
  </SkAppForm>
</template>
