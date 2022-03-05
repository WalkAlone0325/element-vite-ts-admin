<script setup lang="ts">
import { ref } from 'vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array(10).fill(item))

const show = ref(true)
</script>

<template>
  <el-button @click="show = !show">Click Me</el-button>

  <div style="margin-top: 20px; height: 200px">
    <el-collapse-transition>
      <div v-show="show">
        <div class="transition-box">el-collapse-transition</div>
        <div class="transition-box">el-collapse-transition</div>
      </div>
    </el-collapse-transition>
  </div>
  <el-table :data="tableData">
    <el-table-column prop="date" label="Date" width="140"> </el-table-column>
    <el-table-column prop="name" label="Name" width="120"> </el-table-column>
    <el-table-column prop="address" label="Address"> </el-table-column>
  </el-table>
</template>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
