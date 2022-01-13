<template>
  <div class="home-page">
    <p class="font-bold flex p-5px">home page</p>
    <div class="h-12 w-12 bg-[#b2a8bb]" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(async () => {
  // 错误 不能这么使用 会失去响应式
  // putinInfo = res.putinInfo;
  // outInfo = res.outInfo;
  // 应该这么使用
  // Object.assign(putinInfo, res.putinInfo);
  // Object.assign(outInfo, res.outInfo);
});
</script>

<style lang="scss" scoped></style>
