<template>
  <div ref="dragWrapper" class="org-tree-drag-wrapper" @mousedown="mousedownView">
    <div class="org-tree-wrapper" :style="orgTreeStyle">
      <v-org-tree
        v-if="orgData"
        :data="orgData"
        :horizontal="horizontal"
        :node-render="nodeRender"
        :expand-all="true"
        @on-node-click="handleNodeClick"
        collapsable
      ></v-org-tree>
    </div>
  </div>
</template>

<script>
import { on, off } from '@/utils/tools'

export default {
  name: 'CategoryView',
  props: {
    orgData: Object,
    zoomHandled: {
      type: Number,
      default: 1
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      orgTreeOffsetLeft: 0,
      orgTreeOffsetTop: 0,
      initPageX: 0,
      initPageY: 0,
      oldMarginLeft: 0,
      oldMarginTop: 0,
      canMove: false
    }
  },
  computed: {
    orgTreeStyle() {
      return {
        transform: `translate(-50%, -50%) scale(${this.zoomHandled}, ${this.zoomHandled})`,
        marginLeft: `${this.orgTreeOffsetLeft}px`,
        marginTop: `${this.orgTreeOffsetTop}px`
      }
    }
  },
  methods: {
    //	点击节点时触发
    handleNodeClick(e, data, expand) {
      console.log(e)
      console.log(data)
    },
    renderTabPaneMenu(e) {
      return (
        <a-menu {...{ on: { click: this.handleContextMenuClick } }}>
          <a-menu-item key="onAddChild" data-vkey={e.id} data-label={e.label}>
            新增子门类
          </a-menu-item>
          <a-menu-item key="onEdit" data-vkey={e.id} data-label={e.label}>
            编辑门类
          </a-menu-item>
          <a-menu-item key="onDelete" data-vkey={e.id} data-label={e.label}>
            删除门类
          </a-menu-item>
        </a-menu>
      )
    },
    // 渲染节点的render函数
    nodeRender(h, data) {
      const menu = this.renderTabPaneMenu(data)
      return (
        <div class={['custom-org-node', data.children && data.children.length ? 'has-children-label' : '']}>
          <a-dropdown overlay={menu} trigger={['contextmenu']}>
            <a-badge count={data.memberCount}>
              <span>{data.label}</span>
            </a-badge>
          </a-dropdown>
        </div>
      )
    },
    //鼠标点击
    mousedownView(event) {
      this.canMove = true
      this.initPageX = event.pageX
      this.initPageY = event.pageY
      this.oldMarginLeft = this.orgTreeOffsetLeft
      this.oldMarginTop = this.orgTreeOffsetTop
      on(document, 'mousemove', this.mousemoveView)
      on(document, 'mouseup', this.mouseupView)
    },
    // 鼠标移动
    mousemoveView(event) {
      if (!this.canMove) return
      const { pageX, pageY } = event
      this.orgTreeOffsetLeft = this.oldMarginLeft + pageX - this.initPageX
      this.orgTreeOffsetTop = this.oldMarginTop + pageY - this.initPageY
    },
    //鼠标松开
    mouseupView() {
      this.canMove = false
      off(document, 'mousemove', this.mousemoveView)
      off(document, 'mouseup', this.mouseupView)
    },
    // 点击菜单
    handleContextMenuClick({ key, item, domEvent }) {
      this.$emit('on-menu-click', { key, item, domEvent })
    }
  }
}
</script>

<style>
</style>
