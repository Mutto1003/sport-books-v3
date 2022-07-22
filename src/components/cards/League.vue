<template>
  <a-card
    style="background-color: #2dcc70; border-radius: 8px; text-align: center"    
    title="ลีค"
  >
    <a-card-grid style="width: 100%" :hoverable="false">
      <div class="components-input-demo-presuffix">
        <a-input
          style="border-radius: 30px; margin-bottom: 1em"
          v-model="searchQuery"         
          placeholder="ค้นหา"
        >
          <template #suffix>
            <SearchOutlined style="color: rgba(0, 0, 0, 0.45)" />
          </template>
        </a-input>        
      </div>
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
            <a-skeleton
              style="margin-top: 1em"
              avatar
              :title="false"
              :loading="!!item.loading"
              active
            >
              <a-list-item-meta @click="leagueList">
                <template #title>
                  <a>{{ item.name }}</a>
                </template>
                <template #avatar>
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

  <!-- <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel style="background-color: #2b2b3d" key="1" header="ลีค">
      
    </a-collapse-panel>
  </a-collapse> -->
</template>

<script>
import { FieldTimeOutlined, SearchOutlined } from "@ant-design/icons-vue";
import axios from "axios";
import { defineComponent, ref, watch, onMounted, reactive, computed, nextTick } from "vue";
const count = 10;
// const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const leagueUrl = `http://49.0.193.193:8021/api/v1/feed/live_score/league/list`;
const countryUrl = `http://49.0.193.193:8021/api/v1/feed/live_score/location/list`;
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
    const data = reactive([]);
    const list = ref([]);   
    const searchQuery = ref("");

    const handleChange = (keys, direction, moveKeys) => {
      console.log(keys, direction, moveKeys);      
      // console.log(data)
    };

    const handleSearch = (value) => {
      console.log("1111");
    };

    // const filterOption = (inputValue, option) => {
    //   return option.name.indexOf(inputValue) > -1;
    // };   

    const leagueList = () => {
      axios.get(leagueUrl).then((res) => {
        initLoading.value = false;
        data.value = res.data.data.leagues;
        list.value = res.data.data.leagues;
      });
    };

    onMounted(() => {
      axios.get(countryUrl).then((res) => {
        initLoading.value = false;
        data.value = res.data.data.locations;
        list.value = res.data.data.locations;
        // let itemTeam = [];
        // for (let i = 0; i < data.value.length; i++) {
        //   console.log(data.value[i].fixture.Participants);
        //   itemTeam.push(data.value[i].fixture.Participants);
        //   // console.log(JSON.stringify(this.Team));

        // }
      });
      // console.log(data);
    });

    const searchedData = computed(() => {
      return products.filter((product) => {
        return (
          product.city
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    });
    // onMounted(() => {
    //   fetch(fakeDataUrl)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       initLoading.value = false;
    //       data.value = res.results;
    //       list.value = res.results;
    //     });
    // });

    // const onLoadMore = () => {
    //   loading.value = true;
    //   list.value = data.value.concat(
    //     [...new Array(count)].map(() => ({
    //       loading: true,
    //       name: {},
    //       picture: {},
    //     }))
    //   );
    //   fetch(fakeDataUrl)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       const newData = data.value.concat(res.results);
    //       loading.value = false;
    //       data.value = newData;
    //       list.value = newData;
    //       nextTick(() => {
    //         // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //         // In real scene, you can using public method of react-virtualized:
    //         // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
    //         window.dispatchEvent(new Event("resize"));
    //       });
    //     });
    // };

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
      handleChange,
      handleSearch,
      // filterOption,
      leagueList, 
      searchQuery, 
      searchedData   
      // onLoadMore,
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
