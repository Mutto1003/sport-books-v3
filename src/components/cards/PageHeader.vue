<template>
  <a-page-header :breadcrumb="{ routes }" />
</template>
<script>
import { defineComponent } from "vue";
const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu",
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu",
  },
  // {
  //   path: "second",
  //   breadcrumbName: "Third-level Menu",
  // },
];
export default defineComponent({
  setup() {
    return {
      routes,
    };
  },
});
</script>
