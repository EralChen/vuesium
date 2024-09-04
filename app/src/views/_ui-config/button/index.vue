<script lang="ts" setup>
import { SkAppCard } from '@skzz/platform'
import { SkMultipageRenderer } from '@skzz/platform/components/multipage-renderer'
import { SkMultipageTemplate } from '@skzz/platform/components/multipage-template'
import { ref } from 'vue'
import PrimaryVue from './primary.vue'
import { useThemeStore } from '@/stores/theme'
import { setData } from '@vunk/core'
const themeStore = useThemeStore()
const currentPage = ref('primary')
</script>
<template>
  <page-x>
    <SkAppCard
      class="h-100%"
      :header="'按钮配置'"
    >
      <SkMultipageRenderer
        v-model="currentPage"
        :header-class="'plr-form-pl'"
        :body-class="'h-100%'"
        class="h-100%"
      >
        <SkMultipageTemplate 
          :label="'主要按钮'"
          :value="'primary'"
        >
          <ElScrollbar>
            <PrimaryVue
              :data="themeStore.buttonPrimaryStyles"
              @setData="setData(themeStore.buttonPrimaryStyles, $event)"
            ></PrimaryVue>
          </ElScrollbar>

          <template #options>
            <ElButton type="primary">
              TEST
            </ElButton>
          </template>
        </SkMultipageTemplate>
      </SkMultipageRenderer>
    </SkAppCard>
  </page-x>
</template>
