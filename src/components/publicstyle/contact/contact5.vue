<template>
  <div>
    <div class="information-title">
      <h2>联系方式</h2>
      <p>CONTACT  INFORMATION</p>
      <img src="./image/fwcn.jpg"/>
    </div>
    <ul class="information-warp">
      <li>
        <div class="information-img">
          <img src="./image/lxfs.jpg"/>
          <img src="./image/lxfs1.jpg"/>
        </div>
        <br>
        <span class="font-12">地址：Adress</span>
        <br>
        <br>
        <p>江苏省南京市雨花台</p>
        <p>软件大道180号4栋101室</p>
      </li>
      <li>
        <div class="information-img">
          <img src="./image/lxfs2.jpg"/>
          <img src="./image/lxf3.jpg"/>
        </div>
        <br>
        <span class="font-12">电话：Tel</span>
        <br>
        <br>
        <p></p>
        <p>400-666-4555</p>
        <br>
      </li>
      <li>
        <div class="information-img">
          <img src="./image/lxf4.jpg"/>
          <img src="./image/lxf5.jpg"/>
        </div>
        <br>
        <span class="font-12">邮箱：Email</span>
        <br>
        <br>
        <p>jsfys888@163.com</p>
        <br>
      </li>
      <li>
        <div class="information-img">
          <img src="./image/lxf6.jpg"/>
          <img src="./image/lxf7.jpg"/>
        </div>
        <br>
        <span class="font-12">客服：QQ</span>
        <br>
        <br>
        <p>3214795936</p>
        <p>2496756260</p>
      </li>
    </ul>
    <div class="information-map">
      <p>地图e家政</p>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;   ap e Housekeeping</span>
    </div>
    <div></div>
    <div class="information-phon information-map">
      <p> 在线预约</p>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;       nline Booking</span>
    </div>
    <div class="information-list">
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .information-title{
    margin-top: 50px;
    text-align: center;
    color: @orangeColor;
    margin-bottom: 50px;
    p{
      margin-top: 15px;
      margin-bottom: 15px;
      color: @lightgrey;
    }
  }
  .information-warp {
    text-align: center;
    li{
      width: 25%;
      border-left: 1px solid @lightgrey;
      p:last-child{
        border-bottom: 1px solid @lightgrey;
        padding-bottom: 20px;
      }
      .information-img{
        display: inline-block;
        margin: 0 auto;
      }
    }
    li .information-img img:first-child{
      display: block;
    }
    li .information-img img:last-child{
      display: none;
    }
    li:hover img:first-child{
      display: none;
    }
    li:hover img:last-child{
      display: block;
    }
    li:hover p:last-child{
      border-bottom: 1px solid @orangeColor;
      padding-bottom: 20px;
    }
    li:first-child{
      border-left:none;
    }
  }
  .information-map{
    margin: 40px 0 0 70px;
    background: url('./image/lxfs.png') no-repeat center;
    height: 75px;
    text-align: center;
    p{
      font-size: 20px;
      padding-top: 15px;
    }
    span{
      font-size: 16px;
      color: @lightgrey;
    }
  }
  .information-phon{
    margin: 40px 0 0 70px;
    background: url('./image/lxfs1.png') no-repeat center;
    height: 75px;
    text-align: center;
  }
</style>
