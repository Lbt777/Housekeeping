<template>
  <div class="container clearfix">
    <div class="top-des">
      <h6>您是否对催乳师感到疑惑？</h6>
      <p>催乳师，是对专门催乳的人员的一种称呼，
        催乳师就是通过催乳技术即中医推拿手法，为产妇解决产后无乳、
        乳少等症状的专业护理人员。</p>
      <b></b>
    </div>
    <div class="primary">
    <div class="primary-left">
      <div class="modules01">
        <div class="title">
          <h2>服务内容</h2>
          <p>
            <a id="test">母乳哺育</a>
            <a>乳腺护理</a>
          </p>
        </div>
        <div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="母乳哺育" name="first">
              <ul class="ul1">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="乳腺护理" name="second">
              <ul class="ul2">
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>

    </div>
    <div class="primary-right">
      <div class="img01"><img class="" src="./img/right_img.jpg"></div>
      <div class="img02"><img class="" src="./img/right_img2.jpg"></div>
    </div>
  </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
  @import '~static/css/common.less';

  .modules01 ul li{
   background: url("./img/cuiru-bg2.jpg") no-repeat center ;
    width: 240px;
    height: 206px;
    position: relative;
    float: left;
    margin: 0px 25px 50px;
    display:block;
   }
  a{
    cursor:pointer
  }
  .container .top-des{
    padding: 50px 0px;
    position: relative;
    background: @whiteColor;
  }
.container .top-des h6{
    color: #E95513;
    font-size: 18px;
    margin-bottom: 15px;
}
  .container .top-des p{
    color: #E95513;
  }
  .container  .top-des b {
    display: block;
    position: absolute;
    left: 43px;
    bottom: -34px;
    width: 68px;
    height: 68px;
    background: url(./img/cuiru-icon.png) no-repeat center;
  }
  .primary{
   margin-top: 50px;
  }
  .primary-left{
    width: 950px;
    float: left;
    background: @whiteColor;
  }
  .title{
    text-align: center;
  }
  .title h2 {
    background: url(./img/cuiru-bg.png) no-repeat center;
    color: #E95513;
    font-size: 24px;
    height: 34px;
    margin-bottom: 40px;
    margin-top: 40px;
  }
   .title  p {
    margin-bottom: 50px;
  }
   .title p a{
    display: inline-block;
    width: 103px;
    height: 33px;
    line-height: 33px;
    font-size: 16px;
    color: #666;
  }
  .primary-right{
    width: 240px;
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
