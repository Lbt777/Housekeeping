<template>
    <div class="over">
        <form class="login">
            <div class="font-16 viptxt">会员登录</div>
            <el-input placeholder="请输入账号" v-model="input" clearable></el-input>
            <el-input placeholder="请输入密码" v-model="input" clearable></el-input>
            <slide-verify :l="42" :r="10" :w="310" :h="155" @success="onSuccess" @fail="onFail" @refresh="onRefresh" :slider-text="text"></slide-verify>
            <div class="msg">
                <div>{{msg}}</div>
            </div>
            <el-button type="primary">登录</el-button>
            <router-link to="/register">免费注册</router-link>
        </form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '',
      text: '向右滑',
      input: ''
    }
  },
  methods: {
    onSuccess () {
      this.msg = '验证成功'
    },
    onFail () {
      this.msg = '验证失败，请重新验证'
    },
    onRefresh () {
      this.msg = '已刷新'
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/css/common.less';
@import "./login.less";
</style>
