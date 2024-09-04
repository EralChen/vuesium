<script lang="tsx" setup>
import PageX from '_c/PageX/index.vue'
import { 
  SkAppTables, __SkAppTables, 
  SkAppQueryForm, __SkAppQueryForm, 
  SkAppOperations,
  Pagination,
} from '@skzz/platform'
import { NormalObject, setData, VkDuplexCalc } from '@vunk/core'
import { reactive, ref, watch } from 'vue'
import { rRoles, dRoles, cuRole } from '@skzz/platform/api/system/role'
import { genColumn } from '@skzz/platform/shared/utils-data'
import CuForm from './cu-form/index.vue'
import { SkAppDialog } from '@skzz/platform/components/app-dialog'
import { Row } from './types'

/* query */
const queryItems: __SkAppQueryForm.FormItem[] = [
  {
    templateType: 'VkfInput',
    prop: 'name',
    label: '姓名',
  },
]
const queryData = ref({} as NormalObject)

const pagination = ref<Pagination>({
  pageSize: 10,
  start: 0,
})
watch(pagination, r, { deep: true , immediate: true })
// watch(queryData, r, { deep: true , immediate: true })
/* query end */

const tableState = reactive({
  columns: [] as  __SkAppTables.Column[],
  data: [] as Row[],
  total: 0,
})

const cuIState = reactive({
  visible: false,
  formData: {} as Partial<Row>,
  title: '新增角色',
})

const operationsCol: __SkAppTables.Column = {
  title: '操作',
  key: 'operations',
  width: 150,
  flexGrow: 1,
  align: 'center',
  cellRenderer: ({ rowData }) => <SkAppOperations
    modules={['u','d']}
    onD={ () => { d([rowData.id]) } }
    onU={ () => { preuI(rowData) } }
  ></SkAppOperations>,
} 
function r () {
  rRoles(queryData.value, pagination.value).then(res => {
    if (!tableState.columns.length) {
      tableState.columns = res.columns.reduce((a, c) => {
        if (c.type === 'selection') {

  
        } else if (c.type === 'button') {
          a.push(operationsCol)
        } else {
          a.push(genColumn(c))
        }
  
        return a
      }, [] as __SkAppTables.Column[])
    }
    tableState.data = res.rows
    tableState.total = res.total
  })
}
function d (ids: string[]) {
  dRoles(ids).then(r)
}
function precI () {
  cuIState.visible = true
  cuIState.formData = {}
  cuIState.title = '新增角色'
}
function preuI (data: Row) {
  cuIState.visible = true
  cuIState.formData = {...data}
  cuIState.title = '修改角色'
}
function cuI () {
  cuRole(cuIState.formData as Row).then(r).then(() => {
    cuIState.visible = false
  })
}

</script>
<template>
  <PageX>
    <VkDuplexCalc class="gap-main-x">
      <template #one>
        <SkAppQueryForm 
          :data="queryData" 
          :form-items="queryItems" 
          @setData="setData(queryData, $event)"
          @enter="r"
        >
          <template #options>
            <ElButton
              type="primary"
              @click="r"
            >
              查询
            </ElButton>
            <ElButton
              type="primary" 
              @click="precI"
            >
              新增
            </ElButton>
          </template>
        </SkAppQueryForm>
      </template>

      <SkAppTables 
        v-bind="tableState" 
        v-model:start="pagination.start"
        v-model:pageSize="pagination.pageSize"
        class="h-100%"
      >
      </SkAppTables>
    </VkDuplexCalc>

    <SkAppDialog
      v-model="cuIState.visible"
      :title="cuIState.title"
    >
      <CuForm
        :data="cuIState.formData"
        @setData="setData(cuIState.formData, $event)"
        @submit="cuI"
      ></CuForm>
    </SkAppDialog>
  </PageX>
</template>
