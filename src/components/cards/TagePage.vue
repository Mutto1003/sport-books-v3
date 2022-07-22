<template>
  <!-- Search -->
  <div class="components-input-demo-presuffix">
    <a-input
      style="border-radius: 30px; margin-bottom: 1em"
      v-model="searchQuery"
      placeholder="ค้นหา"
    >
    </a-input>
  </div>

  <div class="ui icon input" style="width: 100%">
    <input
      style="border-radius: 30px; margin-bottom: 1em"
      type="text"
      placeholder="Search..."
      v-model="searchQuery"
    />
    <i class="search icon"></i>
  </div>
  <div class="ui cards" style="margin: 10px">
    <div
      class="card ui fluid"
      v-for="item in searchedcountry"
      :key="item.location_id"
      style="margin: 0"
    >
      <div class="content">
        <div class="header">{{ item.name }}</div>
        <!-- <div class="meta">{{ product.upc }} | {{ product.weight }} Kg |</div> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const countryUrl = `http://49.0.193.193:8021/api/v1/feed/live_score/location/list`;
import { defineComponent, onMounted, reactive, computed, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref("");
    const searchQuery = ref("");
    const initLoading = ref(true);
    const country = ref([]);
    const list = ref([]);

    onMounted(() => {
      axios.get(countryUrl).then((res) => {
        initLoading.value = false;
        country.value = res.data.data.locations;
        list.value = res.data.data.locations;
      });
      console.log(country);
    });

    const searchedcountry = computed(() => {
      return country.value.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    });

    const onSearch = computed(() => {
      return country.value.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    });

    // const onSearch = searchValue => {
    //   console.log('use value', searchValue);
    //   console.log('or use this.value', value.value);
    // };

    return {
      value,
      country,
      searchedcountry,
      searchQuery,
      onSearch,
      // data,
    };
  },
});
</script>
