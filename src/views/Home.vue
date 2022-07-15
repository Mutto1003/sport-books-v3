<template>
  <a-row>
    <a-col :span="4"><League style="margin-right: 1em;"/></a-col>
    <a-col :span="16"><CarouselBanner /> <LiveScore style="margin-top: 2em;"/> </a-col>
    <a-col :span="4"><RecommendBroker style="margin-left: 1em;"/> <AllBrokerBet style="margin-left: 1em;"/></a-col>
  </a-row>
</template>

<script>
import CarouselBanner from "@/components/cards/CarouselBanner.vue";
import LiveScore from "@/components/cards/LiveScore.vue";
import AllBrokerBet from "@/components/cards/AllBrokerBet.vue";
import RecommendBroker from "@/components/cards/RecommendBroker.vue"; 
import League from "@/components/cards/League.vue"; 
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    CarouselBanner,    
    AllBrokerBet,
    LiveScore,
    RecommendBroker,
    League
  },
  setup() {},
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
