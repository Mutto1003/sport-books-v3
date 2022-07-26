<template>
  <a-layout style="min-height: 100vh">
    <!-- Menu -->
    <Menu
      v-if="!isHiddenBroker"
      v-model:collapsed="collapsed"
      v-model:selectedKeys="selectedKeys"
    />
    <MenuHome
      v-if="!isHiddenMenuHome"
      v-model:collapsed="collapsed"
      v-model:selectedKeys="selectedKeys"
    />
    <a-layout>
      <!-- Header -->
      <Header v-if="!isHiddenBroker" v-model:collapsed="collapsed" />
      <HeaderHome v-if="!isHiddenMenuHome" v-model:collapsed="collapsed" />
      <!-- Content -->
      <Content />
      <!-- Footer -->
      <Footer />
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import Menu from "@/components/core/Menu.vue";
import MenuHome from "@/components/core/MenuHome.vue";
import Header from "@/components/core/Header.vue";
import HeaderHome from "@/components/core/HeaderHome.vue";
import Content from "@/components/core/Content.vue";
import Footer from "@/components/core/Footer.vue";
import store from "@/store";

export default defineComponent({
  components: {
    Menu,
    Header,
    Content,
    Footer,
    MenuHome,
    HeaderHome,
  },

  setup() {
    const isHiddenBroker = computed(() => store.state.isHiddenBroker);
    const isHiddenMenuHome = computed(() => store.state.isHiddenMenuHome);
        
    return {
      selectedKeys: ref(["1"]),
      collapsed: ref(true),      
      isHiddenMenuHome,
      isHiddenBroker,
    };
  },
});
</script>
<style scoped>
@import "@/css/styles.css";
</style>
