<template>
  <a-layout-content
    :style="{
      margin: '10px 16px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px',
    }"
  >
    <SportBet />
  </a-layout-content>
</template>

<script>
import SportBet from "@/components/pages/SportBet.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    SportBet,
  },
  setup() {},
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
