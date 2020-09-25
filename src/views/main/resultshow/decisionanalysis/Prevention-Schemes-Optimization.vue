<template>
  <div>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form" @submit="handleSubmit">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="方案名称">
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
    title: '方案名称',
    dataIndex: 'name1',
    key: 'name1'
  },
  {
    title: '方案别名',
    dataIndex: 'name2',
    key: 'name2'
  },
  {
    title: '主管单位',
    dataIndex: 'name3',
    key: 'name3'
  },
  {
    title: '编制单位',
    dataIndex: 'area',
    key: 'area'
  },
  {
    title: '编制日期',
    dataIndex: 'area2',
    key: 'area2'
  },
  {
    title: '使用范围',
    dataIndex: 'num',
    key: 'num'
  },
  {
    title: '方案描述',
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
for (let i = 0; i < 3; i++) {
  if (i % 2) {
    data.push({
      key: i,
      code: '22' + i,
      name1: '方案' + i,
      name2: '30年一遇大洪水',
      name3: '国家防汛抗旱总指挥办公室',
      area: '黄河水利委员会黄河水利科学研究院',
      area2: '2020/06/06',
      num: 0,
      money: '黄河下游“54.8” 型30年一遇洪水，最大分洪流量400m3/s。同时汶河发生10年一遇洪水，洪峰流量4000m3/s。'
    })
  } else {
    data.push({
      key: i,
      code: '22' + i,
      name1: '方案' + i,
      name2: '50年一遇大洪水',
      name3: '国家防汛抗旱总指挥办公室',
      area: '黄河水利委员会黄河水利科学研究院',
      area2: '2020/06/09',
      num: 0,
      money: '黄河分洪量为0.69亿m3，汶河来水9.44亿m3，总来水10.13亿m3。根据分洪运用调度原则，老湖汛前水位为42m（大沽高程）。先向老湖分湖，当老湖区水位即将超过46m时，启用八里湾闸开始向新湖分洪。'
    })
  }
}
export default {
  name: 'PreventionSchemesOptimization',
  data() {
    return {
      advanced: true,
      data,
      flag: false,
      form: this.$form.createForm(this, { name: 'ifrom' }),
      columns,
      description:
        '通过集成“凌灾防控方案智能优选模型”，对不同防控方案的综合效益进行动态评估，结合模糊聚类、深度学习和支持向量机等机器学习算法'
    }
  }
}
</script>