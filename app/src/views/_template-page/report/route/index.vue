<script lang="tsx" setup>
import PageX from '_c/PageX/index.vue'
import { 
  SkAppTables, __SkAppTables, 
  SkAppQueryForm, __SkAppQueryForm, 
  SkAppOperations,
  Pagination,
} from '@skzz/platform'
import { ApiReturnType, NormalObject, setData, VkDuplexCalc } from '@vunk/core'
import { reactive, ref, watch } from 'vue'
import { rRoles, dRoles } from '@skzz/platform/api/system/role'
import { genColumn } from '@skzz/platform/shared/utils-data'
import { useRouterTo, useRouteSocket } from '@skzz/platform/composables'

type Res = ApiReturnType<typeof rRoles>

const { createReceiver } = useRouteSocket()
const { routerNext } = useRouterTo()
const receiver = createReceiver()

receiver.addListener(r)


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
  data: [] as Res['rows'],
  total: 0,
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
  ></SkAppOperations>,
} 
function r () {
  return rRoles(queryData.value, pagination.value).then(res => {
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
  routerNext({
    path: 'create',
    mode: 'push',
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
  </PageX>
</template>
