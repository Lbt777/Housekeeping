<template>
  <div class="about container">
    <div class="about-nav about-nav-list"> <!--导航条-->
      <div class="about-nav-list">
        <el-row>
          <router-link to="/contact1">
            <el-button type="danger" plain>企业介绍</el-button>
          </router-link>
          <router-link to="/contact2">
            <el-button type="danger" plain>团队介绍</el-button>
          </router-link>
          <router-link to="/contact3">
          <el-button type="danger" plain>行业新闻</el-button>
          </router-link>
          <router-link to="/contact4">
            <el-button type="danger" plain>常见问题</el-button>
          </router-link>
          <router-link to="/contact5">
            <el-button type="danger" plain>联系方式</el-button>
          </router-link>
        </el-row>
      </div>
    </div><!--导航条-->
    <div class="about-contain clearfix"> <!--中间内容-->
      <div class="about-l fl"><!--中间左边-->
        <router-view></router-view>
      </div><!--中间左边-->
      <div class="about-r fr"><!--中间右边-->
        <div class="about-title">
          <p>服务项目</p>
        </div>
        <ul class="about-lists">
          <li>
            <img src="./image/gywm.jpg"/>
            <br>
            <span>月嫂</span>
            <p>指导正确哺乳、喂养、呵护、</p>
            <p>洗澡、穿衣、换洗尿布、物品消毒 </p>
          </li>
          <li>
            <img src="./image/gywm2.jpg"/>
            <br>
            <span class="about-s">保姆</span>
            <p>带小孩、照顾老人、</p>
            <p>做饭、烹饪、花草养护 </p>
          </li>
          <li>
            <img src="./image/gywm3.jpg"/>
            <br>
            <span class="about-ss">催乳师</span>
            <p>催乳、开奶、科学无痛回奶、</p>
            <p>哺乳期乳腺养护、深度乳腺管疏通 </p>
          </li>
          <div class="about-g">更多服务>></div>
        </ul>
        <div class="about-tl">
          <div class="about-tl-img"> </div>
          <span>电话咨询：</span>
          <span>400-666-4555</span>
        </div>
      </div><!--中间右边-->
    </div><!--中间内容-->

  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .about {
    margin-top: 55px;
    margin-bottom: 55px;
    .about-nav {
      width: 100%;
      height: 60px;
      line-height: 60px;
      background: @whiteColor;
      margin: 0 0 10px;
      .about-nav-list {
        padding: 0 0 0 20px;
        .el-button--danger.is-plain {
          width: 90px;
          line-height: 30px;
        }
      }
    }
    .about-l{
      width: 79%;
      position: relative;
      background: @whiteColor;
      padding: 20px;
    }
    .about-r{
      background: @whiteColor;
      width: 20%;
      .about-title{
        border-bottom: 1px solid #cccccc;
        p{
          padding: 10px 0 15px 10px ;
          border-bottom: 2px solid @orangeColor ;
          width: 80px;
        }
      }
      .about-lists{
        text-align: center;
        margin:0 auto;
        padding-top: 20px;
      li{
        margin-bottom: 20px;
        float: none;
        span{
          display: block;
          color: #01beaf;
          font-size: 18px;
          font-weight: bolder;
          margin: 15px 0 15px 0;
        }
        p{
          font-size: 12px;
          color: @lightgrey;
        }
        .about-s{
          color: @orangeColor;
        }
        .about-ss{
          color: #ffb424;
        }
      }
      .about-g{
        color: #FFFFFF;
        font-size: 12px;
        background-color: #FF7125;
        padding: 3px 5px;
        width: 40%;
        margin-left: 115px;
        margin-bottom: 15px;
        }
      }
    }
    .about-tl{
      margin: 20px 0 20px 0;
      .about-tl-img{
        background: url("./image/aboiut.png") no-repeat;
        height: 35px;
        margin-left: 20px;
        width: 40px;
        display: inline-block;
      }
    }
  }
</style>
