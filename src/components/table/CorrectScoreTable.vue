<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
    <template #title>ออสเตรเลีย ฟุตบอล ควีนส์แลนด์ พรีเมียร์ลีก 2</template>
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
    title: "0-1",
    className: "column-money",
    dataIndex: "money",
  },
  {
    title: "0-2",
    dataIndex: "address",
  },
  {
    title: "0-2",
    dataIndex: "address",
  },
  {
    title: "0-2",
    dataIndex: "address",
  },
  {
    title: "0-2",
    dataIndex: "address",
  },
  {
    title: "0-2",
    dataIndex: "address",
  },
  {
    title: "0-2",
    dataIndex: "address",
  },
  {
    title: "0-2",
    dataIndex: "address",
  },
  {
    title: "0-2",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown VS John Brown",
    money: "",
    address: "",
  },  
];

export default defineComponent({
  setup() {
    return { data, columns };
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
