<template>
  <a-card
    style="background-color: #2dcc70; border-radius: 8px; text-align: center"
    title="ลีค"
  >
    <a-card-grid style="width: 100%" :hoverable="false">
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
          <a-list-item>
            <!-- <template #actions>
              <a key="list-loadmore-edit">edit</a>
              <a key="list-loadmore-more">more</a>
            </template> -->
            <a-skeleton avatar :title="false" :loading="!!item.loading" active>
              <a-list-item-meta>
                <template #title>
                  <a href="https://www.antdv.com/">{{ item.name.last }}</a>
                </template>
                <template #avatar>
                  <a-avatar :src="item.picture.large" />
                </template>
              </a-list-item-meta>
              <!-- <div>content</div> -->
            </a-skeleton>
          </a-list-item>
        </template>
      </a-list>
    </a-card-grid>
  </a-card>

  <!-- <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel style="background-color: #2b2b3d" key="1" header="ลีค">
      
    </a-collapse-panel>
  </a-collapse> -->
</template>

<script>
import { FieldTimeOutlined, SearchOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, watch, onMounted, nextTick } from "vue";
const count = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const league_name = "";
const leagueUrl = `http://49.0.193.193:8021/api/v1/feed/live_score/list`;
export default defineComponent({
  components: {
    FieldTimeOutlined,
    SearchOutlined,
  },
  setup() {
    // const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const activeKey = ref(["1"]);
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

    watch(activeKey, (val) => {
      console.log(val);
    });

    return {
      // text,
      activeKey,
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
/* @import "@/css/styles.css"; */
.demo-loadmore-list {
  min-height: 350px;
}
.ant-list-split .ant-list-item:last-child {
  border-bottom: none;
}

.ant-list-split .ant-list-item {
  border-bottom: none;
}

</style>
