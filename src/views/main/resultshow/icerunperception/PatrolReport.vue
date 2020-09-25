<template>
  <div>
    <a-card :bordered="false" title="数据展示">
      <div slot="extra">
        <a-radio-group v-model="status">
          <a-radio-button value="all">全部</a-radio-button>
          <a-radio-button value="processing">进行中</a-radio-button>
          <a-radio-button value="waiting">已完成</a-radio-button>
        </a-radio-group>
        <a-input-search style="margin-left: 16px; width: 272px;" />
      </div>
      <a-table :columns="columns" :dataSource="data">
        <template slot="img" slot-scope="list">
            
          <a-popover placement="left" v-if="list.src">

            <template slot="content">
              <img style="width:300px;height:300px;" :src="list.src" />
            </template>

            <a-avatar shape="square" :size="50" :src="list.src">无</a-avatar>
          </a-popover>
          <a-avatar v-else shape="square" :size="50">无</a-avatar>
        </template>
        <span slot="description" slot-scope="text">
          <ellipsis :length="62" tooltip>{{ text }}</ellipsis>
        </span>
        <span slot="progress" slot-scope="text">
          <a-progress
            :format="getformat"
            :percent="getpercent(text)"
            style="width: 100px;margin-top: 4px;margin-bottom: 0;line-height: 22px;"
          />
        </span>
        <template slot="action" slot-scope="text,record">
          <a>删除</a>
          <a-divider type="vertical" />
          <a @click="detail(record)">详情</a>
        </template>
      </a-table>
      <patrol-detail ref="patroldetail"></patrol-detail>
    </a-card>
  </div>
</template>

<script>
import { Ellipsis } from '@/components'
import PatrolDetail from './models/PatrolDetail'

const columns = [
  {
    title: '描述',
    align:'center',
    dataIndex: 'img',
    width: 70,
    key: 'img',
    fixed:'left',
    scopedSlots: { customRender: 'img' },
    ellipsis: true
  },
  {
    dataIndex: 'description',
    width: '250px',
    key: 'description',
    scopedSlots: { customRender: 'description' },
    ellipsis: true
  },
  {
    title: '上报人',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '上报部门',
    dataIndex: 'section',
    key: 'section'
  },
  {
    title: '上报时间',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: '上报地点',
    dataIndex: 'site',
    key: 'site',
    ellipsis: true
  },
  {
    title: '进度',
    dataIndex: 'progress',
    key: 'progress',
    scopedSlots: { customRender: 'progress' }
  },
  {
    title: '操作',
    key: 'operation',
    align:'center',
    fixed: 'right',
    width: 120,
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '13',
    img: { src: '/hky.png' },
    description: '在柠檬河段发现一些问题',
    name: '正常',
    section: '工管科',
    date: '2005年',
    site: '王超磊管理段',
    progress: 0
  },
 
]
for (let i = 0; i < 12; i += 1) {
  data.push({
       key: i,
    img: i%3==0?{ src: '/hky.png' }:{},
    description: '在柠檬河段发现一些问题',
    name: '正常',
    section: '工管科',
    date: '2005年',
    site: '王超磊管理段',
    progress: i%2==0?0:1
  })
}
export default {
  name: 'PatrolReport',
  components: { Ellipsis,PatrolDetail },
  data() {
    return {
      columns,
      data,
      status: 'all',
      description:
        '配合手机移动端微信小程序使用，开发的微信小程序凌情巡查随手拍功能会上传巡查过程中发现的凌情动态，以文字配照片或者视频形式上报这PC端，PC端用户可通过该功能查询巡查的上报记录，凌情动态和上报点的位置信息。'
    }
  },
  methods: {
    detail(e) {
        this.$refs.patroldetail.show(e)
    },
    getformat(percent){
        return percent==50?'进行中':'已完成'
    },
    getpercent(val){
        return val==0?50:100
    },
  }
}
</script>

<style lang="less" scoped>
</style>
