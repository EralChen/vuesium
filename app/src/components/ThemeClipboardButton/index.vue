<script lang="ts">
import { defineComponent, PropType, watch } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'


export default defineComponent({
  name: 'ThemeClipboardButton',
  props: {
    target: {
      type: String as PropType<'fontSizeStyles'|'colorStyles'|'layoutTopStyles'>,
      required: true,
    },
  },
  setup (props) {
    const themeStore = useThemeStore()
    const clipboard = useClipboard({
      source: JSON.stringify(themeStore[props.target], null, 2),
    })

    watch(() => clipboard.copied.value, (v) => {
      if (v) {
        ElMessage.success('复制成功')
      }
    })

    return {
      clipboard,
    }
  },
})
</script>
<template>
  <ElButton
    :type="'primary'"
    @click="clipboard.copy()"
  > 
    <span>复制</span> 
  </ElButton> 
</template>
