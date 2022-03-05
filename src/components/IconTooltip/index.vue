<script setup lang="ts">
import type { Placement } from 'element-plus'

withDefaults(
  defineProps<{
    content: string
    placement?: Placement
    size?: number
    effect?: string
  }>(),
  {
    content: '',
    placement: 'bottom',
    size: 24,
    effect: 'light',
  }
)
</script>

<template>
  <el-tooltip :content="content" :placement="placement" :effect="effect">
    <div class="icon-container">
      <el-icon :size="24">
        <slot></slot>
      </el-icon>
    </div>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.icon-container {
  cursor: pointer;
  padding: 5px;
  margin: 0 5px;

  &:hover {
    background-color: #fff;
    border-radius: 4px;
  }
}
</style>
