<template>
  <div>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form" @submit="handleSubmit">
          <a-row :gutter="48">
          
            <a-col :md="8" :sm="24">
              <a-form-item label="文件名称">
                <a-input
                  v-decorator="['name', { rules: [{ required: flag, message: 'warn' }] }]"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="蓄槽水增量">
                <a-input-number
                  style="width: 100%"
                  v-decorator="['num2', { rules: [{ required: flag, message: 'warn' }] }]"
                />
              </a-form-item>
            </a-col>
             <a-col :md="!advanced && 8 || 24" :sm="24">
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
            :color="tag==='危险' ? 'volcano' : (tag.length > 5 ? 'geekblue' : 'green')"
            :key="tag"
          >{{tag.toUpperCase()}}</a-tag>
        </span>
        <template slot="action">
          <a @click="$refs.uavinfo.show()">详情</a>
        </template>
      </a-table>
      <uav-info ref="uavinfo" />
    </a-card>
  </div>
</template>

<script>
import UavInfo from './modules/UAVmonitorInfo'
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
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '状态',
    dataIndex: 'tags',
    key: 'info 1',
    scopedSlots: { customRender: 'tags' },
    ellipsis: true
  },
  {
    title: '时间',
    dataIndex: 'date',
    key: 'info 4',
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
    age: 32,
    date: '2020/4/7',
    tags: ['正常', '水流量很强']
  },
  {
    key: '13',
    code: '22',
    name: '正常',
    age: 32,
    date: '2020/4/7',
    tags: ['正常', '水流量很强']
  },
  {
    key: '14',
    code: '22',
    name: '正常',
    age: 32,
    date: '2020/4/7',
    tags: ['正常', '水流量很强']
  },
  {
    key: '15',
    code: '22',
    name: '正常',
    age: 32,
    date: '2020/4/7',
    tags: ['正常', '水流量很强']
  },
  {
    key: '16',
    code: '22',
    name: '正常',
    age: 32,
    date: '2020/4/7',
    tags: ['正常', '水流量很强']
  }
  
]
export default {
  name: 'UAVmonitor',
  components:{
      UavInfo
  },
  data() {
    return {
      description:
        '可以查询“库蓄水量”、“蓄槽水增量”、“过流能力”、“封河流量”、“水库下泄流量”、“断面信息”等。',
      // 高级搜索 展开/关闭
      advanced: false,
      data,
      flag: false,
      form: this.$form.createForm(this, { name: 'ifrom' }),
      columns
    }
  },
  created() {},
  methods: {
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    handleEdit(e, num) {
      console.log(e, num)
    },
    handleSub(record) {
      console.log(record.age)
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
