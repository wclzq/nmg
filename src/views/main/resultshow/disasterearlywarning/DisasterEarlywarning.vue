
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
         <template slot="action" >
          <!-- <a @click="Historydetail(record)">详情</a> -->
          <a >详情</a>
          <a-divider type="vertical" />
          <a >编辑</a>
        </template>
      </a-table>
      
      <!-- <history-detail ref="historyDetail" :item="detail"></history-detail> -->
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
    title: '预计时间',
    dataIndex: 'area',
    key: 'area'
  },
  {
    title: '解决方案',
    dataIndex: 'area2',
    key: 'area2'
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
      area: '2020年8月15日',
      area2: '方案1'
    })
  }else{
      data.push({
      key: i,
      code: '22'+i,
      name1: '内蒙古',
      name2: '包头市',
      name3: '2',
      area: '2020年9月22日',
      area2: '方案4',
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
        '在系统中构建结合凌汛灾害预警指标体系，设定凌汛险情等级，针对流凌期、封河期与开河期等不同阶段，对冰塞冰坝形成，对冰塞冰坝壅水导致的堤防漫溢与溃决风险进行预测预报。'
    }
  }
}
</script>