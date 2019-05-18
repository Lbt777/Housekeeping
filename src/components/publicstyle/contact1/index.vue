<template>
  <div>
  <div class="about-profile "><!--中间左边-->
    <h1>企业简介</h1>
    <span>Introduction</span>
    <div class="hr"></div>
    <div class="profile-l fl">
      <p>e家政是江苏洁瑞达信息科技有限公司依托中国软件谷、南京大数据产业基地投资打造的互联网居家生活服务垂直平台。</p>
      <p>自主研发一整套管理系统、培训体系，已通过国家质量管理体系( GB/T19001-2016/IS9001:2015标准)认证，可提供全屋保洁、家电清洗、开荒保洁等28种居家生活服务，用户可通过官网、微信、APP、 电商团购、400热线等预约各项服务。</p>
      <p>服务区域已覆盖北京、上海、广州、深圳、南京、杭州、武汉等全国60+大中型城市。</p>

    </div>
    <div class="profile-r fr">age</div>
  </div><!--中间左边-->
  <div class="about-profile "><!--中间左边-->
  </div><!--中间左边-->
  <div class="about-profile "><!--中间左边-->
  </div><!--中间左边-->
  <div class="about-profile "><!--中间左边-->
  </div><!--中间左边-->
  </div>
</template>
<script>
    export default {}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .about-profile{
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
    }
    .profile-r{
      width: 35%;
    }
  }
</style>
