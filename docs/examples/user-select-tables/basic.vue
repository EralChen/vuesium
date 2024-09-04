<script lang="ts" setup>
import { SkUserSelectTables } from '@skzz-template/components/user-select-tables'
import { ref } from 'vue'
import { User } from '@skzz-template/api/user'

const currentUsers = ref<User[]>([])
</script>
<template>
  <p>currentUsers: {{ currentUsers }}</p>
  <SkUserSelectTables
    v-model="currentUsers"
  ></SkUserSelectTables>
</template>