<template>
  <a-modal title="信息详情" width="80%" :visible="visible" :footer="null" @cancel="handleCancel">
    <a-card :bordered="true" hoverable style="width: 100%;margin:10px;">
      <strong slot="cover" style="margin:10px;"></strong>
      <a-row>
        <a-col :span="24">
          <a-descriptions v-if="item">
            <a-descriptions-item label="编号">{{item.code}}</a-descriptions-item>
            <a-descriptions-item label="名称">{{item.name}}</a-descriptions-item>
            <a-descriptions-item label="日期">{{item.age}}</a-descriptions-item>
            <a-descriptions-item label="状态">{{item.info}}</a-descriptions-item>
            <a-descriptions-item label="凌灾情况">{{item.tags[0]}}</a-descriptions-item>
          </a-descriptions>
        </a-col>
      </a-row>
      <span slot="actions">处理人：王超磊</span>
      <span slot="actions">处理时间：2020/4/14</span>
      <span slot="actions">处理时间：2020/4/14</span>
    </a-card>
  </a-modal>
</template>

<script>
export default {
  props: ['item'],
  name: 'HistoryDetail',
  data() {
    return {
      visible: false,
     
    }
  },
  methods: {
    show() {
      this.visible = true
    },

    handleCancel() {
      this.visible = false
    },
   
  }
}
</script>
