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
                <div>
                  <img src="./image/fwcn1.png"/>
                  <img src="./image/fwcn2.png"/>
                </div>
              </li>
              <li>
                <div>
                  <img src="./image/fwcn3.png"/>
                  <img src="./image/fwcn4.png"/>
                </div>
              </li>
              <li>
                <div>
                  <img src="./image/fwcn5.png"/>
                  <img src="./image/fwcn6.png"/>
                </div>
              </li>
              <li>
                <div>
                  <img src="./image/fwcn7.png"/>
                  <img src="./image/fwcn8.png"/>
                </div>
              </li>
              <li>
                <div>
                  <img src="./image/fwcn9.png"/>
                  <img src="./image/fwcn10.png"/>
                </div>
              </li>
            </ul>
          </div>
        </div><!--中间左边-->
        <div class="promise-r fr">
          afdf
        </div><!--中间右边-->
      </div><!--中间内容-->
    </div>
</template>
<script>
export default {
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
        margin: 136px 57px 70px 50px;
      }
    }
  }
</style>
