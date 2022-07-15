<template>
  <div class="menu-card" id="components-grid-demo-flex">
    <a-row justify="space-around">
      <a-col :span="3"
        ><a-button type="primary" value="small" danger>LIVE</a-button></a-col
      >
      <a-col :span="3"><a-button type="text" danger>WEB</a-button></a-col>
      <a-col :span="3"><a-button type="text" danger>THU</a-button></a-col>
      <a-col :span="3"><a-button type="text" danger>TODAY</a-button></a-col>
      <a-col :span="3"><a-button type="text" danger>SAT</a-button></a-col>
      <a-col :span="3"><a-button type="text" danger>SUN</a-button></a-col>
      <a-col
        :span="3"
        :style="{
          marginTop: '5px',
        }"
        ><CalendarOutlined
      /></a-col>
    </a-row>
  </div>

  <a-list
    class="demo-loadmore-list"
    :loading="initLoading"
    item-layout="horizontal"
    :data-source="list"
  >
    <template #loadMore>
      <div
        v-if="!initLoading && !loading"
        :style="{
          textAlign: 'center',
          marginTop: '12px',
          height: '32px',
          lineHeight: '32px',
        }"
      >
        <a-button @click="onLoadMore">loading more</a-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item class="live-card">
        <template #actions>
          <a key="list-loadmore-edit">edit</a>
          <!-- <a key="list-loadmore-more">more</a> -->
        </template>
        <a-skeleton avatar :title="false" :loading="!!item.loading" active>
          <a-list-item-meta>
            <template #title>
              <a href="https://www.antdv.com/">{{ "แมนยู VS ลิวเวอร์พูล" }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.picture.large" />
            </template>
          </a-list-item-meta>
          <div>
            <EnvironmentOutlined /> London <FieldTimeOutlined /> 5:30 PM
            <a-button @click="$router.push('/brokerbet')" type="primary" value="small" danger>BET</a-button>
          </div>
        </a-skeleton>
      </a-list-item>
    </template>
  </a-list>
</template>
<script>
import {
  CalendarOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, onMounted, ref, nextTick } from "vue";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
export default defineComponent({
  components: {
    CalendarOutlined,
    EnvironmentOutlined,
    FieldTimeOutlined,
  },
  setup() {
    const initLoading = ref(true);
    const loading = ref(false);
    const data = ref([]);
    const list = ref([]);
    onMounted(() => {
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
          initLoading.value = false;
          data.value = res.results;
          list.value = res.results;
        });
    });

    const onLoadMore = () => {
      loading.value = true;
      list.value = data.value.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      );
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
          const newData = data.value.concat(res.results);
          loading.value = false;
          data.value = newData;
          list.value = newData;
          nextTick(() => {
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event("resize"));
          });
        });
    };

    return {
      loading,
      initLoading,
      data,
      list,
      onLoadMore,
    };
  },
});
</script>
<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}

#components-grid-demo-flex :deep(.ant-row) {
  background: rgba(128, 128, 128, 0.08);
}
</style>
