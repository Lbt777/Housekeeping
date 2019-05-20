<template>
    <div class="main">
        <div class="seat"></div>
        <div class="container title">
            <ul>
                <li>
                    <router-link to="/subscribetab1">
                        <el-button type="danger" plain>临时工</el-button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/subscribetab2">
                        <el-button type="danger" plain>月嫂</el-button>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <el-button type="danger" plain>育婴育儿</el-button>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <el-button type="danger" plain>入户早教</el-button>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <el-button type="danger" plain>护理老人</el-button>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <el-button type="danger" plain>护理病人</el-button>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <el-button type="danger" plain>VIP服务</el-button>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <el-button type="danger" plain>固定钟点工</el-button>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <el-button type="danger" plain>全日制家政</el-button>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <el-button type="danger" plain>住家型家政</el-button>
                    </router-link>
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
                    overflow:hidden;
                    font-size: 16px;
                    display: inline-block;
                    color: @darkorangeColor;
                    border: 1px solid @darkorangeColor;
                    -webkit-border-radius: 20px;
                    -moz-border-radius: 20px;
                    border-radius: 20px;
                    height: 31px;
                    button{
                        width: 83px;
                        height:100%;
                        border: none;
                    }
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
