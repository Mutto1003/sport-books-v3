<template>
  <a-card style="background-color: #e7e7ff" title="รายการวันนี้">
    <a-card class="bg-card"> Inner Card content </a-card>
    <a-card> Inner Card content </a-card>
    <a-card> Inner Card content </a-card>
    <a-card> Inner Card content </a-card>
  </a-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
/* @import "@/css/styles.css"; */
.ant-card-body {
  background: #4caf50;
  /* border: 1px solid #4CAF50; */
}
</style>
