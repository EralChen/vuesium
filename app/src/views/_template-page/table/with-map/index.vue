<script lang="tsx" setup>
import PageX from '_c/PageX/index.vue'
import GoldMapX from '_c/GoldMapX/index.vue'
import {
  SkAppCard, SkCheckTags,
  SkAppTables, __SkAppTables,
  SkAppQueryForm, __SkAppQueryForm,
  SkAppOperations,
} from '@skzz/platform'
import { NormalObject, setData, VkDuplexCalc } from '@vunk/core'
import { ref } from 'vue'
import { FixedDir } from 'element-plus/es/components/table-v2/src/constants'



const queryItems: __SkAppQueryForm.FormItem[] = [
  {
    templateType: 'VkfInput',
    prop: 'name',
    label: '姓名',
    clearable: true,
    class: 'w-200px',
  },
  {
    templateType: 'VkfInput',
    prop: 'age',
    label: '年龄',
  },
  {
    templateType: 'VkfSelect',
    prop: 'city',
    label: '城市',
  },
  {
    templateType: 'VkfInput',
    prop: 'name',
    label: '姓名',
  },
  {
    templateType: 'VkfInput',
    prop: 'age',
    label: '年龄',
  },
  {
    templateType: 'VkfSelect',
    prop: 'city',
    label: '城市',
  },
  {
    templateType: 'VkfInput',
    prop: 'name',
    label: '姓名',
  },
  {
    templateType: 'VkfInput',
    prop: 'age',
    label: '年龄',
  },
  {
    templateType: 'VkfSelect',
    prop: 'city',
    label: '城市',
  },
]
const typeOptions = [
  {
    label: '全部',
    value: 'all',
  },
  {
    label: '已发布',
    value: 'published',
  },
  {
    label: '未发布',
    value: 'unpublished',
  },
]
const colSource: __SkAppTables.Column[] = [
  {
    key: 'id',
    dataKey: 'id',
    width: 50,
    title: 'ID',
    align: 'center',
  },
  ...Array.from({ length: 10 }).map((_, i) => {
    return {
      key: 'name',
      dataKey: 'name',
      width: 100,
      title: `姓名${i}`,
      flexGrow: 1,
      align: 'center',
    } as __SkAppTables.Column
  }),
  {
    key: 'operations',
    title: '操作',
    width: 260,

    align: 'center',
    fixed: FixedDir.RIGHT,
    cellRenderer: () => {
      return <SkAppOperations
        modules={['r', 'u', 'd']}
  
      ></SkAppOperations>
    },
  },
]


const formData = ref({
  type: 'all',
} as NormalObject)

const data = [
  ...Array.from({ length: 100 }).map((_, i) => {
    return {
      name: `cx${i}`,
      id: i,
    }
  }),
]

</script>
<template>
  <PageX>
    <SkAppCard
      :header="'地图+表格'"
      class="h-100%"
    >
      <GoldMapX
        :viewer-index="1"
        :type="'rtl'"
        class="h-100%"
      >
        <VkDuplexCalc class="gap-main-x">
          <template #one>
            <SkAppQueryForm 
              :fixes="2" 
              :data="formData" 
              :form-items="queryItems" 
              @setData="setData(formData, $event)"
            >
            </SkAppQueryForm>
            <div
              sk-flex="row-between-center"
              ptb-page
            >
              <SkCheckTags
                v-model="formData.type"
                :options="typeOptions"
              ></SkCheckTags>
              <ElButton type="primary">
                新增
              </ElButton>
            </div>
          </template>

          <SkAppTables
            :fixed="true"
            class="h-100%"
            :data="data"
            :columns="colSource"
            :total="100"
          >
          </SkAppTables>
        </VkDuplexCalc>
      </GoldMapX>
    </SkAppCard>
  </PageX>
</template>
