<template>
  <a-layout-content
    :style="{
      margin: '10px 16px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px',
    }"
  >
    <router-view />
    <!-- <Home /> -->
    <!-- <SportBet /> -->
    <!-- <Brokerbet /> -->
    <!-- <TagePage /> -->
  </a-layout-content>
</template>

<script>
import SportBet from "@/views/SportBet.vue";
import Brokerbet from "@/views/Brokerbet.vue";
import Home from "@/views/Home.vue";
import TagePage from "@/components/cards/TagePage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    SportBet,
    Brokerbet,
    Home,
    TagePage,
  },
  setup() {},
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
