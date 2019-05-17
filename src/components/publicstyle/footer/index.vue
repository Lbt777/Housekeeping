<template>
    <div class="foot">
        <ul class="foot-top font-14">
            <li>
                <router-link to="/">e家政首页</router-link>
            </li>
            <span>丨</span>
            <li>
                <router-link to="/about">关于我们</router-link>
            </li>
            <span>丨</span>
            <li>
                <router-link to="/promise">服务承诺</router-link>
            </li>
            <span>丨</span>
            <li>
                <router-link to="/security">安全保障</router-link>
            </li>
            <span>丨</span>
            <li>
                <router-link to="/subscribe">在线预约</router-link>
            </li>
            <span>丨</span>
            <li>
                <router-link to="/">联系我们</router-link>
            </li>
        </ul>
        <ul class="foot-phone">
            <li class="icon1">
                <a href="#"></a>
            </li>
            <li class="icon2">
                <a href="#"></a>
            </li>
            <li class="icon3">
                <a href="#"></a>
            </li>
        </ul>
        <div class="copyright font-14">
            <p>copyright © 2013-2016 <router-link to="/">www.51ejz.com</router-link> All Rights Reserved. Support by chemguan.com</p>
            <p>版权所有：e家政隶属于江苏洁瑞达信息科技有限公司</p>
            <p>e家政专注互联网家政平台,e家政提供日常保洁、开荒保洁、钟点工、御厨到家、搬家、甲醛检测治理、月嫂、催乳师、育儿嫂、保姆等家政服务,官方电话：400-666-4555</p>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
@import "~./footer.less";
@import '~@/static/css/common.less';
</style>
