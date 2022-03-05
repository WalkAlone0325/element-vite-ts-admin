<script setup lang="ts">
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRoutesList, useSetting } from '@/store'
import { storeToRefs } from 'pinia'
import Logo from './Logo.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const useRoutesStore = useRoutesList()
console.log(useRoutesStore.routesList)

const settingStore = useSetting()
const { isCollapse, theme } = storeToRefs(settingStore)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-aside class="side-layout" :width="isCollapse ? '64px' : '200px'">
    <el-scrollbar>
      <Logo />
      <el-menu
        default-active="2"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
