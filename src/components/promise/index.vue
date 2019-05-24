<template>
    <div class="container promise ">
      <div class="promise-nav promise-nav-list"> <!--导航条-->
        <div class="promise-nav-list">
          <span class="font-20">首页</span>
          <span> / </span>
          <span>服务承诺</span>
        </div>
      </div><!--导航条-->
      <div class="promise-contain clearfix"> <!--中间内容-->
        <div class="promise-l fl">
          <div class="promise-box clearfix">
            <div class="fl">
              <img  src="./image/fwcn.jpg"/>
            </div>
            <div class="promise-box-list fr">
              <img src="./image/fwcn.png"/>
              <span>专业高效，流程标准</span>
              <p>用专业的能力和严格的标准提升服务效率</p>
              <p>使客户享受到优质、规范的服务。</p>
              <p class="p3">一站式的服务流程，一对一的服务标准化，</p>
              <p>让客户满意、放心！</p>
            </div>
          </div>
          <div class="hr"></div>
          <div class="promise-warp">
            <ul>
              <li>
                <div class="promise-boximg">
                  <img src="./image/fwcn1.png"/>
                  <img src="./image/fwcn2.png"/>
                </div>
                <div class="promise-title">
                  <div class="promise-list">
                    <span class="fl font-18">阿姨爽约</span>
                    <h1 class="fr ">替</h1>
                    <p class="clearfix">阿姨因特殊原因不能在规定时间内进行服务，e家政将征得客户同意后为客户替换其它阿姨进行服务或退款。</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="promise-boximg">
                  <img src="./image/fwcn3.png"/>
                  <img src="./image/fwcn4.png"/>
                </div>
                <div class="promise-title">
                  <div class="promise-list">
                    <span class="fl font-18">打扫不干净</span>
                    <h1 class="fr ">免</h1>
                    <p class="clearfix">阿姨未达到标准，免费进行第二次保洁服务。</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="promise-boximg">
                  <img src="./image/fwcn5.png"/>
                  <img src="./image/fwcn6.png"/>
                </div>
                <div class="promise-title">
                  <div class="promise-list">
                    <span class="fl font-18">补偿服务时间</span>
                    <h1 class="fr ">赔</h1>
                    <p class="clearfix">阿姨服务过程中，造成客户物品损坏或财产损失，e家政将及时联系保险公司做好理赔工作。</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="promise-boximg">
                  <img src="./image/fwcn7.png"/>
                  <img src="./image/fwcn8.png"/>
                </div>
                <div class="promise-title">
                  <div class="promise-list">
                    <span class="fl font-18">服务不满意</span>
                    <h1 class="fr ">换</h1>
                    <p class="clearfix">客户在阿姨保洁过程之中对服务不满意，可提出更换阿姨。</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="promise-boximg">
                  <img src="./image/fwcn9.png"/>
                  <img src="./image/fwcn10.png"/>
                </div>
                <div class="promise-title">
                  <div class="promise-list">
                    <span class="fl font-18">补偿服务时间</span>
                    <h1 class="fr ">补</h1>
                    <p class="clearfix">阿姨故意推延服务时间、磨洋工，导致未在规定服务时间内完成服务，经核实后为客户补偿相应服务时间。</p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="but-img">
              <img src="./image/fwcn0.jpg"/>
            </div>
          </div>
        </div><!--中间左边-->
        <div class="promise-r fr">
          <copyright/>
        </div><!--中间右边-->
      </div><!--中间内容-->
    </div>
</template>
<script>
  import copyright from 'com/publicstyle/copyright'
export default {
  components: {
    copyright
  }
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .promise{
    margin-top: 55px;
    margin-bottom: 55px;
    .promise-nav{
      width: 100%;
      height: 38px;
      line-height: 38px;
      background: @whiteColor;
      margin: 0 0 10px;
      .promise-nav-list{
        padding: 0 0 0 45px;
        background: url("./image/fwcn.gif") no-repeat 20px center;
      }
    }
    .promise-l{
      width: 79%;
      position: relative;
      background: @whiteColor;
      .promise-box{
        margin: 70px 60px 70px 60px;
        .promise-box-list span{
          font-size: 20px;
          display: block;
          margin: 10px 0 30px 0;
        }
        .promise-box-list p{
          font-size: 16px;
          line-height: 30px;
        }
        .promise-box-list .p3{
          margin-top: 30px;
        }
      }
      .hr{
        width: 910px;
        height: 2px;
        border-bottom: 1px solid #f0f0f0;
        display: block;
        margin: 0 auto;
      }
      .promise-warp{
        margin: 80px 57px 70px 50px;
        .but-img{
          bottom: -3px;
          right: 0;
          position: absolute;
        }
      }
      .promise-warp ul li{
        width: 33%;
        margin-bottom: 80px;
        .promise-title{
          background: url("./image/fwcn11.png") no-repeat;
          border-bottom: 2px solid @orangeColor;
          height: 173px;
          .promise-list{
            padding: 50px 18px 0 18px;
            p{
              color: @darkgrey;
              line-height: 22px;
            }
          }
          .promise-list h1{
            font-size: 32px;
            color: @orangeColor;
          }
        }
      }
      .promise-warp ul li .promise-boximg{
        margin: 0 0 -20px 20px;
      }
      .promise-warp ul li .promise-boximg img:first-child{
        display: inline-block;
      }
      .promise-warp ul li .promise-boximg img:last-child{
        display: none;
      }
      .promise-warp ul li .promise-boximg:hover img:first-child{
        display: none;
      }
      .promise-warp ul li .promise-boximg:hover img:last-child{
        display: inline-block;
      }
      .promise-warp ul li .promise-title{
        width: 95%;
      }
    }
  }
</style>
