<template>
  <div class="menu-card" id="components-grid-demo-flex">
    <a-row style="display: flex; align-items: center;" justify="space-around">
      <a-col :span="3"
        ><a-button  type="primary" size="small" danger>LIVE</a-button></a-col
      >      
      <a-col :span="3"><a-button type="text" style="color: #ffff;">WEB</a-button></a-col>
      <a-col :span="3"><a-button type="text" style="color: #ffff;">THU</a-button></a-col>
      <a-col :span="3"><a-button type="text" style="color: #ffff;">TODAY</a-button></a-col>
      <a-col :span="3"><a-button type="text" style="color: #ffff;">SAT</a-button></a-col>
      <a-col :span="3"><a-button type="text" style="color: #ffff;">SUN</a-button></a-col>
      <a-col
        :span="3"
        style="margin-right: 2em;"
      >
        <a-date-picker size="small" v-model:value="value1" />
      </a-col>
    </a-row>
  </div>

  <a-list
    class="demo-loadmore-list"
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
      <a-list-item class="live-card">
        <template #actions>
          <a-button
            style="margin-right: 1em"
            @click="$router.push('/brokerbet')"
            type="primary"
            size="small"
            danger
            >BET</a-button
          >
          <a style="color: #ffff; margin: 1em" key="list-loadmore-edit">FT</a>
          <!-- <a key="list-loadmore-more">more</a> -->
        </template>
        <a-skeleton avatar :title="false" :loading="!!item.loading" active>
          <a-list-item-meta>
            <!-- <template #title>
              <a style="color: #ffff"
                >{{ item.fixture.Participants[0].Name }} VS
                {{ item.fixture.Participants[1].Name }}
              </a>              
            </template> -->
            <template #avatar>
              <a-avatar style="margin-left: 1em" :src="item.league_name" />
              <a-avatar :src="item.league_name" />
              <a style="color: #ffff; margin: 1em"
                >{{ item.fixture.Participants[0].Name }} VS
                {{ item.fixture.Participants[1].Name }}
              </a>
              <!-- <p>{{ item.sport_id }}</p> -->
            </template>
          </a-list-item-meta>
          <div style="width: 100px">
            <a style="color: #ffff; margin: 1em"
              >{{ item.live_score.Scoreboard.Results[0].Position }} -
              {{ item.live_score.Scoreboard.Results[1].Position }}</a
            >
          </div>
          <div>
            <a style="color: #ffff; margin: 1em"
              ><FieldTimeOutlined /> 5:30 PM</a
            >
          </div>
          <div style="width: 150px">
            <a style="color: #ffff; width: 150px; margin: 1em"
              ><EnvironmentOutlined /> {{ item.fixture.Location.Name }}</a
            >
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
import axios from "axios";
import { defineComponent, onMounted, ref, nextTick } from "vue";
const count = 4;
// const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const livescoreDataUrl = `http://49.0.193.193:8021/api/v1/feed/live_score/list`;
const livescoreLeague = `http://49.0.193.193:8021/api/v1/feed/live_score/list?league_id=8363`;
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
    const team = ref([]);

    // onMounted(() => {
    //   fetch(livescoreDataUrl)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       initLoading.value = false;
    //       data.value = res.data.live_scores;
    //       list.value = res.data.live_scores;
    //     });
    //   console.log(data_score);
    // });
    

    onMounted(() => {
      axios.get(livescoreDataUrl).then((res) => {
        initLoading.value = false;
        data.value = res.data.data.live_scores;
        list.value = res.data.data.live_scores;
        // let itemTeam = [];
        // for (let i = 0; i < data.value.length; i++) {
        //   console.log(data.value[i].fixture.Participants);
        //   itemTeam.push(data.value[i].fixture.Participants);
        //   // console.log(JSON.stringify(this.Team));

        // }
      });
      console.log(data);
    });

    return {
      loading,
      initLoading,
      data,
      list,
      // onLoadMore,
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
