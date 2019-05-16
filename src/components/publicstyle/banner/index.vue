<template>
    <el-carousel :interval="6000" arrow="never" height="729px" trigger="hover">
        <el-carousel-item v-for="item in imgs" :key="item">
            <img :src="item">
        </el-carousel-item>
    </el-carousel>
</template>
<script>
import banner1 from '@/static/img/banner-1.jpg'
export default {
  data () {
    return {
      imgs: [banner1, banner1, banner1, banner1, banner1]
    }
  }
}
</script>
<style lang="less" scoped>
@import "~./banner.less";
</style>
