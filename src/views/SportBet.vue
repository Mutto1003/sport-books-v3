<template>
  <PageHeader />
  <br />
  <a-row type="flex">
    <a-col flex="1 1 200px">
      <Live />
      <br />
      <VariouRresults />
      <br />
      <!-- <CorrectScoreTable />
      <br /> -->
      <component :is="(component = $store.getters.getcomponentTable)">
      </component>
    </a-col>
    <a-col
      flex="0 1 300px"
      :style="{
        margin: '0px 0px 0px 16px',
      }"
      ><FootballProgram
    /></a-col>
  </a-row>
</template>

<script>
import PageHeader from "@/components/cards/PageHeader.vue";
import CorrectScoreTable from "@/components/table/CorrectScoreTable.vue";
import EvenOddTable from "@/components/table/EvenOddTable.vue";
import FirstLastGoalTable from "@/components/table/FirstLastGoalTable.vue";
import FullHalfTimeTable from "@/components/table/FullHalfTimeTable.vue";
import TotalGoalTable from "@/components/table/TotalGoalTable.vue";
import Live from "@/components/cards/Live.vue";
import VariouRresults from "@/components/cards/VariouRresults.vue";
import FootballProgram from "@/components/cards/FootballProgram.vue";
import { defineComponent, computed } from "vue";

export default defineComponent({
  components: {
    PageHeader,
    CorrectScoreTable,
    Live,
    VariouRresults,
    FootballProgram,
    EvenOddTable,
    FirstLastGoalTable,
    FullHalfTimeTable,
    TotalGoalTable,
  },
  setup() {
    const leagueId = computed(() => store.state.leagueId);
    return {};
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
.ant-collapse-header {
  background: #5574a7;
  /* text-align: center; */
  color: #fff;
}
</style>
