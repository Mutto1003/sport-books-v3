<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel class="text-dark" key="1" header="ถ่ายทอดสดผ่านเว็บ">
      <p class="text-dark">{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
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
    };
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
