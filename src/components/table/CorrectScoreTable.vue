<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
    <template #title> พรีเมียร์ลีก รัสเซีย</template>
    <!-- <template #footer>Footer</template> -->
  </a-table>
</template>
<script>
import { defineComponent } from "vue";
const columns = [
  {
    title: "รายการ",
    dataIndex: "name",
  },
  {
    title: "1-0",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "1-0",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "1-0",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "1-0",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "1-0",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "1-0",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "1-0",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "1-0",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "1-0",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "1-0",
    className: "column-money",
    dataIndex: "money",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown vs John Brown",
    money: "1.5",
  },
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
th.column-title,
td.column-title {
  text-align: right !important;
  border-color: chartreuse;
}
</style>
