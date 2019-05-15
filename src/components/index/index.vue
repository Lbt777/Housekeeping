<template>
    <div class="index">
        <div class="banner">
            <el-carousel :interval="5000" arrow="always" height="729px">
                <el-carousel-item v-for="item in imgs" :key="item">
                    <img :src="item">
                </el-carousel-item>
            </el-carousel>
            <div class="nav">
                <div class="logo">
                    <img src="@/static/img/index-logo.png">
                    <div class="address">
                        <div class="add">
                            <img src="@/static/img/address.png">
                        </div>
                        <span>南京市</span>
                    </div>
                </div>
                <div class="item">
                    <ul>
                        <li>
                            <a href="#">首页</a>
                        </li>
                        <li>
                            <a href="#">家政</a>
                        </li>
                        <li>
                            <a href="#">月嫂</a>
                        </li>
                        <li>
                            <a href="#">催乳师</a>
                        </li>
                        <li>
                            <a href="#">育儿嫂</a>
                        </li>
                        <li>
                            <a href="#">保姆</a>
                        </li>
                        <li>
                            <a href="#">城市合作</a>
                        </li>
                        <li>
                            <a href="#">个人中心</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import banner1 from '@/static/img/banner-1.jpg'
import banner2 from '@/static/img/banner-2.jpg'
import banner3 from '@/static/img/banner-3.jpg'
import banner4 from '@/static/img/banner-4.jpg'
import banner5 from '@/static/img/banner-5.jpg'
export default {
  data () {
    return {
      imgs: [banner1, banner2, banner3, banner4, banner5]
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/css/common.less';
.banner{
    position: relative;
    color: #000;
}
.el-carousel__item img{
    width: 100%;
    height: 100%;
}
.nav{
    position: absolute;
    top: 0;
    margin: auto;
    z-index: 999;
    width: 100%;
}
.logo{
    float: left;
    .address{
        float: right;
        .add{
            height: 20px;
            width: 20px;
            display: inline-block;
            img{
                width: 100%;
                height: 100%;
            }
        }
        span{
                float: right;
            }
    }
}

.item{
    float: right;
    ul{
        // padding-bottom: 40px;
        font-size: 18px;
        li{
            line-height: 100px;
            width: 100px;
            text-align: center;
            a{
                height: 60%;
                display: inline-block;
                border-top: 3px solid transparent;
                &:hover{
                    border-top: 3px solid red;
                }
            }
        }
    }
}
</style>
