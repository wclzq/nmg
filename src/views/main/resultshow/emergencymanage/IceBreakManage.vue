<template>
  <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
    <a-form @submit="handleSubmit" :form="form">
      <a-form-item
        label="方案名称"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          v-decorator="[
            'name',
            {rules: [{ required: true, message: '请输入标题' }]}
          ]"
          name="name"
          placeholder="给目标起个名字"
        />
      </a-form-item>
      <a-form-item
        label="方案别名"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          v-decorator="[
            'name',
            {rules: [{ required: true, message: '请输入标题' }]}
          ]"
          name="name"
          placeholder="给目标起个别名"
        />
      </a-form-item>
      <a-form-item
        label="编制日期"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-range-picker
          name="buildTime"
          style="width: 100%"
          v-decorator="[
            'buildTime',
            {rules: [{ required: true, message: '编制日期' }]}
          ]"
        />
      </a-form-item>
     

      <a-form-item
        label="主管单位"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          placeholder="主管单位"
          v-decorator="[
            'customer',
            {rules: [{ required: true, message: '请描述冰层厚度' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="编制单位"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="false"
      >
        <a-input
          placeholder="编制单位"
          v-decorator="[
            'density',
            {rules: [{ required: true, message: '请输入编制单位' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="权重"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="false"
      >
        <a-input-number :min="0" :max="100" />
        <span>%</span>
      </a-form-item>
      <a-form-item
        label="记录人"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-select
          placeholder="请选择"
          initialValue
          v-decorator="['select', { rules: [{ required: true, message: 'warn' }] }]"
        >
          <a-select-option value="0">张三</a-select-option>
          <a-select-option value="1">李四</a-select-option>
          <a-select-option value="2">网二</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="密级"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="true"
      >
        <a-select
          placeholder="请选择"
          initialValue
          v-decorator="['security', { rules: [{ required: true, message: 'warn' }] }]"
        >
          <a-select-option value="0">公开</a-select-option>
          <a-select-option value="1">绝密</a-select-option>
        </a-select>
        
      </a-form-item>
       <a-form-item
        label="描述"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-textarea
          rows="4"
          placeholder="请输入详细信息"
          v-decorator="[
            'description',
            {rules: [{ required: true, message: '请输入目标描述' }]}
          ]"
        />
      </a-form-item>
      <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center">
        <a-button htmlType="submit" type="primary">提交</a-button>
        <a-button style="margin-left: 8px">保存</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: 'IceBreaking',
  data() {
    return {
      description: '对历年来的破冰排凌方案以及实施效果进行记录，入库，为凌灾防控方案智能优选模型提供数据支撑。',
      value: 1,

      // form
      form: this.$form.createForm(this)
    }
  },
  methods: {
    // handler
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
