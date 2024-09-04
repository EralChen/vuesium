<script lang="ts">
import { NormalObject } from '@vunk/core'
import { defineComponent } from 'vue'
import testData from './data.json'
export default defineComponent({
  setup () {
    const childrenNameToNode = {} as NormalObject
    const checkedNameToNodeWithoutTop = {} as NormalObject
    for (const item of testData) {
      if (item.children) {
        for (const child of item.children) {
          childrenNameToNode[child.name] = item
        }
      }
    }
    for (const item of testData) {
      if (childrenNameToNode[item.name]) {
        checkedNameToNodeWithoutTop[item.name] = item
      }
    }

    const checkedTree = [] as NormalObject[]
    for (const item of testData) {

      if (!checkedNameToNodeWithoutTop[item.name]) {
        
        if (Array.isArray(item.children)) {
          item.children = (item.children as any[]).reduce((acc, cur) => {
            if (checkedNameToNodeWithoutTop[cur.name]) {
              acc.push(checkedNameToNodeWithoutTop[cur.name])
            }
            return acc
          }, [] as NormalObject[])
        }
    
        checkedTree.push(item)
        
      } else {

        const treeItem = checkedNameToNodeWithoutTop[item.name]

        if (Array.isArray(treeItem.children)) {
          treeItem.children = (treeItem.children as any[]).reduce((acc, cur) => {
            if (checkedNameToNodeWithoutTop[cur.name]) {
              acc.push(checkedNameToNodeWithoutTop[cur.name])
            }
            return acc
          }, [] as NormalObject[])
        }

      
      }
    }

    // console.log(childrenNameToNode, 'childrenNameToNode')
    // console.log(checkedNameToNodeWithoutTop, 'checkedNameToNode')
    // console.log(checkedTree, 'checkedTree')
    return {}
  },
})
</script>
<template>
  <div text-blue>
    checkedTree
  </div>
</template>
