<template>
    <div class="primary-right" ref="stop">
        <div class="img01"><img class="" src="./img/right_img.jpg"></div>
        <div class="img02"><img class="" src="./img/right_img2.jpg"></div>
    </div>
</template>
<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('.primary-right').offsetTop
      if (scrollTop <= 887) {
        offsetTop = 887 - Number(scrollTop)
        document.querySelector('.primary-right').style.top = offsetTop + 'px'
      } else {
        document.querySelector('.primary-right').style.top = '0px'
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="less" scoped>
.primary-right{
  position: fixed;
  top: 887px;
  right: 75px;
  z-index: 9999;
  width: 240px;
  height: 670px;
  background: white;
  text-align: center;
  .img01{
      margin-top: 60px;
  }
  .img02{
      margin-top: 90px;
  }
}
</style>
