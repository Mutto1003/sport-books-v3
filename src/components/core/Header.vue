<template>
  <div>
    <a-layout-header
      style="background: #003147; margin: 10px; border-radius: 8px; padding: 0"
    >
      <a-row>
        <a-col :span="12">
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
            style="width: 300px; border-radius: 30px"
            @search="onSearch"
          />
        </a-col>
        <a-col :span="12" align="end">
          <a-avatar
            style="background-color: #003147"
            :style="{ fontSize: '25px', margin: '10px' }"
          >
            <template #icon>
              <DollarOutlined />
            </template>
          </a-avatar>

          <a-avatar
            style="background-color: #003147"
            :style="{ fontSize: '25px', margin: '10px' }"
          >
            <template #icon>
              <SolutionOutlined />
            </template>
          </a-avatar>

          <a-avatar
            style="background-color: #003147"
            :style="{ fontSize: '25px', margin: '10px' }"
          >
            <template #icon>
              <DollarOutlined />
            </template>
          </a-avatar>

          <a-avatar
            style="background-color: #003147"
            :style="{ fontSize: '25px', margin: '10px' }"
          >
            <template #icon>
              <DesktopOutlined />
            </template>
          </a-avatar>

          <a-dropdown>
            <a-avatar
              style="background-color: #87d068"
              :style="{ margin: '10px' }"
              class="ant-dropdown-link"
              @click.prevent
            >
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>
            <template #overlay>
              <a-menu style="width: 150px;" @click="onClick">
                <a-menu-item key="1">Logout</a-menu-item>
                <!-- <a-menu-item key="2">2nd menu item</a-menu-item>
                <a-menu-item key="3">3rd menu item</a-menu-item> -->
              </a-menu>
            </template>
          </a-dropdown>          
        </a-col>
      </a-row>

      <template #extra><a href="#">more</a></template>
    </a-layout-header>
  </div>
</template>

<script>
import {
  LeftCircleFilled,
  RightCircleFilled,
  DribbbleOutlined,
  UserOutlined,
  DollarOutlined,
  SolutionOutlined,
  DesktopOutlined,
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import store from "@/store";

export default defineComponent({
  components: {
    LeftCircleFilled,
    RightCircleFilled,
    DribbbleOutlined,
    UserOutlined,
    DollarOutlined,
    SolutionOutlined,
    DesktopOutlined,
  },
  props: ["collapsed"],
  setup(props, { emit }) {
    const router = useRouter();
    const toggleCollapse = () => {
      emit("update:collapsed", !props.collapsed);
    };

    const onClick = ({ key }) => {
      // console.log(`Click on item ${key}`);
      router.push({ name: "home" });
      store.dispatch("actionisHiddenMenuHome", false);
      store.dispatch("actionisHiddenBroker", true);
    };
    return { toggleCollapse, onClick };
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
