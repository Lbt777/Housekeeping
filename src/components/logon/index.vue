<template>
    <div class="over">
        <img src="./img/login.jpg">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.over{
  position: absolute;
  top: 103px;
  z-index: 999;
  width: 100%;
  img{
      width: 100%;
      height: 729px;
  }
}
</style>
