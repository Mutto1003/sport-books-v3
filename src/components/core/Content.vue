<template>
  <a-layout-content
    :style="{
      margin: '10px 16px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px',
    }"
  >
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
  </a-layout-content>
</template>

<script>
import CorrectScoreTable from "@/components/table/CorrectScoreTable.vue";
import Live from "@/components/live/Live.vue";
import VariouRresults from "@/components/results/VariouRresults.vue";
import FootballProgram from "@/components/cards/FootballProgram.vue";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    LeftCircleFilled,
    RightCircleFilled,
    CorrectScoreTable,
    Live,
    VariouRresults,
    FootballProgram,
  },
  setup() {},
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
