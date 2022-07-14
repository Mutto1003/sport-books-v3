<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel key="1" header="รายการวันนี้">
      <!-- <p>{{ text }}</p> -->
      <p class="bg-card">แมนยู vs ลิเวอร์พูล <FieldTimeOutlined />  02.30 PM</p>
      <p class="bg-card">แมนยู vs ลิเวอร์พูล <FieldTimeOutlined />  02.30 PM</p>
      <p class="bg-card">แมนยู vs ลิเวอร์พูล <FieldTimeOutlined />  02.30 PM</p>
      <p class="bg-card">แมนยู vs ลิเวอร์พูล <FieldTimeOutlined />  02.30 PM</p>
      <p class="bg-card">แมนยู vs ลิเวอร์พูล <FieldTimeOutlined />  02.30 PM</p>
      <p class="bg-card">แมนยู vs ลิเวอร์พูล <FieldTimeOutlined />  02.30 PM</p>
      <p class="bg-card">แมนยู vs ลิเวอร์พูล <FieldTimeOutlined />  02.30 PM</p>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import { FieldTimeOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  components: {
    FieldTimeOutlined,
  },
  setup() {
    // const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const activeKey = ref(["1"]);

    watch(activeKey, (val) => {
      console.log(val);
    });

    return {
      // text,
      activeKey,
    };
  },
});
</script>

<style scoped>
/* @import "@/css/styles.css"; */
</style>
