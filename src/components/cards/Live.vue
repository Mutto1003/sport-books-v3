<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel style="background-color: #5574A7;" key="1" header="ถ่ายทอดสดผ่านเว็บ">
      <!-- <p class="text-dark crad-live">{{ text }}</p> -->
      <a-empty class="crad-live"/>  
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import { Empty } from 'ant-design-vue';
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const activeKey = ref(["1"]);
    watch(activeKey, (val) => {
      console.log(val);
    });
    return {
      text,
      activeKey,
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE,
    };
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
