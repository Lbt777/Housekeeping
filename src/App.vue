<template>
  <div id="app">
    <router-view name="maternity"></router-view>
    <navs/>
    <banner/>
    <router-view></router-view>
    <sidebar/>
    <foot/>
  </div>
</template>
<script>
// banner组件
import banner from 'com/publicstyle/banner'
// nav×é¼þ
import navs from 'com/publicstyle/nav'
// 侧边栏
import sidebar from 'com/publicstyle/sidebar'
// 底部
import foot from 'com/publicstyle/footer'
export default {
  name: 'App',
  components: {
    navs,
    banner,
    sidebar,
    foot
  }
}
</script>
