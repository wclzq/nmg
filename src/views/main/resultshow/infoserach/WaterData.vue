<template>
  <div>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form" @submit="handleSubmit">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="库蓄水量">
                <a-input-number
                  v-decorator="['num', { rules: [{ required: flag, message: 'warn' }] }]"
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

            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="过流能力">
                  <a-select
                    placeholder="请选择"
                    initialValue
                    v-decorator="['select', { rules: [{ required: flag, message: 'warn' }] }]"
                  >
                    <a-select-option value="0">强</a-select-option>
                    <a-select-option value="1">一般</a-select-option>
                    <a-select-option value="2">弱</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="封河流量">
                  <a-input-number
                    style="width: 100%"
                    v-decorator="['num23', { rules: [{ required: flag, message: 'warn' }] }]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="水库下泄流量">
                  <a-input-number
                    style="width: 100%"
                    v-decorator="['num24', { rules: [{ required: flag, message: 'warn' }] }]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="断面信息">
                  <a-input-number
                    style="width: 100%"
                    v-decorator="['num25', { rules: [{ required: flag, message: 'warn' }] }]"
                  />
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
            </template>
            <a-col :md="!advanced && 8 || 24" :sm="24">
              <span
                class="table-page-search-submitButtons"
                :style="advanced && { float: 'right', overflow: 'hidden' } || {} "
              >
                  <a-button type="primary" html-type="submit">查询</a-button>
                  <a-button style="margin-left: 8px" @click="rest">重置</a-button>
                <a @click="toggleAdvanced" style="margin-left: 8px">
                  {{ advanced ? '收起' : '展开' }}
                  <a-icon :type="advanced ? 'up' : 'down'" />
                </a>
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
        <template slot="action" slot-scope="text,record">
          <a @click="handleEdit($event,0)">修改</a>
          <a-divider type="vertical" />
          <a @click="handleSub(record)">详情</a>
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
    key: 'code',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '库蓄水量',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '蓄槽水增量',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '过流能力',
    dataIndex: 'tags',
    key: 'info 1',
    scopedSlots: { customRender: 'tags' },
    ellipsis: true
  },
  {
    title: '封河流量',
    dataIndex: 'name',
    key: 'info 2',
    ellipsis: true
  },
  {
    title: '水库下泄流量',
    dataIndex: 'info',
    key: 'info 3',
    ellipsis: true
  },
  {
    title: '断面信息',
    dataIndex: 'info',
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
    info: '一切正常',
    tags: ['正常', '水流量很强']
  },
  {
    key: '13',
    code: '22',
    name: '正常',
    age: 32,
    info: '一切正常',
    tags: ['正常', '水流量很强']
  },
  {
    key: '14',
    code: '22',
    name: '正常',
    age: 32,
    info: '一切正常',
    tags: ['正常', '水流量很强']
  },
  {
    key: '15',
    code: '22',
    name: '正常',
    age: 32,
    info: '一切正常',
    tags: ['正常', '水流量很强']
  },
  {
    key: '16',
    code: '22',
    name: '正常',
    age: 32,
    info: '一切正常',
    tags: ['正常', '水流量很强']
  },
  {
    key: '17',
    code: '22',
    name: '正常',
    age: 32,
    info: '一切正常',
    tags: ['正常', '水流量很强']
  },
  {
    key: '18',
    code: '22',
    name: '正常',
    age: 32,
    info: '一切正常',
    tags: ['正常', '水流量很强']
  },
  {
    code: '23',
    key: '2',
    name: '正常',
    age: 42,
    info: '一切正常',
    tags: ['危险']
  },
  {
    code: '24',
    key: '3',
    name: '正常',
    age: 32,
    info: '一切正常',
    tags: ['良好', '正常']
  }
]
export default {
  name: 'waterdata',
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
