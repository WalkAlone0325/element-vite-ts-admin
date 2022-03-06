<script setup lang="ts">
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import { useSetting } from '@/store'
import { storeToRefs } from 'pinia'

const settingStore = useSetting()
const { isCollapse } = storeToRefs(settingStore)
</script>

<template>
  <el-aside class="side-layout" :width="isCollapse ? '64px' : '200px'">
    <el-scrollbar>
      <Logo />
      <Menu />
    </el-scrollbar>
  </el-aside>
</template>
