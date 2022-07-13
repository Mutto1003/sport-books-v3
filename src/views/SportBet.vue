<template>
  <a-row type="flex">
    <a-col flex="1 1 200px">
      <Live />
      <br />
      <VariouRresults />
      <br />
      <CorrectScoreTable />
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
import CorrectScoreTable from "@/components/table/CorrectScoreTable.vue";
import Live from "@/components/cards/Live.vue";
import VariouRresults from "@/components/cards/VariouRresults.vue";
import FootballProgram from "@/components/cards/FootballProgram.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    CorrectScoreTable,
    Live,
    VariouRresults,
    FootballProgram,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
