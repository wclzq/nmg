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
      <a-card type="inner" title="分凌区生态评价">
        <detail-list title="详细数据" size="small">
          <detail-list-item term="水量">550立方</detail-list-item>
          <detail-list-item term="水质">良</detail-list-item>
          <detail-list-item term="水生物">富含多种生物</detail-list-item>
        </detail-list>
      </a-card>
      <div style="margin: 16px 0"></div>
      <a-card type="inner" title="方案可行性评价">
        <detail-list title="详细数据" size="small">
          <detail-list-item term="评价人">王超磊</detail-list-item>
          <detail-list-item term="角色码">0117</detail-list-item>
          <detail-list-item term="评价时间">2020/4/17</detail-list-item>
          <detail-list-item
            term="评价内容"
            style="width:100%;"
          >用户可在系统平台上查看，由项目研究团队提供的分凌区在不同的使用方式后的生态效应综合评价报告。评价对象主要包括水量、水质、水生物等主要因子。
          用户可在系统平台上查看，由项目研究团队提供的分凌区在不同的使用方式后的生态效应综合评价报告。评价对象主要包括水量、水质、水生物等主要因子。用户可在系统平台上查看，由项目研究团队提供的分凌区在不同的使用方式后的生态效应综合评价报告。评价对象主要包括水量、水质、水生物等主要因子。</detail-list-item>
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
  name: 'Evaluate',
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
        '用户可在系统平台上查看，由项目研究团队提供的分凌区在不同的使用方式后的生态效应综合评价报告。评价对象主要包括水量、水质、水生物等主要因子。'
    }
  },
  mounted(){
    console.log('===',this.$route.query)
  }
}
</script>