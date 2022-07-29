<template>
  <div>
    <a-layout-header style="background: #003147">
      <a-row>
        <a-col :span="18"> </a-col>
        <a-col :span="5" align="end">
          <div class="components-input-demo-presuffix">
            <a-input
              style="border-radius: 30px"
              v-model:value="userName"
              placeholder="ค้นหา"
            >
              <template #suffix>
                <a-tooltip title="Extra information">
                  <SearchOutlined style="color: rgba(0, 0, 0, 0.45)" />
                </a-tooltip>
              </template>
            </a-input>
          </div>
        </a-col>
        <a-col :span="1" align="end">
          <!-- <a-avatar
            v-if="!isHiddenLoginPass"
            @click="modal2Visible = true"
            style="background-color: #87d068"
            :style="{ margin: '0px' }"
          >
            <template #icon>
              <UserOutlined @click="modal2Visible = true" />
            </template>
          </a-avatar> -->

          <a-dropdown>
            <a-avatar
              style="background-color: #87d068"
              :style="{ margin: '0px' }"
              class="ant-dropdown-link"
              v-if="!isHiddenLoginPass"
              @click.prevent
            >
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>
            <template #overlay>
              <a-menu style="width: 150px" @click="onClickLogout">
                <a-menu-item key="1">Logout</a-menu-item>
                <!-- <a-menu-item key="2">2nd menu item</a-menu-item>
                <a-menu-item key="3">3rd menu item</a-menu-item> -->
              </a-menu>
            </template>
          </a-dropdown>

          <a-avatar
            v-if="!isHiddenLogin"
            @click="modal2Visible = true"
            style="background-color: #87d068"
            :style="{ margin: '0px' }"
          >
            <template #icon>
              <LockOutlined @click="modal2Visible = true" />
            </template>
          </a-avatar>
        </a-col>
      </a-row>
      <template #extra><a href="#">more</a></template>
    </a-layout-header>
  </div>

  <!-- Model Login -->
  <div id="components-modal-demo-position">
    <a-modal
      v-model:visible="modal2Visible"
      title="Login"
      centered
      @ok="modal2Visible = false"
    >
      <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <p>Username</p>
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input
            style="border-radius: 15px"
            v-model:value="formState.username"
          >
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <p>Password</p>
        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password
            style="border-radius: 15px"
            v-model:value="formState.password"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button
            @click="Login"
            style="border-radius: 15px"
            :disabled="disabled"
            type="primary"
            html-type="submit"
            class="login-form-button"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import {
  UserOutlined,
  SearchOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import store from "@/store";

export default defineComponent({
  components: {
    UserOutlined,
    SearchOutlined,
    LockOutlined,
    UnlockOutlined,
  },
  props: ["collapsed"],
  setup(props, { emit }) {
    // const isHiddenLoginPass = ref(true);
    // const isHiddenLogin = ref(false);
    const router = useRouter();
    const isHiddenLoginPass = computed(() => store.state.isHiddenLoginPass);
    const isHiddenLogin = computed(() => store.state.isHiddenLogin);
    const toggleCollapse = () => {
      emit("update:collapsed", !props.collapsed);
    };

    const modal2Visible = ref(false);

    const setModal1Visible = (visible) => {
      modal1Visible.value = visible;
    };

    const formState = reactive({
      username: "",
      password: "",
      remember: true,
    });

    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });

    const Login = () => {
      store.dispatch("actionisHiddenLoginPass", false);
      store.dispatch("actionisHiddenLogin", true);
      // isHiddenLoginPass.value = false;
      // isHiddenLogin.value = true;
    };

    const onClickLogout = ({ key }) => {
      // console.log(`Click on item ${key}`);
      router.push({ name: "home" });
      store.dispatch("actionisHiddenMenuHome", false);
      store.dispatch("actionisHiddenBroker", true);
      store.dispatch("actionisHiddenLoginPass", true);
      store.dispatch("actionisHiddenLogin", false);
    };

    return {
      toggleCollapse,
      modal2Visible,
      setModal1Visible,
      formState,
      onFinish,
      onFinishFailed,
      disabled,
      isHiddenLoginPass,
      isHiddenLogin,
      Login,
      onClickLogout
    };
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
/* #components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#components-form-demo-normal-login .login-form-forgot {
  margin-bottom: 24px;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
} */
</style>
