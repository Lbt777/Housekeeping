<template>
    <div class="over">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm login" label-width="100px">
          <div class="font-16 viptxt">会员注册</div>
          <div class="group-input err">
              <p>手机号</p>
              <el-form-item prop="phone" label="手机">
                <el-input v-model.number="ruleForm.phone" placeholder="手机号注册"></el-input>
              </el-form-item>
              <div class="btns">
                  <span v-show="sendAuthCode" class="auth_text auth_text_blue"  @click="getAuthCode">获取验证码</span>
                  <span v-show="!sendAuthCode" class="auth_text"><span class="auth_text_blue codes">{{auth_time}}</span>秒之后重发</span>
              </div>
          </div>
          <div class="group-input">
              <p>验证码</p>
              <el-form-item prop="code" label="验证码">
                <el-input v-model="ruleForm.code" placeholder="请输入验证码" class="el-input-phone"></el-input>
              </el-form-item>
          </div>
          <div class="group-input">
            <p>密码</p>
            <el-form-item  prop="pass"  label="密码">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入你的密码"></el-input>
            </el-form-item>
          </div>
          <div class="group-input">
            <p>确认密码</p>
            <el-form-item  prop="checkPass" label=" 确认密码" >
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入确认密码"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" @keyup.enter="submitForm('ruleForm')">注册</el-button>
          </el-form-item>
          <router-link to="/logon">返回登录</router-link>
      </el-form>
    </div>
</template>
<script>
export default {
  data () {
    var phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        var reg = /^1[34578]\d{9}$/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
    }
    var code = (rule, value, callback) => {
      var reg = /^\d{6}$/
      if (reg.test(value) === false) {
        return callback(new Error('请输入正确的验证码'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      var reg = /^[a-zA-Z]\w{5,17}$/
      if (reg.test(value) === false) {
        callback(new Error('6-18位字母开头'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      sendAuthCode: true,
      auth_time: 0,
      ruleForm: {
        pass: '',
        checkPass: '',
        phone: '',
        code: ''
      },
      activeName: 'second',
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phone: [
          { validator: phone, trigger: 'blur' }
        ],
        code: [
          { validator: code, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getAuthCode: function (formName) {
      let val = this.ruleForm.phone
      if (val === '') {
        alert('请先输入手机号')
        return
      }
      this.sendAuthCode = false
      this.auth_time = 30
      var authtimetimer = setInterval(() => {
        this.auth_time--
        if (this.auth_time <= 0) {
          this.sendAuthCode = true
          clearInterval(authtimetimer)
        }
      }, 1000)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('注册成功')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/css/common.less';
@import "./register.less";
</style>
