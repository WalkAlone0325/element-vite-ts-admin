<script setup lang="ts"></script>

<template>
  <el-main>
    <el-scrollbar>
      <Suspense>
        <template #default>
          <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <div>
                  <!-- 多加一层 div，防止组件内多根组件导致报警告 -->
                  <component :is="Component" :key="route.path"></component>
                </div>
              </keep-alive>
            </transition>
          </router-view>
        </template>
        <template #fallback>Loading...</template>
      </Suspense>
    </el-scrollbar>
  </el-main>
</template>
