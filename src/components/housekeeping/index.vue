<template>
  <div class="container">
    <div class="mid-nav"><span class="container-describe01">首页</span>
      <span>/</span>
      <span  class="container-describe02">家政服务</span>
    </div>
    <div class="parting-line"></div>
    <div class="primary">
      <ul class="serve clearfix">
        <li>
          <div class="primary-dev primary-dev01">
            <i></i>
            <a href="#"><h6>日常保洁</h6></a>
            <a href="#"><p>钟点工/小时工/清洁护理</p></a>
            <a href="#">
             <div class="btn-prev01"></div>
            </a>
          </div>
        </li>
        <li>
          <div class="primary-dev primary-dev02">
            <i></i>
            <a href="#"><h6>日常保洁</h6></a>
            <a href="#"><p>钟点工/小时工/清洁护理</p></a>
            <a href="#">
              <div class="btn-prev01"></div>
            </a>
          </div>
        </li>
      </ul>
      <ul class="serve server-ul01 clearfix">
        <li>
          <div class="primary-dev primary-dev03">
            <i></i>
            <a href="#"><h6>日常保洁</h6></a>
            <a href="#"><p>钟点工/小时工/清洁护理</p></a>
            <a href="#">
              <div class="btn-prev01"></div>
            </a>
          </div>
        </li>
        <li>
          <div class="primary-dev">
            <i></i>
            <a href="#"><h6>日常保洁</h6></a>
            <a href="#"><p>钟点工/小时工/清洁护理</p></a>
            <a href="#">
              <div class="btn-prev01"></div>
              <div class="btn-prev02"></div>
            </a>
          </div>
        </li>
      </ul>
      <ul class="serve server-ul01 clearfix">
        <li>
          <div class="primary-dev primary-dev04">
            <i></i>
            <a href="#"><h6>日常保洁</h6></a>
            <a href="#"><p>钟点工/小时工/清洁护理</p></a>
            <a href="#">
              <div class="btn-prev01"></div>
              <div class="btn-prev02"></div>
            </a>
          </div>
        </li>
        <li>
          <div class="primary-dev primary-dev05">
            <i></i>
            <a href="#"><h6>日常保洁</h6></a>
            <a href="#"><p>钟点工/小时工/清洁护理</p></a>
            <a href="#">
              <div class="btn-prev01"></div>
              <div class="btn-prev02"></div>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="primary-right">
     <div class="img01"><img class="" src="./img/right_img.jpg"></div>
      <div class="img02"><img class="" src="./img/right_img2.jpg"></div>
    </div>

  </div>
</template>
<script>
export default {
  // 改变单个页面颜色
  // beforeCreate () {
  //   document.querySelector('body').setAttribute('style', 'background:#F0F0F0')
  // },
  // beforeDestroy () {
  //   document.querySelector('body').setAttribute('style', '')
  // }

}
</script>
<style lang="less" scoped>
 @import "~static/css/common.less";
  .container{
    max-width: 1200px;
    margin: 0 auto;
    .mid-nav{
      margin-top: 30px;
      height: 40px;
       background:@whiteColor;
    }
  }
  .container-describe01 {
    color: @darkgreyColor;
    font-family: "Microsoft YaHei";
    font-size: 19px;
    padding: 0 10px;
    line-height: 40px;
    margin-left: 50px;
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
    background: @whiteColor;
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
  .serve{
    padding: 70px 0px 0px 0px;
  }
  .server-ul02{
    margin-top: 100px;
  }
  .container .primary ul li i{
    display: block;
    width: 45px;
    height: 2px;
    background-color: @darkorangeColor;
    margin-bottom: 10px;
  }
  .container .primary ul li a h6{
    color: @darkorangeColor;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .primary-dev{
  width: 300px;
    height: 150px;
    margin-left: 130px;
    &:hover{
      background: @bglightdark;
    }
  }
  .primary-dev01{
    background: url("./img/home-working-bg1.png") no-repeat;
    background-position:  80px 0px;
  }
 .primary-dev01{
   background: url("./img/home-working-bg1.png") no-repeat;
   background-position:  80px 0px;
 }
 .primary-dev01{
   background: url("./img/home-working-bg1.png") no-repeat;
   background-position:  80px 0px;
 }

  .container .primary ul li p{
    color: @grayColor;
    font-size: 16px;
    margin-bottom: 20px;
  }
.btn-prev01 {
  width: 42px;
  height: 42px;
  background: url("./img/index-icon-1.png") no-repeat;
  position: absolute;
  display: block;
  &:hover{
    background: url("./img/index-icon-3-1.png") no-repeat;
  }
}
 .primary-dev:hover{
   opacity: 1;
   -webkit-animation-name: hvr-buzz-out;
   -moz-animation-name: hvr-buzz-out;
   -ms-animation-name: hvr-buzz-out;
   animation-name: hvr-buzz-out;
   -webkit-animation-duration: 0.75s;
   -moz--animation-duration: 0.75s;
   -ms--animation-duration: 0.75s;
   animation-duration: 0.75s;
   -webkit-animation-timing-function: linear;
   -moz-animation-timing-function: linear;
   -ms-animation-timing-function: linear;
   animation-timing-function: linear;
   -webkit-animation-iteration-count: 1;
   -moz-animation-iteration-count: 1;
   -ms-animation-iteration-count: 1;
   animation-iteration-count: 1;
 }
 @keyframes hvr-buzz-out{
   10%{transform: translateX(3px) rotate(2deg)};
 20%{transform: translateX(-3px) rotate(-2deg)};
 30%{transform: translateX(3px) rotate(2deg)};
 40%{transform: translateX(-3px) rotate(-2deg)};
 50%{transform: translateX(2px) rotate(1deg)};
 60%{transform: translateX(-2px) rotate(-1deg)};
 70%{transform: translateX(2px) rotate(1deg)};
 80%{transform: translateX(-2px) rotate(-1deg)};
 90%{transform: translateX(1px) rotate(0)};
 100%{transform: translateX(-1px) rotate(0)};
 }
 @-webkit-keyframes hvr-buzz-out{
   10%{-webkit-transform: translateX(3px) rotate(2deg)};
 20%{-webkit-transform: translateX(-3px) rotate(-2deg)};
 30%{-webkit-transform: translateX(3px) rotate(2deg)};
 40%{-webkit-transform: translateX(-3px) rotate(-2deg)};
 50%{-webkit-transform: translateX(2px) rotate(1deg)};
 60%{-webkit-transform: translateX(-2px) rotate(-1deg)};
 70%{-webkit-transform: translateX(2px) rotate(1deg)};
 80%{-webkit-transform: translateX(-2px) rotate(-1deg)};
 90%{-webkit-transform: translateX(1px) rotate(0)};
 100%{-webkit-transform: translateX(-1px) rotate(0)};
 }
 @-moz-keyframes hvr-buzz-out{
   10%{-moz-transform: translateX(3px) rotate(2deg)};
 20%{-moz-transform: translateX(-3px) rotate(-2deg)};
 30%{-moz-transform: translateX(3px) rotate(2deg)};
 40%{-moz-transform: translateX(-3px) rotate(-2deg)};
 50%{-moz-transform: translateX(2px) rotate(1deg)};
 60%{-moz-transform: translateX(-2px) rotate(-1deg)};
 70%{-moz-transform: translateX(2px) rotate(1deg)};
 80%{-moz-transform: translateX(-2px) rotate(-1deg)};
 90%{-moz-transform: translateX(1px) rotate(0)};
 100%{-moz-transform: translateX(-1px) rotate(0)};
 }
 @-ms-keyframes hvr-buzz-out{
   10%{-ms-transform: translateX(3px) rotate(2deg)};
 20%{-ms-transform: translateX(-3px) rotate(-2deg)};
 30%{-ms-transform: translateX(3px) rotate(2deg)};
 40%{-ms-transform: translateX(-3px) rotate(-2deg)};
 50%{-ms-transform: translateX(2px) rotate(1deg)};
 60%{-ms-transform: translateX(-2px) rotate(-1deg)};
 70%{-ms-transform: translateX(2px) rotate(1deg)};
 80%{-ms-transform: translateX(-2px) rotate(-1deg)};
 90%{-ms-transform: translateX(1px) rotate(0)};
 100%{-ms-transform: translateX(-1px) rotate(0)};
 }

</style>
