<script setup lang="ts">
import { ref } from 'vue'
import HeaderBar from './components/HeaderBar.vue'
import SideBar from './components/SideBar.vue'
import AppMain from './components/AppMain.vue'

const isHeaderFixed = ref(false)
</script>

<template>
  <el-container class="layout-container">
    <SideBar />

    <el-container direction="vertical">
      <el-scrollbar v-if="isHeaderFixed" style="width: 100%">
        <HeaderBar />
        <AppMain />
      </el-scrollbar>

      <template v-else>
        <HeaderBar />
        <AppMain />
      </template>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped></style>
