<template>
    <div class="nav">
        <div class="logo">
            <img src="@/static/img/index-logo.png">
            <div class="address">
                <div class="add">
                    <img src="@/static/img/address.png">
                    <div class=""></div>
                </div>
                <span ref="citys">南京市</span>
                <span class="clear"></span>
                <div class="city">
                    <p>选择城市</p>
                    <ul>
                        <el-col :span="6" v-for="(item,j) in item_city" :key='j'><li @click="city($event)">{{item}}</li></el-col>
                    </ul>
                </div>
            </div>
        </div>
        <div class="item">
            <ul>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/housekeeping">家政</router-link>
                </li>
                <li>
                    <router-link to="/maternity">月嫂</router-link>
                </li>
                <li>
                    <router-link to="/lactation">催乳师</router-link>
                </li>
                <li>
                    <router-link to="/parenting">育儿嫂</router-link>
                </li>
                <li>
                    <router-link to="/nanny">保姆</router-link>
                </li>
                <li>
                    <router-link to="/cooperation">城市合作</router-link>
                </li>
                <li>
                    <router-link to="/personal">个人中心</router-link>
                </li>
                <li>
                    <router-link to="/logon">请登录</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      item_city: ['北京市', '上海市', '深圳市', '杭州市', '长沙市', '沈阳市', '合肥市', '苏州市', '无锡市', '常州市', '青岛市']
    }
  },
  methods: {
    city (e) {
      let city1 = e.target.innerHTML
      let city2 = this.$refs.citys
      city2.innerHTML = city1
    }
  }
}
</script>
<style lang="less" scoped>
@import "~./nav.less";
@import '~@/static/css/common.less';
</style>
