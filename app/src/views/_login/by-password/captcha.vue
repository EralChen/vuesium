<script lang="tsx" setup>
import { PropType, ref } from 'vue'
import { VkfInput } from '@vunk/form/components/input'
import { rCaptcha } from '@skzz/platform/api/login'
import { ApiReturnType, SetDataEvent } from '@vunk/core'
import { LoginFormData } from '../types'
defineProps({
  prop: {
    type: String as PropType<'captcha'>,
    default: 'captcha',
  },
  data: {
    type: Object as PropType<LoginFormData>,
    default: () => ({}),
  },
})
const emit = defineEmits({
  setData: (e: SetDataEvent<keyof LoginFormData>) => e,
})

/* -------------------- */

const captcha = ref({
  captcha: 'data:image/png;base64,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',
} as ApiReturnType<typeof rCaptcha>)

r()

function r () {
  return rCaptcha().then(res => {
    captcha.value = res
    emit('setData',{
      k: 'captchaId',
      v: res.captchaId,
    })
  })
}
const append = () => {
  return <img src={captcha.value.captcha} onClick={r} />
}
</script>

<template>
  <VkfInput
    v-bind="$attrs"
    class="captcha-input"
    :model-value="data[prop]"
    :input-slots="{
      append
    }"
    @update:modelValue="$emit('setData', {
      k: 'captcha',
      v: $event
    })"
  ></VkfInput>
</template>
<style lang="scss">
.captcha-input {
  .el-input-group__append{
    padding: 2px;
    img{
      height: 40px;
    }
  }
}
</style>
