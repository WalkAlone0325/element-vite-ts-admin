<script setup lang="ts"></script>

<template>
  <el-main>
    <el-scrollbar>
      <Suspense>
        <template #default>
          <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="Component" :key="route.path"></component>
              </keep-alive>
            </transition>
          </router-view>
        </template>
        <template #fallback>Loading...</template>
      </Suspense>
    </el-scrollbar>
  </el-main>
</template>
