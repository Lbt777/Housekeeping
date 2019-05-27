<template>
  <div class="personal-b-r-t">
    <p class="personal-p">订单列表</p>
    <p class="personal-p-s">查看你的列表</p>
    <span class="font-12">找到1个订单</span>
    <ul class="personal-border">
      <li>订单号</li>
      <li>订单状态</li>
      <li>订单提交日期</li>
      <li>操作</li>
    </ul>
    <ul class="personal-borders font-12">
      <li>454571821225364</li>
      <li>订单提交</li>
      <li>2019年5月25日 下午15:46</li>
      <li>
        <router-link to="/personaltab4">
        <span class="span-hover">查看</span>
        </router-link>
        <span class="personal-cancel" >取消订单</span>
      </li>
    </ul>
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
    padding-bottom: 380px;
    .personal-p{
      padding-bottom: 10px;
      border-bottom: 1px solid #cccccc;
    }
    .personal-p-s{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .personal-border{
      margin-top: 20px;
      border: 1px solid @lightgrey;
      line-height: 30px;
      text-align: center;
    }
    ul li{
      width: 25%;
    }
    .personal-borders{
      margin-top: 20px;
      border: 1px solid @lightgrey;
      line-height: 30px;
      text-align: center;
      margin-top: 0;
      border-top: none;
      .span-hover:hover{
        color: @orangeColor;
      }

    }
    .span-hover{
      padding-left: 10px;
      margin-right: 10px;
    }
    .personal-cancel:hover{
      color: @orangeColor;
    }
  }
</style>
