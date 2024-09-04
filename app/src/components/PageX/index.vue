<script lang="ts" setup>

</script>
<template>
  <div
    plr-page
    pb-page
    class="h-page"
  >
    <div class="bg-bg-overlay h-100% relative">
      <slot></slot>
      <RouterView></RouterView>
    </div>
  </div>
</template>
