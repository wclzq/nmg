<template>
  <div :hidden="visible">
    <div class="button">
      <span>防凌调度水库蓄水情况</span>
      <a-icon @click="rightTopClose" class="close" type="fullscreen-exit" />
    </div>
    <div style="width:1000px;text-align:right;background: rgb(15, 55, 95);color:white;font-size:16px;line-height:28px;height:28px;padding-right:10px;">2020/9/24</div>
    <div id="tablexs">
      <a-table :columns="columns" :data-source="data" bordered :pagination="false">
      
      </a-table>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
const columns = [
  {
    title: '站名/分洪闸名',
    dataIndex: 'name'
  },
  {
    title: '海勃湾',
    dataIndex: 'hbw',
  },
  {
    title: '乌兰布和分洪闸',
    dataIndex: 'wlbhfhz',
  },
  {
    title: '巴彦高勒',
    dataIndex: 'bygl',
  },
  {
    title: '三湖河口',
    dataIndex: 'shhk'
  },
  {
    title: '杭锦淖尔分洪闸',
    dataIndex: 'hjzefhz',
  },
  {
    title: '蒲圪卜分洪闸',
    dataIndex: 'pgbfhz',
  },
  {
    title: '昭君坟分洪闸',
    dataIndex: 'zjffhz',
  },
  {
    title: '小白河分洪闸',
    dataIndex: 'xbhfhz'
  },
  {
    title: '包头',
    dataIndex: 'bt',
  },
  {
    title: '头道拐',
    dataIndex: 'tdg',
  },
  {
    title: '万家寨',
    dataIndex: 'wjz',
  }
]

const data = [
  {
    key: '海勃湾',
    name: '海勃湾',
    hbw:0
  },
  {
    key: '2',
    name: '乌兰布和分洪闸',
    hbw:68,
    wlbhfhz:0
  },
  {
    key: '3',
    name: '巴彦高勒',
    hbw:87,
    wlbhfhz:19,
    bygl:0
  },
  {
    key: '4',
    name: '三湖河口',
    hbw:308,
    wlbhfhz:240,
    bygl:221,
    shhk:0
  },
  {
    key: '5',
    name: '杭锦淖尔分洪闸',
    hbw:328,
    wlbhfhz:260,
    bygl:241,
    shhk:20,
    hjzefhz:0
  },
  {
    key: '6',
    name: '蒲圪卜分洪闸',
    hbw:308,
    wlbhfhz:240,
    bygl:221,
    shhk:0,
    hjzefhz:0,
    pgbfhz:0
  },
  {
    key: '7',
    name: '昭君坟分洪闸',
    hbw:308,
    wlbhfhz:240,
    bygl:221,
    shhk:0,
    pgbfhz:0,
    hjzefhz:0,
    zjffhz:0
  },
  {
    key: '11',
    name: '小白河分洪闸',
    hbw:308,
    wlbhfhz:240,
    bygl:221,
    shhk:0,
    pgbfhz:0,
    hjzefhz:0,
    zjffhz:0,
    xbhfhz:0
  },
  {
    key: '8',
    name: '包头',
    hbw:308,
    wlbhfhz:240,
    bygl:221,
    shhk:0,
    pgbfhz:0,
    hjzefhz:0,
    zjffhz:0,
    xbhfhz:0,
    bt:0
  },
  {
    key: '9',
    name: '头道拐',
    hbw:308,
    wlbhfhz:240,
    bygl:221,
    shhk:0,
    pgbfhz:0,
    hjzefhz:0,
    zjffhz:0,
    xbhfhz:0,
    bt:0,
    tdg:0
  },
  {
    key: '10',
    name: '万家寨',
    hbw:308,
    wlbhfhz:240,
    bygl:221,
    shhk:0,
    pgbfhz:0,
    hjzefhz:0,
    zjffhz:0,
    xbhfhz:0,
    bt:0,
    tdg:0,
    wjz:0
  },
  
]
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
#tablexs {
  width: 1000px;
  background: rgb(15, 55, 95);
  padding:10px;
}
.button {
  width: 1000px;
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
#tablexs >>> .ant-table-tbody > tr {
    background: #000;
}
#tablexs >>> .ant-table-bordered .ant-table-tbody > tr > td{
    color: rgb(48, 223, 204) !important;

}
#tablexs >>> .ant-table-thead > tr > th{
    background: #000;
    color: rgb(48, 223, 204) !important;
}
#tablexs >>> .ant-table-thead > tr > th, .ant-table-tbody > tr > td{
    padding: 10px !important;
}
</style>