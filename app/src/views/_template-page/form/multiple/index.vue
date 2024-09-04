<script lang="ts">
export default {
  name: 'FormMultiple',
}
</script>
<script lang="ts" setup>
import {  reactive, ref } from 'vue'
import PageX from '_c/PageX/index.vue'
import {
  SkAppCard,
  SkMultipageRenderer, SkMultipageTemplate,
} from '@skzz/platform'

import FirstVue from './first.vue'
import { setData } from '@vunk/core'


const currentPage = ref('first')
const firstFormData = reactive({

})


</script>
<template>
  <PageX>
    <SkAppCard
      :header="'多列表单'"
      :class="'h-100%'"
    >
      <template #header__options>
        <ElButton type="primary">
          提交
        </ElButton>
      </template>
      <SkMultipageRenderer
        v-model="currentPage"
        :tab-x-class="'plr-form-pl'"
        :body-class="'h-100% '"
        :class="'h-100%'"
      >
        <SkMultipageTemplate
          :label="'选项1'"
          :value="'first'"
        >
          <ElScrollbar>
            <FirstVue
              class="ptb-form-pt plr-form-pl"
              :data="firstFormData"
              @setData="setData(firstFormData, $event)"
            ></FirstVue>
          </ElScrollbar>
        </SkMultipageTemplate>

        <SkMultipageTemplate
          :label="'选项2'"
          :value="'second'"
        >
          <div>form</div>
        </SkMultipageTemplate>
      </SkMultipageRenderer>
    </SkAppCard>
  </PageX>
</template>
