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
    <a-card :bordered="true" hoverable title="信息详情">
      <a-card type="inner" title="监测数据">
        <detail-list title="详细数据" size="small">
          <detail-list-item term="冰厚">50cm</detail-list-item>
          <detail-list-item term="水深流速">xxx</detail-list-item>
          <detail-list-item term="流速">6</detail-list-item>
        </detail-list>
      </a-card>
        <div style="margin: 16px 0"></div>
      <a-card type="inner" title="上报信息">
        <detail-list title="详细数据" size="small">
          <detail-list-item term="上报人">王超磊</detail-list-item>
          <detail-list-item term="角色码">0117</detail-list-item>
          <detail-list-item term="上报时间">2020/4/17</detail-list-item>
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
  name: 'MoveMonitor',
  components: {
    PageView,
    DetailList,
    DetailListItem
  },
  data() {
    return {
      description:
        '以水陆两栖车为载体，形成移动式冰-水-床一体化测量技术装备，实现冰厚、水深、流速和河床地形数据的同步、实时测量获取监测数据。通过数据管理子系统进行上传，用户可在成果应用与展示子系统进行查看。',
      // 高级搜索 展开/关闭
      advanced: true,
      flag: false,
      form: this.$form.createForm(this, { name: 'ifrom' }),
      icerunList: []
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
    }
  }
}
</script>

<style scoped>
</style>
