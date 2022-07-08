<template>
  <div>
    <a-layout-header
      style="background: #003147; margin: 10px; border-radius: 8px; padding: 0"
    >
      <RightCircleFilled
        :style="{ fontSize: '20px', color: '#696CFF', margin: '10px' }"
        v-if="collapsed"
        class="trigger"
        @click="toggleCollapse"
      />
      <LeftCircleFilled
        :style="{ fontSize: '20px', color: '#696CFF', margin: '10px' }"
        v-else
        class="trigger"
        @click="toggleCollapse"
      />
      <a-input-search
        :style="{ margin: '10px' }"
        v-model:value="value"
        placeholder="input search text"
        style="width: 200px"
        @search="onSearch"
      />
    </a-layout-header>
  </div>
</template>

<script>
import {
  LeftCircleFilled,
  RightCircleFilled,
  DribbbleOutlined,
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    LeftCircleFilled,
    RightCircleFilled,
    DribbbleOutlined,
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
