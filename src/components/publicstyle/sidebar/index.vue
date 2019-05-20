<template>
    <ul class="sidebar">
        <li class="san" title="点击立即预约">
          <router-link to="/subscribe">
            <div class="img-box sans"></div>
          </router-link>
        </li>
        <li class="one" title="爱君公众号">
            <div class="img-box frist"></div>
            <div class="cover ">
                <img src="./img/right-icon5.jpg">
            </div>
        </li>
        <li class="two"  title="扫一扫加我微信">
            <div class="img-box sed"></div>
            <div class="cover">
                <img src="./img/right-icon6.jpg">
                <p>扫一扫添加微信</p>
            </div>
        </li>
        <transition name="el-fade-in">
            <li class="top" @click="scrollToTop" v-show="toTopShow">
                <img src="./img/right-icon4.jpg">
            </li>
        </transition>
    </ul>
</template>
<script>
export default {
  data () {
    return {
      toTopShow: false
    }
  },
  methods: {
    handleScroll () {
      // 首先修改相对滚动位置
      this.scrollTop = this.scrollTop = window.pageYOffset || document.body.scrollTop
      if (this.scrollTop > 300) {
        this.toTopShow = true
      } else {
        this.toTopShow = false
      }
    },
    scrollToTop () {
      var timer
      var _that = this
      // 动画，使用requestAnimationFrame代替setInterval
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn () {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 50
          // 然后修改这里实现动画滚动效果
          document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
          _that.toTopShow = false
        }
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      // 修改事件监听
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="less" scoped>
@import "~./sidebar.less";
@import '~@/static/css/common.less';
</style>
