<template>
  <CarouselBanner /><br><br>
  <BrokerBet style="margin-top: 1em;"/>
</template>

<script>
import CarouselBanner from "@/components/cards/CarouselBanner.vue";
import BrokerBet from "@/components/cards/BrokerBet.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    CarouselBanner,
    BrokerBet,
  },
  setup() {},
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
