
<template>
  <div class="main">
    <a-card :bordered="false" title="数据统计分析" :body-style="{padding: '0','margin-top':'20px'}">
      <div class="salesCard">
        <a-tabs
          default-active-key="1"
          size="large"
          :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}"
        >
          <div class="extra-wrapper" slot="tabBarExtraContent">
            <a-range-picker :style="{width: '256px'}" />
          </div>
          <a-tab-pane loading="true" tab="封河数据" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData" title="封河数据" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <rank-list title="封河数据" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="开河数据" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData2" title="开河数据" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <rank-list title="开河数据" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
    <a-row :gutter="24" style="margin-top:24px;">
      <a-col :span="12">
        <a-card
          class="antd-pro-pages-dashboard-analysis-salesCard"
          :bordered="false"
          title="开河数据分析"
          :style="{ height: '100%' }"
        >
          <div slot="extra" style="height: inherit;">
            <div class="analysis-salesTypeRadio">观察</div>
          </div>
          <h4>开河数据分析</h4>
          <div>
            <!-- style="width: calc(100% - 240px);" -->
            <div>
              <v-chart :force-fit="true" :height="405" :data="pieData" :scale="pieScale">
                <v-tooltip :showTitle="false" data-key="item*percent" />
                <v-axis />
                <!-- position="right" :offsetX="-140" -->
                <v-legend data-key="item" />
                <v-pie position="percent" color="item" :vStyle="pieStyle" />
                <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
              </v-chart>
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card
          class="antd-pro-pages-dashboard-analysis-salesCard"
          :bordered="false"
          title="封河开河对比"
          :style="{ height: '100%' }"
        >
          <div slot="extra" style="height: inherit;">
            <div>观察</div>
          </div>
          <h4>开河数据分析</h4>
          <div>
            <!-- style="width: calc(100% - 240px);" -->
            <div id="linechart"></div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mixinDevice } from '@/utils/mixin'
import moment from 'moment'
import { Bar, RankList } from '@/components'
import G2 from '@antv/g2'

const barData = []
const barData2 = []
for (let i = 0; i < 12; i += 1) {
  barData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200
  })
  barData2.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200
  })
}

const rankList = []
for (let i = 0; i < 7; i++) {
  rankList.push({
    name: '黄科院 ' + (i + 1) ,
    total: 1234.56 - i * 100
  })
}
//百分比图标
const DataSet = require('@antv/data-set')

const sourceData = [
  { item: '封河数据', count: 32.2 },
  { item: '流凌密度', count: 21 },
  { item: '冰厚', count: 17 },
  { item: '水温', count: 13 },
  { item: '冰温', count: 9 },
  { item: '其他', count: 7.8 }
]

const pieScale = [
  {
    dataKey: 'percent',
    min: 0,
    formatter: '.0%'
  }
]

const dv = new DataSet.View().source(sourceData)
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
})
const pieData = dv.rows
//折线图
const brokenLine = [
  { item: '流速', el: '开河时期', count: 32.2 },
  { item: '流凌密度', el: '开河时期', count: 21 },
  { item: '冰厚', el: '开河时期', count: 17 },
  { item: '水温', el: '开河时期', count: 13 },
  { item: '水流', el: '开河时期', count: 13 },
  { item: '月份', el: '开河时期', count: 9 },
  { item: '其他', el: '开河时期', count: 7.8 },
  { item: '流速', el: '凌汛时期', count: 38.2 },
  { item: '流凌密度', el: '凌汛时期', count: 11 },
  { item: '冰厚', el: '凌汛时期', count: 19 },
  { item: '水温', el: '凌汛时期', count: 23 },
  { item: '水流', el: '凌汛时期', count: 33 },
  { item: '月份', el: '凌汛时期', count: 9 },
  { item: '其他', el: '凌汛时期', count: 12.8 },
  { item: '流速', el: '封河时期', count: 28 },
  { item: '流凌密度', el: '封河时期', count: 11 },
  { item: '冰厚', el: '封河时期', count: 27 },
  { item: '水温', el: '封河时期', count: 15 },
  { item: '水流', el: '封河时期', count: 13.5 },
  { item: '月份', el: '封河时期', count: 9 },
  { item: '其他', el: '封河时期', count: 5.8 }
]

export default {
  name: 'ResUpload',
  components: {
    Bar,
    RankList
  },
  mixins: [mixinDevice],
  data() {
    return {
      barData,
      barData2,
      pieScale,
      pieData,
      description:'实现模型计算成果审核、上传',
      sourceData,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      rankList,
      brokenLine
    }
  },
  filters: {},
  mounted() {
    var ds = new DataSet() // 创建DataSet 对象
    var dv = ds.createView().source(brokenLine) // 创建数据实例 // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可

    var chart = new G2.Chart({
      container: 'linechart',
      forceFit: true,
      height: 405
    })
    chart.source(dv)
    chart.tooltip({
      crosshairs: {
        type: 'line'
      }
    })
    chart
      .line()
      .position('item*count')
      .color('el')
      .shape('smooth')
    chart
      .point()
      .position('item*count')
      .color('el')
      .size(4)
      .shape('circle')
      .style({
        stroke: '#fff',
        lineWidth: 1
      })
    chart.render()
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
p.tip {
  font-size: 14px;
  text-align: center;
}
.extra-wrapper {
  line-height: 55px;
  padding-right: 24px;

  .extra-item {
    display: inline-block;
    margin-right: 24px;

    a {
      margin-left: 24px;
    }
  }
}
.ant-tabs-bar {
  border-bottom: rgba(17, 7, 7, 0) 1px solid !important;
}
</style>
