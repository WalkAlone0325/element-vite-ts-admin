<script setup lang="ts">
import {
  ArrowDown,
  BellFilled,
  FullScreen,
  Expand,
  Fold,
} from '@element-plus/icons-vue'
import { useFullscreen } from '@vueuse/core'
import avatar from '@/assets/images/favicon.svg'
import { ElMessage } from 'element-plus'
import { computed, ref } from 'vue'
import { useSetting } from '@/store'

// 全屏
const { isFullscreen, isSupported, toggle } = useFullscreen()
const tipContent = computed(() =>
  isFullscreen.value ? '退出全屏' : '进入全屏'
)
const toggleFullscreen = () => {
  if (isSupported) {
    toggle()
  } else {
    ElMessage.error('您的浏览器不支持全屏')
  }
}

// collapsed 切换
const settingStore = useSetting()
</script>

<template>
  <el-header height="50px">
    <div>
      <div class="collapsed-icon" @click="settingStore.toggleCollapse">
        <el-icon :size="26">
          <expand v-if="settingStore.isCollpase" />
          <fold v-else />
        </el-icon>
      </div>
      <!-- <el-icon><fold /></el-icon> -->
    </div>
    <div class="toolbar">
      <div class="icon-setting">
        <icon-tooltip :content="tipContent">
          <full-screen @click="toggleFullscreen" />
        </icon-tooltip>
        <icon-tooltip content="提醒">
          <bell-filled />
        </icon-tooltip>
      </div>
      <el-dropdown>
        <span class="avatar-link">
          <el-avatar :size="36" :src="avatar"></el-avatar>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<style lang="scss" scoped>
.collapsed-icon {
  cursor: pointer;
  padding: 3px;
  background-color: #fff;
}
.avatar-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.icon-setting {
  display: flex;
  margin-right: 20px;
}
</style>
