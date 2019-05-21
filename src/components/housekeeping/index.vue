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
              <router-link to="/housesub"><div class="btn-prev01"></div></router-link>
            </a>
          </div>
        </li>
        <li>
          <div class="primary-dev">
            <i></i>
            <a href="#"><h6>日常保洁</h6></a>
            <a href="#"><p>钟点工/小时工/清洁护理</p></a>
            <a href="#">
              <router-link to="/housesub"><div class="btn-prev01"></div></router-link>
            </a>
          </div>
        </li>
      </ul>
      <ul class="serve server-ul01 clearfix">
        <li>
          <div class="primary-dev">
            <i></i>
            <a href="#"><h6>日常保洁</h6></a>
            <a href="#"><p>钟点工/小时工/清洁护理</p></a>
            <a href="#">
              <router-link to="/housesub"><div class="btn-prev01"></div></router-link>
            </a>
          </div>
        </li>
        <li>
          <div class="primary-dev">
            <i></i>
            <a href="#"><h6>日常保洁</h6></a>
            <a href="#"><p>钟点工/小时工/清洁护理</p></a>
            <a href="#">
              <router-link to="/housesub"><div class="btn-prev01"></div></router-link>
            </a>
          </div>
        </li>
      </ul>
      <ul class="serve server-ul01 clearfix">
        <li>
          <div class="primary-dev">
            <i></i>
            <a href="#"><h6>日常保洁</h6></a>
            <a href="#"><p>钟点工/小时工/清洁护理</p></a>
            <a href="#">
              <router-link to="/housesub"><div class="btn-prev01"></div></router-link>
            </a>
          </div>
        </li>
        <li>
          <div class="primary-dev">
            <i></i>
            <a href="#"><h6>日常保洁</h6></a>
            <a href="#"><p>钟点工/小时工/清洁护理</p></a>
            <a href="#">
              <router-link to="/housesub"><div class="btn-prev01"></div></router-link>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <copyright/>
  </div>
</template>
<script>
// 侧边
import copyright from 'com/publicstyle/copyright'
export default {
  components: {
    copyright
  }
}
</script>
<style lang="less" scoped>
 @import "~static/css/common.less";
  .container{
    max-width: 1200px;
    margin: 0 auto;
    .mid-nav{
      margin-top: 40px;
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
    background: @bglightdark;
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
      background: #F0F0F0;
    }
  }
  .primary-dev01{}
  .container .primary ul li p{
    color: @grayColor;
    font-size: 16px;
    margin-bottom: 20px;
  }
.btn-prev01{
  width: 42px;
  height: 42px;
  background: url("./img/index-icon-1.png")no-repeat;
  &:hover{
    background: url("   ./img/index-icon-3-1.png")no-repeat;
  }
}
 .primary-dev:hover{
   opacity: 1;
   animation-name: hvr-buzz-out;
   animation-duration: 0.75s;
   animation-timing-function: linear;
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
</style>
