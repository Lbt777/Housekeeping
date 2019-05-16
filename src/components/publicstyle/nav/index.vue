<template>
    <div class="nav">
        <div class="logo">
            <img src="@/static/img/index-logo.png">
            <div class="address">
                <div class="add">
                    <img src="@/static/img/address.png">
                    <div class=""></div>
                </div>
                <span>南京市</span>
                <div class="city">
                    <p>选择城市</p>
                    <ul>
                        <el-col :span="6"><li>北京市</li></el-col>
                        <el-col :span="6"><li>上海市</li></el-col>
                        <el-col :span="6"><li>深圳市</li></el-col>
                        <el-col :span="6"><li>南京市</li></el-col>
                        <el-col :span="6"><li>杭州市</li></el-col>
                        <el-col :span="6"><li>长沙市</li></el-col>
                        <el-col :span="6"><li>沈阳市</li></el-col>
                        <el-col :span="6"><li>合肥市</li></el-col>
                        <el-col :span="6"><li>哈尔滨市</li></el-col>
                        <el-col :span="6"><li>苏州市</li></el-col>
                        <el-col :span="6"><li>无锡市</li></el-col>
                        <el-col :span="6"><li>常州市</li></el-col>
                        <el-col :span="6"><li>青岛市</li></el-col>
                    </ul>
                </div>
            </div>
        </div>
        <div class="item">
            <ul>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/housekeeping">家政</router-link>
                </li>
                <li>
                    <router-link to="/maternity">月嫂</router-link>
                </li>
                <li>
                    <router-link to="/lactation">催乳师</router-link>
                </li>
                <li>
                    <router-link to="/parenting">育儿嫂</router-link>
                </li>
                <li>
                    <router-link to="/nanny">保姆</router-link>
                </li>
                <li>
                    <router-link to="/cooperation">城市合作</router-link>
                </li>
                <li>
                    <router-link to="/personal">个人中心</router-link>
                </li>
                <li>
                    <router-link to="/subscribe">在线预约</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
@import "~./nav.less";
@import '~@/static/css/common.less';
</style>
