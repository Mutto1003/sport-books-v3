<template>
  <a-layout style="min-height: 100vh">
    <!-- Menu -->
    <Menu v-model:collapsed="collapsed" v-model:selectedKeys="selectedKeys" />
    <a-layout>
      <!-- Header -->
      <Header v-model:collapsed="collapsed" />
      <!-- Content -->
      <Content />
      <!-- Footer -->
      <Footer />
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import Menu from "@/components/core/Menu.vue";
import Header from "@/components/core/Header.vue";
import Content from "@/components/core/Content.vue";
import Footer from "@/components/core/Footer.vue";

export default defineComponent({
  components: {
    Menu,
    Header,
    Content,
    Footer,
  },

  setup() {
    return {
      selectedKeys: ref(["1"]),
      collapsed: ref(false),
    };
  },
});
</script>
<style scoped>
@import "@/css/styles.css";
</style>
