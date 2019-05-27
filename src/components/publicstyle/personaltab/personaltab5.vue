<template>
  <div class="personal-b-r-t">
    <p class="personal-p">我的心愿清单</p>
    <p class="personal-p-s">你的心愿清单是空的。</p>
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
    padding-bottom: 486px;
    .personal-p{
      padding-bottom: 10px;
      border-bottom: 1px solid #cccccc;
    }
    .personal-p-s{
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 12px;
    }
  }
</style>
