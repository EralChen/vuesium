<script lang="ts" setup>
import { useKeepAliverStore } from '@skzz/platform/stores/keep-aliver'
const keepAliverStore = useKeepAliverStore()
keepAliverStore.collectingInclude()

</script>
<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive :include="keepAliverStore.include">
      <component :is="Component"></component>
    </KeepAlive>
  </RouterView>
</template>
