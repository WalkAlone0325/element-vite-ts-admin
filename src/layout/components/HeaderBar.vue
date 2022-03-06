<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import avatar from '@/assets/images/favicon.svg'
import { ElMessage } from 'element-plus'
import { computed, ref } from 'vue'
import { useSetting } from '@/store'
import { storeToRefs } from 'pinia'

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
const { isCollapse } = storeToRefs(settingStore)

// 下拉框

interface DropOption {
  id: number
  value: string
  icon?: string
  divided?: boolean
}
const dropOptions = ref<DropOption[]>([
  { id: 1, icon: '', value: '个人中心', divided: false },
  { id: 2, icon: '', value: '全局配置', divided: false },
  { id: 3, icon: '', value: '退出登录', divided: false },
])
const handleClickItem = (dropItem: DropOption) => {
  switch (dropItem.id) {
    case 2:
      settingStore.toggleDrawer()
      break

    default:
      break
  }
}
</script>

<template>
  <el-header height="50px">
    <div>
      <div class="collapsed-icon" @click="settingStore.toggleCollapse">
        <el-icon :size="26">
          <expand v-if="isCollapse" />
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
      <el-dropdown @command="handleClickItem">
        <span class="avatar-link">
          <el-avatar :size="36" :src="avatar"></el-avatar>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="item in dropOptions"
              :key="item.id"
              :icon="item.icon"
              :divided="item.divided"
              :command="item"
              >{{ item.value }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
  <global-setting />
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
