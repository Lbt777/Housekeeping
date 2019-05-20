<template>
  <div>

    <div class="about-profile clearfix"><!--中间左边-->
      <h1>发展历程</h1>
      <span>History</span>
      <div class="hr"></div>
      <div class="profile-l profile-l1 fl">
        <span>2015年</span>
        <p>2015.03 e家政品牌成立</p>
        <p>2015.12 e家政首次众筹</p>
        <br/>
        <span>2016年</span>
        <p>2016.04 亿家政职业培训学校成立</p>
        <p>2016.10 南京月嫂服务中心正式成立</p>
        <br/>
        <span>2017年</span>
        <p>2017.08 苏州、青岛分公司正式落地</p>
        <p>2017.10 上海分公司正式落地</p>
        <p>2017.12 无锡、杭州、合肥分公司正式落地</p>
        <br/>
        <span>2018年</span>
        <p>2018.02 哈尔滨分公司正式落地</p>
        <p>2018.03 深圳、武汉分公司正式落地</p>
        <p>2018.04 广州、成都、常州分公司正式落地</p>
        <p>2018.05 北京分公司正式落地</p>
        <p>2018.06 郑州分公司正式落地</p>
        <p>2018.07 徐州、长春、溧水分公司正式落地</p>
        <p>2018.08 济南、芜湖、洛阳、宁波分公司正式落地</p>
        <p>2018.09 阜阳、镇江分公司正式落地</p>
        <p>2018.09 阜阳、镇江分公司正式落地</p>
        <p>2018.12 盐城、亳州分公司正式落地</p>
        <p>2019.01 江阴分公司正式落地</p>
        <br/>
        <span>2019年</span>
        <p>2019.01 江阴分公司正式落地</p>
        <p>2019 预计开通100家分公司</p>
        <br/>
      </div>
      <div class="profile-r profile-r1 fr">
        <img src="./image/qyjs5.jpg"/>
      </div>
    </div><!--中间左边-->
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .about-profile{
    margin-bottom: 20px;
    h1{
      display: inline-block;
      color: @orangeColor;
    }
    span{
      font-size: 18px;
      color: @lightgrey;
    }
    .hr{
      border-bottom: 1px solid @lightgrey;
      margin-bottom: 10px;
    }
    .profile-l{
      width: 55%;
      p{
        line-height: 24px;
        text-indent: 32px;
        color: @borderdark;
      }
    }
    .profile-r{
      width: 35%;
    }
    .profile-r1 img{
      width: 100%;
    }
    .profile-r3 img{
      width: 100%;
    }
    .profile-l1 p{
      font-size: 16px;
      margin-top: 20px;
    }
    .profile-l1 span{
      color: @darkgreyColor;;
    }
  }
</style>
