<template>
  <div>
    <a-layout-header style="background: #003147">
      <a-row>
        <a-col :span="18"> </a-col>
        <a-col :span="5" align="end">
          <div class="components-input-demo-presuffix" > 
            <a-input style="border-radius: 30px;" v-model:value="userName" placeholder="ค้นหา">
              <template #suffix>
                <a-tooltip title="Extra information">
                  <SearchOutlined style="color: rgba(0, 0, 0, 0.45)" />
                </a-tooltip>
              </template>
            </a-input>
          </div>
        </a-col>
        <a-col :span="1" align="end">
          <a-avatar
            style="background-color: #87d068"
            :style="{ margin: '0px' }"
          >
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
        </a-col>
      </a-row>

      <template #extra><a href="#">more</a></template>
    </a-layout-header>
  </div>
</template>

<script>
import {
  UserOutlined, SearchOutlined
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    UserOutlined, SearchOutlined 
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
