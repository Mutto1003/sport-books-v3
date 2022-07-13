<template>
  <div style="background-color: #ffff">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card hoverable style="width: 300px">
          <template #cover>
            <div id="components-grid-demo-flex">
              <a-row justify="center">
                <a-col style="margin: auto;" >2</a-col>
                <a-col style="margin: auto;" 
                  ><img
                    style="width: 80px; padding: 5px"
                    alt="example"
                    src="@/assets/red-card.png"
                /></a-col>
                <a-col style="margin: auto;" >0</a-col>
              </a-row>
            </div>
          </template>
          <template #actions>
            <p>ทีมเหย้า</p>
            <p>ทีมเยือน</p>             
          </template>
          <a-card-meta style="text-align: center" title="ใบแดง"> </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable style="width: 300px">
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
            <p class=".text-dark">ทีมเหย้า</p>
            <p>ทีมเยือน</p>            
          </template>
          <a-card-meta style="text-align: center" title="ผู้ที่ทำประตู">
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable style="width: 300px">
          <template #cover>
            <div id="components-grid-demo-flex">
              <a-row justify="center">
                <a-col style="margin: auto;" >1</a-col>
                <a-col style="margin: auto;" 
                  ><img
                    style="width: 80px; padding: 5px"
                    alt="example"
                    src="@/assets/yellow-card.png"
                /></a-col>
                <a-col style="margin: auto;" >1</a-col>
              </a-row>
            </div>
          </template>
          <template #actions>
            <p>ทีมเหย้า</p>
            <p>ทีมเยือน</p>       
          </template>
          <a-card-meta style="text-align: center" title="ใบเหลือง">
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
});
</script>
