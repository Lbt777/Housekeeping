<template>
    <div class="over">
        <form class="login">
            <div class="font-16 viptxt">会员注册</div>
            <div class="group-input">
                <span>手机号</span>
                <el-input
                placeholder="请输入手机号"
                v-model="input10"
                clearable>
                </el-input>
                <div class="btns">
                    <span v-show="sendAuthCode" class="auth_text auth_text_blue"  @click="getAuthCode">获取验证码</span>
                    <span v-show="!sendAuthCode" class="auth_text"><span class="auth_text_blue codes">{{auth_time}}</span>秒之重新发送验证码</span>
                </div>
            </div>
            <div class="group-input">
                <span>验证码</span>
                <el-input
                placeholder="请输入验证码"
                v-model="input11"
                clearable>
                </el-input>
            </div>
            <div class="group-input">
                <span>密码</span>
                <el-input
                placeholder="请输入密码"
                v-model="input12"
                clearable>
                </el-input>
            </div>
            <div class="group-input">
                <span>确认密码</span>
                <el-input
                placeholder="请再次输入密码"
                v-model="input13"
                clearable>
                </el-input>
            </div>
            <el-button type="primary" class="res">注册</el-button>
            <router-link to="/logon">返回登录</router-link>
        </form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      input10: '',
      input11: '',
      input12: '',
      input13: '',
      sendAuthCode: true,
      auth_time: 0
    }
  },
  methods: {
    getAuthCode: function () {
      this.sendAuthCode = false
      this.auth_time = 30
      var authtimetimer = setInterval(() => {
        this.auth_time--
        if (this.auth_time <= 0) {
          this.sendAuthCode = true
          clearInterval(authtimetimer)
        }
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/css/common.less';
@import "./register.less";
</style>
