<template>
  <a-card
    style="background-color: #2dcc70; text-align: center; border-radius: 8px"
    title="แนะนำ"
  >
    <a-card-grid
      style="width: 100%; background-color: #003147"
      :hoverable="false"
    >
      <a-list
        class="demo-loadmore-list"
        style="width: 100%; text-align: start"
        :loading="initLoading"
        item-layout="horizontal"
        :data-source="list"
      >
        <!-- <template #loadMore>
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
        </template> -->
        <template #renderItem="{ item }">
          <a-list-item>
            <!-- <template #actions>
              <a key="list-loadmore-edit">edit</a>
              <a key="list-loadmore-more">more</a>
            </template> -->
            <a-skeleton avatar :title="false" :loading="!!item.loading" active>
              <a-list-item-meta>
                <template #title>
                  <a style="color: #ffff" href="https://www.antdv.com/">{{
                    item.name
                  }}</a>
                </template>
                <template #avatar>
                  <!-- <a style="color: #ffff; margin-right: 1em;">{{ "100" }}</a> -->
                  <a-avatar :src="item.image" />
                </template>
              </a-list-item-meta>
              <!-- <div>content</div> -->
            </a-skeleton>
          </a-list-item>
        </template>
      </a-list>
    </a-card-grid>
  </a-card>
</template>

<script>
import { FieldTimeOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, watch, onMounted, nextTick } from "vue";
import axios from "axios";
// const count = 6;
const providers = `http://49.0.193.193:8021/api/v1/feed/live_score/provider/list`;
export default defineComponent({
  components: {
    FieldTimeOutlined,
  },
  setup() {
    // const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const activeKey = ref(["1"]);
    const initLoading = ref(true);
    const loading = ref(false);
    const data = ref([]);
    const list = ref([]);

    onMounted(() => {
      axios.get(providers).then((res) => {
        initLoading.value = false;
        data.value = res.data.data.providers;
        list.value = res.data.data.providers;
      });

      // console.log(data)
    });

    watch(activeKey, (val) => {
      // console.log(val);
    });

    return {
      // text,
      activeKey,
      loading,
      initLoading,
      data,
      list,
    };
  },
});
</script>

<style scoped>
/* @import "@/css/styles.css"; */
.demo-loadmore-list {
  min-height: 300px;
  text-decoration: none;
  /* background-color: blue; */
}
.ant-list-split .ant-list-item:last-child {
  border-bottom: none;
}

.ant-list-split .ant-list-item {
  border-bottom: none;
}
</style>
