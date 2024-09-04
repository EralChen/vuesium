<script lang="tsx" setup>
import { 
  SkAppCard, SkCheckTags,
  SkAppTables, __SkAppTables, 
  SkAppQueryForm, __SkAppQueryForm, 
  SkAppOperations,
} from '@skzz/platform'
import { NormalObject, setData, VkDuplexCalc } from '@vunk/core'
import { ref } from 'vue'
import { FixedDir } from 'element-plus/es/components/table-v2/src/constants'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      },
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 1000)

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
  ...columns,
  {
    key: 'operations',
    title: '操作',
    width: 260,
    fixed: FixedDir.RIGHT,
    cellRenderer: () => {
      return <SkAppOperations 
        modules={[ 'r', 'u', 'd']}

      ></SkAppOperations>
    },
  },
]


const formData = ref({
  type: 'all',
} as NormalObject)



</script>
<template>
  <PageX>
    <SkAppCard
      :header="'表格'"
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
    </SkAppCard>
  </PageX>
</template>
