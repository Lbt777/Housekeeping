<template>
    <div class="container">
      <div class="personal-t font-18">
        我的账户
      </div>
      <div class="personal-b clearfix">
        <div class="personal-b-l fl">
          <div class="personal-bgimg">
            <span class="font-16">我的设置</span>
            <router-link to="/personaltab1">
            <p>会员信息</p>
            </router-link>
            <router-link to="/personaltab2">
              <p>管理地址</p>
            </router-link>
            <div class="hr"></div>
          </div>
          <div class="personal-imgbg">
            <span class="font-16">联系我们</span>
            <p>您可以通过以下方式联系我们</p>
            <p>客服热线：400-666-4555(每天9:00-21:00)</p>
            <p>电子邮件:</p>
            <span>ecservice_china@diormail.com</span>
            <div class="hr"></div>
          </div>
        </div>
        <div class="personal-b-r fr">
          <router-view></router-view>
        </div>
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
  .personal-t{
    background: @whiteColor;
    text-align: center;
    line-height: 50px;
  }
  .personal-b{
    margin: 20px 0 20px 0;
    .personal-b-l{
      width: 30%;
      background: @whiteColor;
      padding: 30px 50px;
      .personal-bgimg{
        background: url("./image/1.png") no-repeat;
        line-height: 35px;
        span{
          margin-left: 40px;
        }
        p{
          padding-left: 40px;
        }
        p:hover{
          color: @lightorangeColor;
        }
        .hr{
          border-bottom: 1px solid #cccccc;
          width: 100%;
          margin-top: 20px;
        }
      }
      .personal-imgbg{
        background: url("./image/2.png") no-repeat;
        margin-top: 30px;
        span{
          margin-left: 40px;
          vertical-align: middle;
        }
        p{
          padding-left: 40px;
          padding-top: 15px;
          line-height: 25px;
        }
        .hr{
          border-bottom: 1px solid #cccccc;
          width: 100%;
          margin-top: 30px;
        }
      }
    }
  }
  .personal-b-r{
    width: 65%;
  }

</style>
