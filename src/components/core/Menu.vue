<template>
  
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-button @click="toggleCollapse">X</a-button>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  
</template>

<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined,
  QqOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
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
