<template>
  <div class="personal-b-r-t">
    <p class="personal-p">订单详情</p>
    <div class="personal-span">
      <span>订单号</span>
      <span>454571821225364</span>
      <span>订单状态:</span>
      <span>订单提交</span>
    </div>
    <div class="personal-titles">
      <span>收货地址</span>
      <p>MOKJON，中国，河北省，石家庄市，长安区，15191025415</p>
    </div>
    <div class="personal-titles">
      <span>备注信息</span>
      <p>暂无备注信息</p>
    </div>
    <div class="personal-titles">
      <span>支付方式</span>
      <p>支付宝</p>
    </div>
    <div class="personal-titles">
      <span>电子券使用情况</span>
      <p>该订单未使用电子券</p>
    </div>
    <div class="personal-titles">
      <span>发票信息</span>
      <p>不需要发票</p>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  @import '~@/static/css/common.less';
  .personal-b-r-t {
    padding: 30px 50px;
    background: @whiteColor;
    padding-bottom: 99px;
    .personal-p{
      padding-bottom: 10px;
      border-bottom: 1px solid #cccccc;
    }
    .personal-span{
      margin: 15px 0 15px 0;
      font-size: 13px;
      padding-bottom: 20px;
      border-bottom: 1px solid #cccccc;
      span{
        margin-left: 40px;
      }
      span:first-child{
        margin-left: 0;
      }
    }
    .personal-titles{
      padding-bottom: 10px;
      border-bottom: 1px solid #cccccc;
      line-height: 30px;
      p{
        font-size: 12px;
      }
    }
  }
</style>
