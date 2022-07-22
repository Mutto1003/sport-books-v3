<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    :trigger="null"
    collapsible
    style="background: #001529"
  >
    <a-button
      type="text"
      block
      style="background: #001529; margin-top: 1em 0em 1em"
      @click="toggleCollapse"
    >
      <MenuOutlined style="color: #ffff; text-align: center" />
    </a-button>
    <!-- <div class="logo" />
    <MenuOutlined style="color: #ffff" @click="toggleCollapse" /> -->
    <!-- <a-button @click="toggleCollapse">X</a-button> -->
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
    >
      <!-- <a-menu-item>
        <template #icon>
          <MenuOutlined @click="toggleCollapse" />
        </template>
      </a-menu-item> -->
      <a-menu-item key="1">
        <template #icon>
          <img style="width: 18px" src="@/assets/soccer-ball.png" />
        </template>
        ฟุตบอล
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <img style="width: 18px" src="@/assets/soccer-hacky.png" />
        </template>
        รักบี้
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <img style="width: 18px" src="@/assets/shuttlecock.png" />
        </template>
        แบดมินตัน
      </a-menu-item>
      <a-menu-item key="4">
        <template #icon>
          <img style="width: 18px" src="@/assets/table-tennis.png" />
        </template>
        ปิงปอง
      </a-menu-item>
      <a-menu-item key="5">
        <template #icon>
          <img style="width: 18px" src="@/assets/soccer-bas.png" />
        </template>
        บาสเกตบอล
      </a-menu-item>
      <a-menu-item key="6">
        <template #icon>
          <img style="width: 18px" src="@/assets/ball.png" />
        </template>
        เทนนิส
      </a-menu-item>
      <a-menu-item key="7">
        <template #icon>
          <img style="width: 18px" src="@/assets/baseball.png" />
        </template>
        เบสบอล
      </a-menu-item>
      <a-menu-item key="8">
        <template #icon>
          <img style="width: 18px" src="@/assets/boxing-gloves.png" />
        </template>
        มวย
      </a-menu-item>
      <a-menu-item key="9">
        <template #icon>
          <img style="width: 18px" src="@/assets/volleyball.png" />
        </template>
        วอลเลย์บอล
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    MenuOutlined,
  },
  props: ["collapsed"],
  setup(props, { emit }) {
    const state = reactive({
      selectedKeys: ["1"],
      openKeys: ["sub1"],
    });
    const toggleCollapse = () => {
      emit("update:collapsed", !props.collapsed);
    };
    return { toggleCollapse, ...toRefs(state) };
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
