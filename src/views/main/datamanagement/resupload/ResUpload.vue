
<template>
  <div class="main">
    <a-card :bordered="false" title="成果数据上传">
      <a-form
        :form="form"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleSubmit"
      >
        <a-form-item label="名称">
          <a-input
            placeholder="给文件取个名字"
            v-decorator="['fileName', { rules: [{ required: true, message: '请输入名称' }] }]"
          />
        </a-form-item>
        <a-form-item label="类型">
          <a-select
            v-decorator="[
          'gender',
          { rules: [{ required: true, message: '请选择类型' }] },
        ]"
            placeholder="请选择类型"
            @change="handleSelectChange"
          >
            <a-select-option value="2">二维</a-select-option>
            <a-select-option value="3">三维</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="描述">
          <a-textarea
            placeholder="描述文件信息"
            v-decorator="['remark', { rules: [{ required: false, message: '请输入名称' }] }]"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-upload-dragger
            name="file"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            @change="handleChange"
            :beforeUpload="beforeUpload"
          >
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-hint">拖拽文件到此区域上传</p>
          </a-upload-dragger>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 5, offset: 5 }">
          <a-alert type="info" showIcon ><div slot="message"><span style="color:red">*</span>为必填项</div></a-alert>
        </a-form-item>
      </a-form>
    </a-card>
   
  </div>
</template>

<script>
import { mixinDevice } from '@/utils/mixin'
export default {
  name: 'ResUpload',
  components: {
  },
  mixins: [mixinDevice],
  data() {
    return {
      form: this.$form.createForm(this),
      description:'主要实现模型计算成果审核、上传、发布，数据统计分析，凌汛风险图方案管理，地图发布，近实时动态监测数据的上传与管理，平台数据管理，系统管理，权限管理等功能模块。',
      fileList: []
    }
  },
  filters: {},
  methods: {
    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values, 'form')
          this.$message.loading({ content: '提交中...', key: 'load' })
          setTimeout(() => {
            this.$message.destroy()
            this.$message.success({ content: '提交成功!', duration: 2 })
          }, 1000)
        }
      })
    },
    handleSelectChange(e) {
      console.log(e)
    },
    beforeUpload() {
      return false
    },
    //文件
    handleChange(info) {
      if (info.file.status === 'done') {
        console.log(info.file.response)
      }
    }
  }
}
</script>

<style lang="less" scoped>
p.tip {
  font-size: 14px;
  text-align: center;
}
</style>
