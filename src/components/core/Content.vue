<template>
  <a-layout-content
    :style="{
      margin: '10px 16px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px',
    }"
  >
    <!-- <SportBet /> -->
    <Brokerbet />
  </a-layout-content>
</template>

<script>
import SportBet from "@/views/SportBet.vue";
import Brokerbet from "@/views/Brokerbet.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    SportBet,
    Brokerbet
  },
  setup() {},
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
