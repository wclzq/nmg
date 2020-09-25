<template>
  <a-modal title="信息详情" width="80%" :visible="visible" :footer="null" @cancel="handleCancel">
    <a-card
      v-for="(item,index) in UNVlist"
      :key="index"
      :bordered="true"
      hoverable
      style="width: 100%;margin:10px;"
    >
      <strong slot="cover" style="margin:10px;">{{ item.name }}</strong>
      <a-row>
        <a-col :span="6" :offset="2">
          <a-avatar shape="square" style="width:100%;height:100%;" :src="item.src" />
        </a-col>
        <a-col :span="6" :offset="2">
          <a-avatar shape="square" style="width:100%;height:100%;" :src="item.src" />
        </a-col>
        <a-col :span="6" :offset="2">
          <!-- <video src="" width="100%" height="100%" poster="../../../../public/hky.png">
          </video>-->
          <!-- 使div可编辑可编辑 -->
          <div contenteditable="true"></div>
        </a-col>
      </a-row>
      <span slot="actions">处理人：{{ item.name }}</span>
      <span slot="actions">处理时间：2020/4/14</span>
      <span slot="actions">处理时间：2020/4/14</span>
    </a-card>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      UNVlist: [
        { name: '不详', src: '/hky.png' },
        { name: '不详2', src: '/avatar2.jpg' }
      ]
    }
  },
  methods: {
    show() {
      this.visible = true
    },

    handleCancel() {
      this.visible = false
    }
  }
}
</script>
