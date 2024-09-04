<script lang="ts" setup>
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { computed } from 'vue'
import { RouteLocationMatched, useRoute, useRouter } from 'vue-router'
import { compile } from 'path-to-regexp'

const router = useRouter()
const route = useRoute()
const levelList = computed(() => {
  let matched = route.matched.filter(item => {
    return item.meta 
    && item.meta.title
    && (item.meta.breadcrumb ?? true)
  })
  return matched
})

const pathCompile = (path: string) =>  {
  // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
  const { params } = route
  var toPath = compile(path)
  return toPath(params)
}
const handleLink = (item:RouteLocationMatched) => {
  const { redirect, path } = item
  if (redirect) {
    typeof redirect !== 'function' &&
      router.push(redirect)
    return
  }
  router.push(pathCompile(path))
}
</script>
<template>
  <!-- bg-bg-overlay border-b border-b-border-base -->
  <ElBreadcrumb 
    
    class="pa-page breadcrumb" 
    :separator="'>'"
  >
    <!-- <TransitionGroup name="breadcrumb"> -->
    <el-breadcrumb-item
      v-for="(item) in levelList"
      :key="item.path"
    >
      <a 
        @click.prevent="handleLink(item)"
      >
        {{ item.meta.title }}
      </a>
    </el-breadcrumb-item>
    <!-- </TransitionGroup> -->
  </ElBreadcrumb>
</template>
<style scoped>
.breadcrumb{
  height: 40px;
}
</style>