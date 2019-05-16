<template>
    <div class="index">
        <sidebar/>
        <div class="banner">
            <navs/>
            <banner/>
        </div>
        <div class="container">
            <div class="title">111
            </div>
        </div>
    </div>
</template>
<script>
// banner组件
import banner from 'com/publicstyle/banner'
// nav组件
import navs from 'com/publicstyle/nav'
// 侧边栏
import sidebar from 'com/publicstyle/sidebar'

export default {
  components: {
    banner,
    navs,
    sidebar
  }
}
</script>
<style lang="less" scoped>
@import "~static/css/common.less";
.banner{
    position: relative;
}
.nav{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
}
.title{
    padding-top: 70px;
}
</style>
