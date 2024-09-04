<script lang="ts">
import { defineComponent, ref } from 'vue'
import { rTestData } from '@/api/test'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup () {
    const testName = ref('')
    rTestData().then(res => {
      testName.value = res.name
    })

    return {
      testName,
    }
  },
})
</script>
<template>
  <div class="bg-test">
    {{ testName }}
  </div>
</template>
