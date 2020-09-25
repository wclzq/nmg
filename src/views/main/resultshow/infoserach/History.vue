<template>
  <div>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form" @submit="handleSubmit">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="过流能力">
                <a-select
                  placeholder="请选择"
                  initialValue
                  v-decorator="['select', { rules: [{ required: flag, message: 'warn' }] }]"
                >
                  <a-select-option value="宁蒙河段">宁蒙河段</a-select-option>
                  <a-select-option value="黄河中游河段">黄河中游河段</a-select-option>
                  <a-select-option value="黄河下游河段">黄河下游河段</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
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
      <a-table :columns="columns" :dataSource="data">
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :color="tag==='重大' ? 'volcano' : (tag.length > 5 ? 'geekblue' : 'green')"
            :key="tag"
          >{{tag.toUpperCase()}}</a-tag>
        </span>
        <template slot="action" slot-scope="text,record">
          <a @click="Historydetail(record)">详情</a>
        </template>
      </a-table>
      <history-detail ref="historyDetail" :item="detail"></history-detail>
    </a-card>
  </div>
</template>

<script>
import HistoryDetail from './models/HistoryDetail'
const columns = [
  {
    title: '编号',
    dataIndex: 'code',
    width: 100,
    fixed: 'left',
    key: 'code',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '河段',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年份',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '凌灾情况',
    dataIndex: 'tags',
    key: 'info 1',
    scopedSlots: { customRender: 'tags' },
    ellipsis: true
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 120,
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '1',
    code: '22',
    name: '正常',
    age: '2005年',
    info: '一切正常',
    tags: ['无']
  },
  {
    key: '13',
    code: '22',
    name: '正常',
    age: '2005年',
    info: '一切正常',
    tags: ['无']
  },
  {
    key: '14',
    code: '22',
    name: '正常',
    age: '2005年',
    info: '一切正常',
    tags: ['一般']
  },
  {
    key: '15',
    code: '22',
    name: '正常',
    age: '2005年',
    info: '一切正常',
    tags: ['一般']
  },
  {
    key: '16',
    code: '22',
    name: '正常',
    age: '2005年',
    info: '一切正常',
    tags: ['重大']
  },
  {
    key: '17',
    code: '22',
    name: '正常',
    age: '2005年',
    info: '一切正常',
    tags: ['重大']
  },
  {
    key: '18',
    code: '22',
    name: '正常',
    age: '2005年',
    info: '一切正常',
    tags: ['一般']
  }
]
export default {
  name: 'History',
  components: {
    HistoryDetail
  },
  data() {
    return {
      description:
        '分别按照年份和黄河不同河段两种分类方式进行查询，不同河段主要分为“宁蒙河段”、“黄河中游河段”、“黄河下游河段”。通过选择不同的年份或者河段，用户可快速查询黄河流域历史重大凌灾情况，各个河段历年及典型凌灾年凌情分析',
      // 高级搜索 展开/关闭
      advanced: true,
      data,
      flag: false,
      form: this.$form.createForm(this, { name: 'ifrom' }),
      columns,
      detail:null
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
    Historydetail(e){
        console.log(e)
        this.detail=e
        this.$refs.historyDetail.show()
    }
  }
}
</script>

<style scoped>
</style>
