<template>
  <div class="about container">
    <div class="about-nav about-nav-list"> <!--导航条-->
      <div class="about-nav-list">
        <el-row>
          <router-link to="/contact1">
          <el-button type="danger" plain>
            企业介绍
          </el-button>
          </router-link>
          <router-link to="/contact2">
          <el-button type="danger" plain>
            团队介绍
          </el-button>
          </router-link>
          <el-button type="danger" plain>企业动态</el-button>
          <el-button type="danger" plain>行业新闻</el-button>
          <el-button type="danger" plain>常见问题</el-button>
          <el-button type="danger" plain>e家政视频</el-button>
          <el-button type="danger" plain>联系方式</el-button>
        </el-row>
      </div>
    </div><!--导航条-->
    <div class="about-contain clearfix"> <!--中间内容-->
      <div class="about-l fl"><!--中间左边-->
        <router-view></router-view>
      </div><!--中间左边-->
      <div class="about-r fr">
        afdf
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
  }
</style>
