<template>
  <!-- <div>{{ $store.getters.getleagueId }}</div> -->
  <div class="menu-card" id="components-grid-demo-flex">
    <a-row style="display: flex; align-items: center" justify="space-around">
      <a-col :span="3"
        ><a-button type="primary" size="small" danger>LIVE</a-button></a-col
      >
      <a-col :span="3"
        ><a-button type="text" style="color: #ffff">WEB</a-button></a-col
      >
      <a-col :span="3"
        ><a-button type="text" style="color: #ffff">THU</a-button></a-col
      >
      <a-col :span="3"
        ><a-button type="text" style="color: #ffff">TODAY</a-button></a-col
      >
      <a-col :span="3"
        ><a-button type="text" style="color: #ffff">SAT</a-button></a-col
      >
      <a-col :span="3"
        ><a-button type="text" style="color: #ffff">SUN</a-button></a-col
      >
      <a-col :span="3" style="margin-right: 2em">
        <a-date-picker size="small" v-model:value="value1" />
      </a-col>
    </a-row>
  </div>

  <div style="margin-top: 2em; display: flex; align-items: center">
    <h1>{{ leagueName }}</h1>
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
          <div style="width: 60px">
            <a style="color: #ffff; margin: 1em"
              >{{ item.live_score.Scoreboard.Results[0].Position }} -
              {{ item.live_score.Scoreboard.Results[1].Position }}</a
            >
            <!-- item.live_score.Scoreboard.Results[1].Value -->
          </div>
          <div>
            <a style="color: #ffff; margin: 1em"
              ><FieldTimeOutlined /> {{ setTime(item.fixture.StartDate) }}</a
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
import { useStore } from "vuex";
import { defineComponent, onMounted, ref, computed, onUpdated } from "vue";
import moment from 'moment';
import store from "@/store";
// const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const livescoreDataUrl = `http://49.0.193.193:8021/api/v1/feed/live_score/list`;
// const livescoreLeague = `http://49.0.193.193:8021/api/v1/feed/live_score/list?league_id=${leagueId}`;
export default defineComponent({
  components: {
    CalendarOutlined,
    EnvironmentOutlined,
    FieldTimeOutlined,
  },
  setup() {
    const store = useStore();
    const initLoading = ref(true);
    const loading = ref(false);
    const data = ref([]);
    const list = ref([]);
    const dateTime = ref([]);
    // let leagueIdT = store.state.leagueId;

    const leagueId = computed(() => store.state.leagueId);
    const leagueName = computed(() => store.state.leagueName);

    onMounted(() => {
      axios.get(livescoreDataUrl).then((res) => {
        initLoading.value = false;
        data.value = res.data.data.live_scores;
        list.value = res.data.data.live_scores;
      });
    });

    onUpdated(() => {
      // console.log(leagueIdT);
      let leagueNameT = store.state.leagueName;
      console.log(leagueNameT);
      if (store.state.leagueId != 0 && store.state.leagueId != null) {
        onFiterleague();
      } else if (store.state.leagueId == null) {
        onFiterleagueAll();
      }
    });

    const onFiterleague = () => {
      axios
        .get(
          `http://49.0.193.193:8021/api/v1/feed/live_score/list?league_id=${store.state.leagueId}`
        )
        .then((res) => {
          initLoading.value = false;
          data.value = res.data.data.live_scores;
          list.value = res.data.data.live_scores;
        });
      store.dispatch("actionleagueId", 0);
    };

    const onFiterleagueAll = () => {
      axios.get(livescoreDataUrl).then((res) => {
        initLoading.value = false;
        data.value = res.data.data.live_scores;
        list.value = res.data.data.live_scores;
      });
      store.dispatch("actionleagueId", 0);
    };

    const setTime = (date) => {
      let today = date
      // console.log(today.toLocaleString("th-TH", { timeZone: "UTC" }));
      console.log(today);
      return moment(today).zone("+14:00").format("HH:mm a");;
    };

    return {
      loading,
      initLoading,
      data,
      list,
      leagueId,
      leagueName,
      onFiterleague,
      onFiterleagueAll,
      setTime,
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
