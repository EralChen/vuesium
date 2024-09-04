<script lang="tsx" setup>
import { 
  SkAppTables, __SkAppTables, 
  SkAppOperations,
} from '@skzz/platform'
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



</script>
<template>
  <SkAppTables 
    :fixed="true"
    class="h-50vh" 
    :data="data"
    :columns="colSource"
    :total="100"
  >
  </SkAppTables>
</template>
