<template>
  <div>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form" @submit="handleSubmit">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="所在省">
                <a-input-number
                  style="width: 100%"
                  v-decorator="['num25', { rules: [{ required: flag, message: 'warn' }] }]"
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
const columns = [
  {
    title: '编号',
    dataIndex: 'code',
    width: 100,
    fixed: 'left',
    key: 'code',
  },
  {
    title: '所在省',
    dataIndex: 'name1',
    key: 'name1'
  },
  {
    title: '所在市',
    dataIndex: 'name2',
    key: 'name2'
  },
  {
    title: '所在县',
    dataIndex: 'name3',
    key: 'name3'
  },
  {
    title: '淹没面积（km²）',
    dataIndex: 'area',
    key: 'area'
  },
  {
    title: '淹没耕地（hm²）',
    dataIndex: 'area2',
    key: 'area2'
  },
  {
    title: '受淹人口（人）',
    dataIndex: 'num',
    key: 'num'
  },
  {
    title: '淹没区损失（万元）',
    dataIndex: 'money',
    key: 'money'
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
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    data.push({
      key: i,
      code: '22'+i,
      name1: '内蒙古',
      name2: '临河市',
      name3: '1',
      area: '32.86',
      area2: '1682.26',
      num: 0,
      money: 8367.5
    })
  }else{
      data.push({
      key: i,
      code: '22'+i,
      name1: '内蒙古',
      name2: '包头市',
      name3: '2',
      area: '72.46',
      area2: '4539.26',
      num: 0,
      money: 5367.5
    })
  }
}
export default {
  name: 'BefrozenThawForecast',
  data() {
    return {
      advanced: true,
      data,
      flag: false,
      form: this.$form.createForm(this, { name: 'ifrom' }),
      columns,
      detail: null,
      description:
        '通过凌汛洪水演进模拟，在全面分析凌洪淹没风险与社会经济空间分布特征基础上，对典型河段堤外区域进行损失评估，影响损失指标主要包括影响人口数量、农田耕地、道路长度、房屋面积、GDP等等。'
    }
  }
}
</script>