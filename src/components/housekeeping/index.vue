<template>
  <div class="container">
    <div class="mid-nav"><span class="container-describe01">首页</span>
      <span>/</span>
      <span  class="container-describe02">家政服务</span>
    </div>
    <div class="parting-line"></div>
    <div class="primary"></div>
    <div class="primary-right"></div>
  </div>
</template>
<script>
export default {
  //  改变单个页面颜色
//  beforeCreate () {
//    document.querySelector('body').setAttribute('style', 'background:#F0F0F0')
//  },
//  beforeDestroy () {
//    document.querySelector('body').setAttribute('style', '')
//  }
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  @import "~static/css/public-style.less";
  .container{
    //  position: relative;
    // top: 620px;
    max-width: 1200px;
    margin: 0 auto;
    .mid-nav{
      height: 40px;
       background:white;
    }
  }
  .container-describe01 {
    color: black;
    font-family: "Microsoft YaHei";
    font-size: 19px;
    padding: 0 10px;
    line-height: 40px;
    .container-describe02{
      font-size: 16px;
    }
  }
  .parting-line{
    max-width: 1200px;
    height: 15px;
    background: #F0F0F0;
  }
  .primary{
    width: 950px;
    height: 806px;
    float: left;
    background: red;
  }
  .primary-right{
    width: 240px;
    height: 806px;
    float: right;
    background: red;
  }
</style>
