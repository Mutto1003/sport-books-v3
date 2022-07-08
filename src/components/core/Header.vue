<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <RightCircleFilled
        v-if="collapsed"
        class="trigger"
        @click="toggleCollapse"
      />
      <LeftCircleFilled
        v-else
        class="trigger"
        @click="toggleCollapse"
      />
    </a-layout-header>
  </div>
</template>

<script>
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    LeftCircleFilled,
    RightCircleFilled,
  },
  props: ["collapsed"],
  setup(props, { emit }) {
    const toggleCollapse = () => {
      emit("update:collapsed", !props.collapsed);
    };
    return { toggleCollapse };
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
