<template>
  <div class="container">
    <div class="primary">
      <div class="title02">
        <h2>服务内容</h2>
        <p>
          <a>母乳哺育</a>
          <a>乳腺护理</a>
        </p>
      </div>
      <div class="contens clearfix">
        <ul class="ul1">
          <li>
            <b>01</b>
            <span>催乳师通过专业知识和技能帮助产妇建立泌乳反射的过程。</span>
            <p></p>
            <i></i>
            <em></em>
            <samp></samp>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul class="ul2">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="primary-right">
      <div class="img01"><img class="" src="./img/right_img.jpg"></div>
      <div class="img02"><img class="" src="./img/right_img2.jpg"></div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .ul1 span{
    display: block;
    height: 0;
    line-height: 0;
    overflow: hidden;
    clear: both;
    font-size: 0;
  }
  .primary{
    width: 950px;
    height: 445px;
    float: left;
    background: @whiteColor;
  }
  .primary .title02{
    text-align: center;
    margin-bottom: 50px;

  }
  .primary .title02 h2{
    background: url("./img/cuiru-bg.png") no-repeat center;
    color: @grayorangeColor;
    font-size: 24px;
    height: 34px;
    margin-bottom: 40px;
  }
  .primary .title02 p a{
    display: inline-block;
    width: 103px;
    height: 33px;
    line-height: 33px;
    font-size: 16px;
  }
   .primary .contens {
    height: 512px;
    margin: 0 40px;
    position: relative;
  }
  .primary .contens ul li{
    background: url("./img/cuiru-bg2.jpg") no-repeat center;
    width: 240px;
    height: 206px;
    position: relative;
    float: left;
    margin: 0px 25px 50px;
    display:block;
  }
  .primary .contens ul li b {
    display: block;
    font-size: 36px;
    color: #e95513;
    margin-bottom: 7px;
    text-align: center;
    /* font-family: Kalinga; */
    font-weight: normal;
  }
  .primary .contens .ul2 {
    display: none;
  }
  .primary-right{
    width: 240px;
    height: 806px;
    float: right;
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
