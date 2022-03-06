<script setup lang="ts">
import { useSetting } from '@/store'
import { storeToRefs } from 'pinia'

const settingStore = useSetting()
const { isOpenDrawer } = storeToRefs(settingStore)
</script>

<template>
  <el-drawer v-model="isOpenDrawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>
