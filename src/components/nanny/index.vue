<template>
  <div class="container conten"> <!--中间内容-->
    <div class="l-wrap fl"><!--左边内容-->
      <div class="lusive-box"> <!--专属优选-->
        <div class="tlusive">
          <h2 class="tlusive-list font-24">专属优选</h2>
          <div class="icon"></div>
        </div>
        <div class="blusive"></div>
      </div><!--专属优选-->
      <div class="price"><!--服务价格-->

      </div><!--服务价格-->
      <div class="quality"><!--质量保证-->

      </div><!--质量保证-->
      <div class="procedure"><!--签约流程-->

      </div><!--签约流程-->
    </div> <!--左边内容-->
    <div class="r-wrap fr"><!--右边内容-->
      jajaj
    </div> <!--右边内容-->
  </div><!--中间内容-->
</template>
<script>
export default {
}


</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  @import "~static/css/public-style";
  .conten{
    padding-top: 30px;
    .l-wrap{
      width: 79%;
      .lusive-box{
        padding-top: 40px;
        margin-bottom: 30px;
        background-color: @whiteColor;
        .tlusive{
          text-align: center;
          margin-bottom: 30px;
          .tlusive-list{
            border-bottom: 1px solid #d3d3d3;
            padding-bottom: 15px;
            font-weight: normal;
          }

        }
      }
    }
    .r-wrap{
      width: 20%;
    }
  }
</style>
