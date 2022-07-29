<template>
  <a-list :grid="{ gutter: 16, column: 5 }" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card hoverable style="width: 240px;" @click="onClickSportBet">
          <template #cover>
            <img
              alt="example"
              :src="item.image"
              style="height: 240px;"
            />
          </template>
          <a-card-meta :title="item.name">
            <!-- <template #description>www.instagram.com</template> -->
          </a-card-meta>
        </a-card>        
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import store from "@/store";

const providers = `http://49.0.193.193:8021/api/v1/feed/live_score/provider/list`;

export default defineComponent({
  setup() {
    const router = useRouter();
    const initLoading = ref(true);
    // const loading = ref(false);
    const data = ref([]);
    const list = ref([]);

    const onClickSportBet = () => {
      router.push({ name: "SportBet" });
      store.dispatch("actionisHiddenMenuHome", true);
      store.dispatch("actionisHiddenBroker", false);
    };

    onMounted(() => {
      axios.get(providers).then((res) => {
        initLoading.value = false;
        data.value = res.data.data.providers;
        list.value = res.data.data.providers;
      });
    });

    return { onClickSportBet, initLoading, data, list };
  },
});
</script>

<style scoped>
@import "@/css/styles.css";
</style>
