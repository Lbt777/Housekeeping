<template>
  <div>
    <div class="question-title">
      <h2>常见问题</h2>
      <p>Frequently Asked Questions</p>
      <img src="./image/fwcn.jpg"/>
    </div>
    <ul class="question-warp">
      <li>
        <div class="question-list fl">
          <span>14</span>
          <br>
          <br/>
          <p>Mar ,2018</p>
          <br>
          <img src="./image/hyxw.png"/>
        </div>
        <div class="question-img fl">
          <img src="./image/hyfw.gif"/>
        </div>
        <div class="question-text fr">
          <p>保姆“荒”究竟“荒”在何处</p>
          <br>
          <p>不论消费者的期待如何高远，均不能改变一个基本事实：来到大城市充任住家保姆的农村女性，大多为仅接受过简单培训的低学历或半文盲妇女，在完全没有城市生活经验的情况下，就被推到了以现代消费理念武装起来的雇主面前。</p>
        </div>
      </li>
      <li>
        <div class="question-list fl">
          <span>12</span>
          <br>
          <br/>
          <p>Mar ,2018</p>
          <br>
          <img src="./image/hyxw.png"/>
        </div>
        <div class="question-img fl">
          <img src="./image/cjwt.jpg"/>
        </div>
        <div class="question-text fr">
          <p>家政雇主思想需转变</p>
          <br>
          <p>按理说，随着农村大量闲置劳动力涌入城市，保姆的供应量应该只增不减，而且，保姆的待遇也应由此日渐提高，可为什么还会出现保姆难找的现象呢?</p>
        </div>
      </li>
      <li>
        <div class="question-list fl">
          <span>9</span>
          <br>
          <br/>
          <p>Mar ,2018</p>
          <br>
          <img src="./image/hyxw.png"/>
        </div>
        <div class="question-img fl">
          <img src="./image/hyfw2.gif"/>
        </div>
        <div class="question-text fr">
          <p>做让人放心的家政</p>
          <br>
          <p>随着城市社会化程度的不断提高，保洁、保姆等家政服务与百姓生活日益紧密，但由于存在许多不规范的地方，因此家政服务业成为消费者投诉的新热点。</p>
        </div>
      </li>
      <li>
        <div class="question-list fl">
          <span>8</span>
          <br>
          <br/>
          <p>Mar ,2018</p>
          <br>
          <img src="./image/hyxw.png"/>
        </div>
        <div class="question-img fl">
          <img src="./image/hyfw4.gif"/>
        </div>
        <div class="question-text fr">
          <p>如何聘请放心保姆</p>
          <br>
          <p>应该如何聘请保姆呢?很多雇主对自己聘请的保姆的来源没有底，导致发生财物流失后无处可寻，也无从追究其责任。南京好的保姆预约热线：4006664555</p>
        </div>
      </li>
      <li>
        <div class="question-list fl">
          <span>7</span>
          <br>
          <br/>
          <p>Mar ,2018</p>
          <br>
          <img src="./image/hyxw.png"/>
        </div>
        <div class="question-img fl">
          <img src="./image/hyfw.gif"/>
        </div>
        <div class="question-text fr">
          <p>从低保户变身“新贵”</p>
          <br>
          <p>从一间30多平方米的小店铺发展到3家家政公司，从最初的帮人换煤气、找保姆、打扫卫生，到经营10余项家政服务业务。短短5年时间，外来务工的于建忠由一名低保户变身为远近闻名的家政公司小老板。</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .question-title{
    margin-top: 50px;
    text-align: center;
    color: @orangeColor;
    margin-bottom: 50px;
    p{
      margin-top: 15px;
      margin-bottom: 15px;
      color: @lightgrey;
    }
  }
  .question-warp li{
    width: 100%;
    margin-bottom: 70px;
    padding: 25px;
    border: 1px solid transparent;
    .question-list{
      width: 15%;
      text-align: center;
      span{
        font-size: 42px;
        color: @orangeColor;
        font-weight: bolder;
      }
      }
    .question-img{
     width: 25%;
      img{
        max-width: 100%;
      }
    }
    .question-text{
      width: 55%;
      display: inline-block;
      p{
        line-height: 25px;
      }
      p:first-child{
        font-size: 20px;
      }
      p:first-child:hover{
        color: @orangeColor;
      }
    }
  }
  .question-warp li:hover{
    border: 1px solid @orangeColor;
  }
</style>
