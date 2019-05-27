<template>
    <div class="over">
      <div class="login">
        <div class="font-16 viptxt">会员登录</div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机" prop="phone">
            <el-input v-model="ruleForm.phone" placeholder="手机号登录"></el-input>
          </el-form-item>
          <el-form-item label="密码"  prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码"></el-input>
          </el-form-item>
          <slide-verify :l="42" :r="10" :w="310" :h="155" @success="onSuccess" @fail="onFail" @refresh="onRefresh" :slider-text="ruleForm.text"></slide-verify>
          <div class="msg">
              <div>{{ruleForm.msg}}</div>
          </div>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
         <router-link to="/register">免费注册</router-link>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    var phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号错误'))
      } else {
        var reg = /^1[34578]\d{9}$/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的账号'))
        } else {
          callback()
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        msg: '',
        text: '向右滑',
        pass: '',
        phone: ''
      },
      activeName: 'second',
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        phone: [
          { validator: phone, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let pic = this.ruleForm.msg
      this.$refs[formName].validate((valid) => {
        if (pic === '') {
          alert('请尝试滑动验证码')
          return
        }
        if (valid && pic === '验证成功') {
          alert('登录成功!')
          this.$router.push({path: '/'})
        } else {
          console.log('登录失败')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    onSuccess () {
      this.ruleForm.msg = '验证成功'
    },
    onFail () {
      this.ruleForm.msg = '验证失败，请重新验证'
    },
    onRefresh () {
      this.ruleForm.msg = '已刷新'
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/css/common.less';
@import "./login.less";
</style>
