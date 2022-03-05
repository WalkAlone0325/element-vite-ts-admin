<script setup lang="ts">
import logoImg from '@/assets/images/favicon.svg'
import { useSetting } from '@/store'
import { storeToRefs } from 'pinia'

const { isCollapse } = storeToRefs(useSetting())
</script>

<template>
  <div class="logo-container">
    <el-image :src="logoImg" style="width: 30px; height: 30px" />
    <transition name="el-fade-in">
      <h4 v-if="!isCollapse">后台管理系统</h4>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: $border-base;
  height: 50px;
  transition: var(--el-transition-duration);

  h4 {
    margin-left: 6px;
  }
}
</style>
