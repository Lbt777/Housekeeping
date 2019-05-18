<template>
    <div class="main">
        <div class="seat"></div>
        <div class="container title">
            <ul>
                <li>
                    <router-link to="" class="active">临时工</router-link>
                </li>
                <li>
                    <router-link to="">
                        <el-button type="danger" plain>月嫂</el-button>
                    </router-link>
                </li>
                <li>
                    <router-link to="">育婴育儿</router-link>
                </li>
                <li>
                    <router-link to="">入户早教</router-link>
                </li>
                <li>
                    <router-link to="">护理老人</router-link>
                </li>
                <li>
                    <router-link to="">护理病人</router-link>
                </li>
                <li>
                    <router-link to="">VIP服务</router-link>
                </li>
                <li>
                    <router-link to="">固定钟点工</router-link>
                </li>
                <li>
                    <router-link to="">全日制家政</router-link>
                </li>
                <li>
                    <router-link to="">住家型家政</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
@import '~@/static/css/common.less';
.main{
    width: 100%;
    .seat{
        height: 40px;
        background: white;
    }
    .title{
        background-color: #fff;
        width: 100%;
        height: 60px;
        margin-top: 40px;
        margin-bottom: 10px;
        padding-top: 16px;
        ul{
            li{
                margin-left: 16px;
                a{
                    font-size: 16px;
                    display: inline-block;
                    color: @darkorangeColor;
                    border: 1px solid @darkorangeColor;
                    padding: 3px 13px;
                    -webkit-border-radius: 20px;
                    -moz-border-radius: 20px;
                    border-radius: 20px;
                    height: 30px;
                }
            }
        }
    }
}
.tab{
    width: 100%;
    border: 1px solid #ccc;
    padding-top: 30px;
    padding-bottom: 20px;
}
.site{
    padding: 50px;
}
</style>
