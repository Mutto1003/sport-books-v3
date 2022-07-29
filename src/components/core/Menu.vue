<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    :trigger="null"
    collapsible
    style="background: #003147"
  >
    <div class="logo" />
    <a-button @click="toggleCollapse">X</a-button>
    <!-- <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
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
      </a-menu> -->
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
    >
      <a-menu-item key="1">
        <template #icon>
          <img style="width: 18px" src="@/assets/11zon_cropped.png" />
        </template>
        356678
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <CalendarOutlined />
        </template>
        ใบเดิมพัน รายการ
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>ฟุตบอลโลก</template>
        <!-- <a-menu-item key="3">ล่วงหน้า วันนี้ สด</a-menu-item> -->
        <a-menu-item key="3">ฟุตบอล</a-menu-item>
        <a-menu-item @click="componentTable()" key="4">ทั้งหมด</a-menu-item>
        <a-menu-item @click="componentTable('CorrectScoreTable')" key="5"
          >คะแนนที่ถูกต้อง</a-menu-item
        >
        <a-menu-item @click="componentTable('EvenOddTable')" key="6"
          >คู่/คี่</a-menu-item
        >
        <a-menu-item @click="componentTable('TotalGoalTable')" key="7"
          >จำนวนรวมของประตู</a-menu-item
        >
        <a-menu-item @click="componentTable('FullHalfTimeTable')" key="8"
          >ครึ่งแรก/เต็มเวลา</a-menu-item
        >
        <a-menu-item @click="componentTable('FirstLastGoalTable')" key="9"
          >ประตูแรก/ประตูสุดท้าย</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>กีฬา</template>
        <a-menu-item key="10">Option 7</a-menu-item>
        <a-menu-item key="11">Option 8</a-menu-item>
        <a-menu-item key="12">Option 9</a-menu-item>
        <a-menu-item key="13">Option 10</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>อีสปอร์ต</template>
        <a-menu-item key="14">Option 7</a-menu-item>
        <a-menu-item key="15">Option 8</a-menu-item>
        <a-menu-item key="16">Option 9</a-menu-item>
        <a-menu-item key="17">Option 10</a-menu-item>
      </a-sub-menu>
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
} from "@ant-design/icons-vue";
import { defineComponent, reactive, toRefs } from "vue";
import {useStore} from "vuex"
// import store from "@/store";

export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
  },
  props: ["collapsed"],
  setup(props, { emit }) {
    const store = useStore();

    const state = reactive({
      selectedKeys: ["1"],
      openKeys: ["sub1"],
    });

    const toggleCollapse = () => {
      emit("update:collapsed", !props.collapsed);
    };

    const componentTable = (value) => {
      store.dispatch("actioncomponentTable", value);
      console.log(value)
    };

    return { toggleCollapse, ...toRefs(state), componentTable };
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
