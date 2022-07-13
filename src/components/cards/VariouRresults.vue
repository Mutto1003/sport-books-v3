<template>
  <div style="background-color: #ffff">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card hoverable>
          <template #cover>
            <div id="components-grid-demo-flex">
              <a-row justify="center">
                <a-col style="margin: auto">2</a-col>
                <a-col style="margin: auto"
                  ><img
                    style="width: 80px; padding: 5px"
                    alt="example"
                    src="@/assets/red-card.png"
                /></a-col>
                <a-col style="margin: auto">0</a-col>
              </a-row>
            </div>
          </template>
          <template #actions>
            <p @click="showModal">ทีมเหย้า</p>
            <p @click="showModal">ทีมเยือน</p>
          </template>
          <a-card-meta style="text-align: center" title="ใบแดง"> </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable>
          <template #cover>
            <div id="components-grid-demo-flex">
              <a-row justify="space-around">
                <a-col style="margin: auto">1</a-col>
                <a-col style="margin: auto"
                  ><img
                    style="width: 80px; padding: 5px"
                    alt="example"
                    src="@/assets/score-card.png"
                /></a-col>
                <a-col style="margin: auto">1</a-col>
              </a-row>
            </div>
          </template>
          <template #actions>
            <p @click="showModal">ทีมเหย้า</p>
            <p @click="showModal">ทีมเยือน</p>
          </template>
          <a-card-meta style="text-align: center" title="ผู้ที่ทำประตู">
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable>
          <template #cover>
            <div id="components-grid-demo-flex">
              <a-row justify="center">
                <a-col style="margin: auto">1</a-col>
                <a-col style="margin: auto"
                  ><img
                    style="width: 80px; padding: 5px"
                    alt="example"
                    src="@/assets/yellow-card.png"
                /></a-col>
                <a-col style="margin: auto">1</a-col>
              </a-row>
            </div>
          </template>
          <template #actions>
            <p @click="showModal">ทีมเหย้า</p>
            <p @click="showModal">ทีมเยือน</p>
          </template>
          <a-card-meta style="text-align: center" title="ใบเหลือง">
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>

  <!-- model -->

  <div>
    <!-- <a-button type="primary" @click="showModal">Open Modal</a-button> -->
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script>
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import { Modal } from "ant-design-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
  setup() {
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };

    return {
      visible,
      showModal,
      handleOk,
    };
  },
});
</script>

<style scoped>
.ant-card-body {
  background: #e7e7ff;
  /* border: 1px solid #4CAF50; */
}
</style>
