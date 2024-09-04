<script lang="ts" setup>
import { SkAppCard, SkAppModule } from '@skzz/platform'
import ConfigVue from './config.vue'
import BasicVue from './basic.vue'

import { useThemeStore } from '@/stores/theme'
import { setData } from '@vunk/core'
const themeStore = useThemeStore()

</script>
<template>
  <page-x>
    <SkAppCard
      class="h-100%"
      :header="'表格配置'"
    >
      <ElScrollbar>
        <SkAppModule :title="'配置表单'">
          <ConfigVue
            :data="themeStore.tableV2Styles"
            @setData="setData(themeStore.tableV2Styles, $event)"
          ></ConfigVue>
        </SkAppModule>
        <SkAppModule :title="'配置用例'">
          <BasicVue></BasicVue>
        </SkAppModule>
      </ElScrollbar>
    </SkAppCard>
  </page-x>
</template>
