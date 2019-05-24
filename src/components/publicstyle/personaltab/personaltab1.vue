<template>
  <div>
    <div class="personal-b-r-t">
      <p class="font-16">基本信息</p>
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" class="demo-dynamic">
        <el-form-item prop="email" label="电子邮箱" :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="personal-b-r-b clearfix">
      <p class="font-16">个人信息</p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择性别">
            <el-option label="男" value="shanghai"></el-option>
            <el-option label="女" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
      <span>地址</span>
      <v-distpicker :placeholders="placeholders"></v-distpicker>
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" class="demo-dynamic">
        <el-form-item label="" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="我已阅读并接受个人信息收集声明" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item prop="email" label="详细地址" :rules="[
              { required: true, message: '请输入地址', trigger: 'blur' }]">
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
export default {
  components: { VDistpicker },
  data () {
    return {
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      },
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        type: []
      },
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请勾选', trigger: 'change' }
        ]
      },
      placeholders: {
        province: ' 省 ',
        city: ' 市 ',
        area: ' 区 '
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('提交成功!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }

  }
}
</script>
  <style lang="less" scoped>
  @import '~@/static/css/common.less';
  .personal-b-r-t{
    padding: 30px 50px ;
    background: @whiteColor;
  p{
    margin-bottom: 30px;
  }
  }
  /deep/.el-form-item__content{
    display: inline-block;
  }
  /deep/.el-input__inner{
    margin-left: 20px;
  }
  /deep/.el-form-item__error{
    margin-left: 20px;
  }
  .personal-b-r-b{
    margin-top: 30px;
    padding: 30px 50px ;
    background: @whiteColor;
  p{
    margin-bottom: 30px;
  }
  /deep/.el-form-item{
    margin-bottom: 20px;
  }
  }
  .el-select-dropdown .el-select-dropdown__item{
    float: none;
    padding: 6px 20px;
  }
  /deep/.personal-b[data-v-70335cd3] .el-input__inner {
    margin-left: 0;
  }
  .distpicker-address-wrapper{
    display: inline-block;
    margin-left: 15px;
    margin-bottom: 30px;
  }
  /deep/ .el-form-item__content{
    width: 50%;
  }

  .el-col.el-col-11{
    width: 100%;
  }
  /deep/.el-button--primary:focus, .el-button--primary:hover {
    width: 100px;
    background: #66b1ff;
    border-color: #66b1ff;
    color: #FFF;
    line-height: 40px;
  }
  .el-button--primary{
    width: 100px;
    background: #66b1ff;
    border-color: #66b1ff;
    color: #FFF;
    line-height: 40px;
  }
  .el-button--primary.is-active, .el-button--primary:active{
    width: 100px;
    background: #66b1ff;
    border-color: #66b1ff;
    color: #FFF;
    line-height: 40px;
  }
  /deep/.el-input__icon {
    width: 50px;
  }
</style>
