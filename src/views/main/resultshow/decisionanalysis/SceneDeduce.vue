<template>
  <div>
    <a-card :bordered="true" hoverable title="计算信息">
      <a-card type="inner" title>
        <detail-list title="概要信息" size="small">
          <detail-list-item term="生成人">王超磊</detail-list-item>
          <detail-list-item term="生成时间">2020/06/18</detail-list-item>
          <detail-list-item term="备注">无</detail-list-item>
        </detail-list>
      </a-card>
      <div style="margin: 16px 0"></div>
      <a-card type="inner" title>
        <detail-list title="计算信息" size="small">
          <detail-list-item term="河道输冰能力">35立方/秒</detail-list-item>
          <detail-list-item term="槽蓄水增量">12</detail-list-item>
          <detail-list-item term="库容">1.21</detail-list-item>
          <detail-list-item term="已分洪">1.2</detail-list-item>
          <detail-list-item term="可用">0.01</detail-list-item>
        </detail-list>
      </a-card>
    </a-card>
     <a-row :gutter="24" style="margin-top:24px;">
      <a-col :span="24">
        <a-card
          class="antd-pro-pages-dashboard-analysis-salesCard"
          :bordered="false"
          title="计算结果"
          :style="{ height: '100%' }"
        >
          <div slot="extra" style="height: inherit;">
            <div>观察</div>
          </div>
          <!-- <h4>开河数据分析</h4> -->
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
import DetailList from '@/components/tools/DetailList'
import { PageView } from '@/layouts'
import { mixinDevice } from '@/utils/mixin'
import moment from 'moment'
import { Bar, RankList } from '@/components'
import G2 from '@antv/g2'
const DetailListItem = DetailList.Item
//折线图
const brokenLine = [
  { item: '河道输冰能力', el: '计算一', count: 32.2 },
  { item: '槽蓄水增量', el: '计算一', count: 21 },
  { item: '库容', el: '计算一', count: 17 },
  { item: '已分洪', el: '计算一', count: 13 },
  { item: '可用', el: '计算一', count: 13 },
  { item: '月份', el: '计算一', count: 9 },
  { item: '其他', el: '计算一', count: 7.8 },
  { item: '流速', el: '计算二', count: 38.2 },
  { item: '流凌密度', el: '计算二', count: 11 },
  { item: '冰厚', el: '计算二', count: 19 },
  { item: '水温', el: '计算二', count: 23 },
  { item: '水流', el: '计算二', count: 33 },
  { item: '月份', el: '计算二', count: 9 },
  { item: '其他', el: '计算二', count: 12.8 },
  { item: '流速', el: '计算三', count: 28 },
  { item: '流凌密度', el: '计算三', count: 11 },
  { item: '冰厚', el: '计算三', count: 27 },
  { item: '水温', el: '计算三', count: 15 },
  { item: '水流', el: '计算三', count: 13.5 },
  { item: '月份', el: '计算三', count: 9 },
  { item: '其他', el: '计算三', count: 5.8 }
]
//百分比图标
const DataSet = require('@antv/data-set')
export default {
  name: 'SceneDeduce',
  components: {
    PageView,
    DetailList,
    DetailListItem
  },
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
  data() {
    return {
      description:
        '通过集成一维/二维河冰动力学模型，对头道拐-喇嘛湾河段的河冰生消发展过程、河道输冰能力、槽蓄水增量等进行计算和模拟。计算结果通过二维冰水动力学模型与三维实景河道模型的自适应耦合技术在虚拟现实环境中对凌汛过程及凌灾情景进行推演。'
    }
  }
}
</script>