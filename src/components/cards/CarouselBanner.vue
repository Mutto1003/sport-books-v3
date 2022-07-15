<template>
  <a-carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
/* @import "@/css/styles.css"; */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 350px;
  line-height: 160px;
  background: #364d79;
  /* border-radius: 8px; */
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
  border-radius: 8px;
}
</style>
