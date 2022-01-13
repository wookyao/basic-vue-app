<template>
  <div class="home-page">home page</div>
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
