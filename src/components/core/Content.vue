<template>
  <a-layout-content
    :style="{
      margin: '10px 16px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px',
    }"
  >
    <CorrectScoreTable />
  </a-layout-content>
</template>

<script>
import CorrectScoreTable from "@/components/table/CorrectScoreTable.vue";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    LeftCircleFilled,
    RightCircleFilled,
    CorrectScoreTable,
  },
  setup() {},
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
