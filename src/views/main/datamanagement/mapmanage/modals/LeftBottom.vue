<template>
  <div :hidden="visible">
    <div class="button">
      <span>防凌调度水库蓄水情况</span>
      <a-icon @click="rightTopClose" class="close" type="fullscreen-exit" />
    </div>
    <div style="width:500px;text-align:right;background: rgb(15, 55, 95);color:white;font-size:16px;line-height:28px;height:28px;padding-right:10px;">2020/9/24</div>
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
    title: '数据/水库名称',
    dataIndex: 'name'
  },
  {
    title: '水位(米)',
    className: 'column-money',
    dataIndex: 'sw',
  },
  {
    title: '蓄量（亿立方米）',
    dataIndex: 'xl',
  },
  {
    title: '预留防凌库容（亿立方米）',
    dataIndex: 'kr',
  }
]

const data = [
  {
    key: '龙羊峡',
    name: '龙羊峡',
    sw: '2954.15',
    xl:'219.05',
    kr: '3.25',
  },
  {
    key: '2',
    name: '刘家峡',
    sw: '1734.21',
    xl:'39.22',
    kr: '0.17',
  },
  {
    key: '3',
    name: '海勃湾',
    sw: '1073.74',
    xl:'3.08',
    kr: '1.05',
  },
  {
    key: '4',
    name: '万家寨',
    sw: '964.86',
    xl:'2.51',
    kr: '3.16',
  },
];
export default {
  data() {
    return {
      visible: true,
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
  width: 500px;
  background: rgb(15, 55, 95);
  padding:10px;
}
.button {
  width: 500px;
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