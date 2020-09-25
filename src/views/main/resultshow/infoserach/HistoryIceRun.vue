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
    </a-card> -->
    <a-card :bordered="true" hoverable  title="信息详情">
     
      <detail-list title="凌情值班报告">
        <detail-list-item term="某某数据">725</detail-list-item>
        <detail-list-item></detail-list-item>
        <detail-list-item term="某某数据">725</detail-list-item>
        <detail-list-item term="河段">黄河上游河段</detail-list-item>
        <detail-list-item term="时间">2018-08-08</detail-list-item>
        <detail-list-item></detail-list-item>
      </detail-list>
      <a-card type="inner" title="重点水文站上报信息">
        <detail-list title="详细数据" size="small">
          <detail-list-item term="流凌密度">10</detail-list-item>
          <detail-list-item term="水温数据">0</detail-list-item>
          <detail-list-item term="冰厚">50cm</detail-list-item>
          <detail-list-item term="封河数据">xxx</detail-list-item>
          <detail-list-item term="开河数据">状态正常.</detail-list-item>
          <detail-list-item term="凌峰数据">状态正常.</detail-list-item>
        </detail-list>
        <a-divider style="margin: 16px 0" />
        <detail-list title="作用" size="small" :col="1">
          <detail-list-item
            term="作用"
          >可查询内容包括部分年份的流域防办“凌情值班报告”</detail-list-item>
        </detail-list>
        <a-divider style="margin: 16px 0" />
        <detail-list title="组名称" size="small" :col="2">
          <detail-list-item term="负责人">付小小</detail-list-item>
          <detail-list-item term="角色码">22022</detail-list-item>
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
  name: 'HistoryIceRun',
  components: {
      PageView,
    DetailList,
    DetailListItem
  },
  data() {
    return {
      description:
        '会按照年份排序，可查询内容包括部分年份的流域防办“凌情值班报告”，重点水文站点上报的“流凌密度”、“水温数据”、“冰厚”、“封河数据”、“开河数据”、“凌峰数据”等历史数据。',
      // 高级搜索 展开/关闭
      advanced: true,
      flag: false,
      form: this.$form.createForm(this, { name: 'ifrom' }),
      icerunList:[]
    }
  },
  created() {},
  methods: {
    handleEdit(e, num) {
      console.log(e, num)
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          var val
          for (var i in values) {
            if (values[i] != undefined) {
              val = values[i]
            }
          }
          if (val === undefined) {
            this.$message.info('请输入查询信息')
          }
        }
      })
    },
    rest() {
      this.form.resetFields()
    },
    
  }
}
</script>

<style scoped>
</style>
