<template>
  <div :hidden="visible">
    <div class="button">
      <span>头道拐水文站</span>
      <a-icon @click="rightTopClose" class="close" type="fullscreen-exit" />
    </div>
    <div id="tablefl">
      <a-table :columns="columns" :data-source="data" bordered :pagination="false">
      
      </a-table>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
const columns = [
  {
    title: '8时流量：987.46m',
    dataIndex: 'name'
  },
]

const data = [
  {
    key: '龙羊峡',
    name: '流量：724mm³/s'
  }
];
export default {
  data() {
    return {
      visible: false,
      columns,
      data
    }
  },
  mounted() {},
  methods: {
    open() {
      this.visible = false
    },
    handleOk() {},

    rightTopClose() {
      this.visible = true
    },
  },
}
</script>
<style lang="less" scoped>
#tablefl {
  width: 200px;
  background: rgb(15, 55, 95);
  padding:10px;
}
.button {
  width: 200px;
  height: 50px;
  background: rgb(15, 55, 95);
  border-bottom: 1px solid rgb(48, 223, 204);
  line-height: 50px;
  font-size: 26px;
  color: #30dfcc;
  span {
    font-size: 16px;
    margin-left: 10px;
    color: rgb(255, 255, 255);
  }
}
.close {
  float: right;
  margin-right: 12px;
  margin-top: 12px;
}
.close:hover {
  color: rgb(255, 255, 255);
}
</style>
<style  scoped>
#tablefl >>> .ant-table-tbody > tr {
    background: #000;
}
#tablefl >>> .ant-table-bordered .ant-table-tbody > tr > td{
    color: rgb(48, 223, 204) !important;

}
#tablefl >>> .ant-table-thead > tr > th{
    background: #000;
    color: rgb(48, 223, 204) !important;
}
</style>