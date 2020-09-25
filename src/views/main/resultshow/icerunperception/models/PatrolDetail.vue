<template>
  <a-modal title="信息详情" width="80%" :visible="visible" :footer="null" @cancel="handleCancel">
    <a-card hoverable :bodyStyle="{ padding:'24px' }">
      <strong slot="cover" style="margin:10px;">王超磊</strong>
      <a-row :gutter="[16,16]">
        <a-col :span="8">
          <a-avatar shape="square" style="width:100%;height:200px;" src="/hky.png" />
        </a-col>
      </a-row>
       <a-row :gutter="[16,16]">
        <a-col :span="24">
            <a-descriptions>
              <a-descriptions-item label="编号">xxx}</a-descriptions-item>
              <a-descriptions-item label="名称">管理段</a-descriptions-item>
              <a-descriptions-item label="日期">2020/4/17}</a-descriptions-item>
              <a-descriptions-item label="状态">正常</a-descriptions-item>
              <a-descriptions-item label="凌灾情况">无</a-descriptions-item>
            </a-descriptions>
        </a-col>
      </a-row>
      <a-divider type="horizontal" />
      <a-row :gutter="[16,16]">
        <a-col :span="8">
          <video muted autoplay loop controls width="100%">
            <source type="video/mp4" src="@/assets/video/test.mp4" />
          </video>
        </a-col>
      </a-row>
      <a-row :gutter="[16,16]">
        <a-col :span="24">
          <a-card type="inner" title="详细信息">
            <a-descriptions>
              <a-descriptions-item label="编号">xxx}</a-descriptions-item>
              <a-descriptions-item label="名称">管理段</a-descriptions-item>
              <a-descriptions-item label="日期">2020/4/17}</a-descriptions-item>
              <a-descriptions-item label="状态">正常</a-descriptions-item>
              <a-descriptions-item label="凌灾情况">无</a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-col>
      </a-row>
      <span slot="actions">处理人：王超磊}</span>
      <span slot="actions">处理时间：2020/4/7</span>
    </a-card>
  </a-modal>
</template>

<script>
export default {
  name: 'PatrolDetail',
  data() {
    return {
      visible: false,
      patroldetail: null
    }
  },
  methods: {
    show(e) {
      this.patroldetail = e
      this.visible = true
    },

    handleCancel() {
      this.visible = false
    }
  }
}
</script>
