<template>
  <div>
    <a-card :bordered="false">
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
                :style="{ float: 'right', overflow: 'hidden' }"
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
            :color="tag==='管理员' ? 'volcano' : (tag.length > 5 ? 'geekblue' : 'green')"
            :key="tag"
          >{{tag.toUpperCase()}}</a-tag>
        </span>
        <template slot="action" slot-scope="text,record">
          <a @click="detail(record)">详情</a>
          <a-divider type="vertical" />
          <a @click="modify(record)">编辑</a>
        </template>
      </a-table>
    </a-card>
    
  </div>
</template>

<script>
const columns = [
  {
    title: '编号',
    dataIndex: 'code',
    width: 100,
    fixed: 'left',
    key: 'code'
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年份',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: '描述',
    dataIndex: 'info',
    key: 'info'
  },
  {
    title: '权限',
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

const data = []
for (let i = 1; i < 7; i++) {
  data.push({
    key: i,
    code: '2020-2' + i,
    name: '正常',
    date: '2005年',
    info: '一切正常',
    tags: i % 2 == 0 ? ['管理员'] : ['用户']
  })
}
export default {
  name: 'SystemManage',
  components: {},
  data() {
    return {
      description: '系统管理',
      // 高级搜索 展开/关闭
      data,
      flag: false,
      form: this.$form.createForm(this, { name: 'ifrom' }),
      columns,
      detail: null
    }
  },
  created() {},
  mounted() {
    this.getroute()
  },
  methods: {
    handleEdit(e, num) {
      console.log(e, num)
    },
    getroute() {
      console.log(this.$route, '当前路由信息')
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
