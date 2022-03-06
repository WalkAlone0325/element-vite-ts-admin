<script setup lang="ts">
import { useSetting } from '@/store'
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import usePermission from '@/hooks/permission'

const route = useRoute()
const router = useRouter()

const settingStore = useSetting()
const { isCollapse } = storeToRefs(settingStore)

const permission = usePermission()

const appRoute = computed(() => {
  return router
    .getRoutes()
    .find((el) => el.name === 'root') as RouteRecordNormalized
})
const menuTree = computed(() => {
  const copyRouter = JSON.parse(JSON.stringify(appRoute.value.children))
  function travel(
    _routes: RouteRecordRaw[],
    layer: number
  ): RouteRecordRaw[] | null {
    if (!_routes) return null

    const collector = _routes.map((element) => {
      if (!permission.accessRouter(element)) return null

      if (!element.children) return element

      const subItem = travel(element.children, layer)
      if (subItem?.length) {
        element.children = subItem
        return element
      }
      if (layer > 1) {
        element.children = subItem!
        return element
      }
      return null
    })
    return collector.filter(Boolean as any)
  }

  return travel(copyRouter, 0)
})

// 活跃菜单
const activeRoute = ref('')
watch(
  route,
  (newVal) => {
    if (newVal.meta.requiresAuth) {
      const key = newVal.matched[2].path
      activeRoute.value = key
    }
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <el-menu
    :default-active="activeRoute"
    :collapse="isCollapse"
    mode="vertical"
    router
    unique-opened
  >
    <template v-for="item in menuTree" :key="item.name">
      <template v-if="item.children">
        <el-sub-menu :key="item.name" :index="item.path">
          <template #title>
            <el-icon :size="20">
              <component :is="item.meta?.icon" />
            </el-icon>
            <span>{{ item.meta?.locale }}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :key="child.name"
            :index="`/${item.path}/${child.path}`"
          >
            {{ child.meta?.locale }}
          </el-menu-item>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :index="item.path">
          <el-icon :size="20">
            <component :is="item.meta?.icon" />
          </el-icon>
          <span>{{ item.meta?.locale }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>
