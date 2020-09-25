<template>
  <a-card
    :bordered="false"
    :style="{height:horizontal?'800px':'500px',width:'100%',overflow:'hidden'}"
  >
    <div class="department-outer">
      <div class="tip-box">
        
        <a-button @click="switchStyle" type="primary" ghost>{{ horizontal?'横向':'垂直' }}</a-button>
        <a-button @click="onRefresh" type="primary" ghost>刷新</a-button>
      </div>
      <div class="zoom-box">
        <zoom-controller v-model="zoom" :min="20" :max="200"></zoom-controller>
      </div>
      <div class="view-box">
        <category-view
          v-if="treeData"
          :orgData="treeData"
          :horizontal="horizontal"
          :zoom-handled="zoomHandled"
          @on-menu-click="handleMenuClick"
        ></category-view>
      </div>
    </div>
  </a-card>
</template>

<script>
import * as _ from 'lodash'
import { createTree } from '@/utils/arrayToTreeConverter'
import './index.less'
import CategoryView from './components/OrgView.vue'
import ZoomController from './components/ZoomView.vue'

export default {
  components: {
    CategoryView,
    ZoomController,
  },
  data() {
    return {
      horizontal: false,
      treeData: null,
      zoom: 100
    }
  },
  computed: {
    zoomHandled() {
      return this.zoom / 100
    }
  },
  created() {
    //加载数据
    this.getCategoryData()
  },
  methods: {
    // 右键菜单点击事件
    handleMenuClick({ key, item, domEvent }) {
      const label = domEvent.target.getAttribute('data-label')
      const vkey = domEvent.target.getAttribute('data-vkey')
      switch (key) {
        case 'onAddChild':
          this.$refs.createOfEditCategoryModal.createOrEdit(null, vkey)
          break
        case 'onEdit':
          this.$refs.createOfEditCategoryModal.createOrEdit(vkey, null, label)
          break
        default:
        case 'onDelete':
          this.deleteCategorys(vkey, label)
          break
      }
    },
    // 获取部门数据  转换为树形结构
    getCategoryData() {
      this.treeData = {
        id: 0,
        label: 'XXX科技有限公司',
        children: [
          {
            id: 2,
            label: '产品研发部',
            children: [
              {
                id: 5,
                label: '研发-前端'
              },
              {
                id: 6,
                label: '研发-后端'
              },
              {
                id: 9,
                label: 'UI设计'
              },
              {
                id: 10,
                label: '产品经理'
              }
            ]
          },
          {
            id: 3,
            label: '销售部',
            children: [
              {
                id: 7,
                label: '销售一部'
              },
              {
                id: 8,
                label: '销售二部'
              }
            ]
          },
          {
            id: 4,
            label: '财务部'
          },
          {
            id: 11,
            label: 'HR人事'
          }
        ]
      }
        // var resultTreeData = createTree(result.items, 'parentId', 'id', null, 'children', [
        //   {
        //     target: 'id',
        //     targetFunction(item) {
        //       return item.id
        //     }
        //   },
        //   {
        //     target: 'parentId',
        //     source: 'parentId'
        //   },
        //   {
        //     target: 'label',
        //     source: 'displayName'
        //   }
        // ])

        // if (resultTreeData.length <= 1) {
        //   this.treeData = { ...resultTreeData[0] }
        // } else {
        //   this.treeData = {
        //     label: '利津黄河河务局-档案门类',
        //     children: resultTreeData
        //   }
        // }
    },
    //删除
    deleteCategorys(id, name) {
      var ref = this
      this.$confirm({
        title: '确认删除吗 ?',
        content: `门类 ${name} 将被删除.`,
        onOk() {
          deleteCategory({ id: id })
            .then(response => {
              if (response.success) {
                ref.onRefresh()
              }
            })
            .catch(err => {
              ref.$message.error(err.message)
            })
        },
        onCancel() {}
      })
    },
    //刷新
    onRefresh(e) {
      this.getCategoryData()
    },
    //切换显示样式
    switchStyle() {
      this.horizontal = this.horizontal ? false : true
      this.onRefresh()
    }
  }
}
</script>

<style lang="less">
</style>