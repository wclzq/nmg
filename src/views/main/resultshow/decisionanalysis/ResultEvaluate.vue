<template>
  <div>
    <div class="table-page-search-wrapper">
      <a-form layout="inline" :form="form" @submit="handleSubmit">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="日期">
              <a-date-picker
                style="width: 100%"
                placeholder="请输入日期"
                v-decorator="['date', { rules: [{ required: flag, message: 'warn' }] }]"
              />
            </a-form-item>
          </a-col>

          <a-col :md="8" :sm="24">
            <span
              class="table-page-search-submitButtons"
              :style="advanced && { float: 'right', overflow: 'hidden' } || {} "
            >
              <a-button type="primary" html-type="submit">查询</a-button>
              <a-button style="margin-left: 8px" @click="rest">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <!-- <a-card style="margin-top: 24px" v-if="icerunList.length==0">
         <a-empty />
    </a-card>-->
    <a-card :bordered="true" hoverable title="效果评价">
      <a-card type="inner" title="防洪效果评价">
        <detail-list title="详细数据" size="small">
          <detail-list-item term="控泄流量">550立方</detail-list-item>
          <detail-list-item term="下泄水温变化">-3</detail-list-item>
          <detail-list-item term="拦冰">600立方</detail-list-item>
          <detail-list-item term="排冰">365立方</detail-list-item>
        </detail-list>
      </a-card>
      <div style="margin: 16px 0"></div>
      <a-card type="inner" title="洪灾损失评价">
        <detail-list title="详细数据" size="small">
          <detail-list-item term="淹没面积">王超磊</detail-list-item>
          <detail-list-item term="淹没时间">48小时</detail-list-item>
          <detail-list-item term="淹没人口">0</detail-list-item>
          <detail-list-item term="淹没损失（万元）">756</detail-list-item>
        </detail-list>
      </a-card>
      <div style="margin: 16px 0"></div>
      <a-card type="inner" title="方案可行性评价">
        <detail-list title="详细数据" size="small">
          <detail-list-item term="评价人">王超磊</detail-list-item>
          <detail-list-item term="角色码">0117</detail-list-item>
          <detail-list-item term="评价时间">2020/4/17</detail-list-item>
          <detail-list-item term="评价内容" style="width:100%;">在防控效果上，从控泄流量、下泄水温变化、拦冰排冰等多个方面综合分析评价水库群与分凌区联合调度运用对河道和库区凌情的影响。在防控效果上，从控泄流量、下泄水温变化、拦冰排冰等多个方面综合分析评价水库群与分凌区联合调度运用对河道和库区凌情的影响。在防控效果上，从控泄流量、下泄水温变化、拦冰排冰等多个方面综合分析评价水库群与分凌区联合调度运用对河道和库区凌情的影响。在防控效果上，从控泄流量、下泄水温变化、拦冰排冰等多个方面综合分析评价水库群与分凌区联合调度运用对河道和库区凌情的影响。</detail-list-item>
        </detail-list>
      </a-card>
    </a-card>
  </div>
</template>
<script>
import DetailList from '@/components/tools/DetailList'
import { PageView } from '@/layouts'

const DetailListItem = DetailList.Item
export default {
  name: 'ResultEvaluate',
  components: {
    PageView,
    DetailList,
    DetailListItem
  },
  data() {
    return {
      advanced: true,
      flag: false,
      form: this.$form.createForm(this, { name: 'ifrom' }),
      icerunList: [],
      description:
        '在防控效果上，从控泄流量、下泄水温变化、拦冰排冰等多个方面综合分析评价水库群与分凌区联合调度运用对河道和库区凌情的影响。'
    }
  }
}
</script>