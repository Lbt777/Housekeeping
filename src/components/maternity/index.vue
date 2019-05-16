<template>
  <div class="container containerself">
    <div class="primary">
      <div class="month-nurse-module01 clearfix">
        <ul>
          <li class="li1"></li>
          <li class="li2"></li>
          <li class="li3"></li>
        </ul>
        <div class="nurse-btn">月嫂在线带人</div>
        <P>月嫂是母婴护理师的俗称，主要是专业护理产妇与新生儿，服务的内容以月子护理为主，新生儿的护理占80%，产妇的护理占20%。月嫂属于高级家政人员，不同于一般的家政护理员。</P>
      </div>
      <div class="fenge-line01"></div>
      <div class="title">
        <h2>服务介绍</h2>
        <i></i>
        <p>专业月嫂，呵护宝宝</p>
      </div>
     <ul class="month-nurse-module02">
       <li>
         <i >01</i>
         <h6 class="pub-color-blue">但偏偏雨渐渐</h6>
         <p>指导正确哺乳  喂养、呵护、洗澡 穿衣、换洗尿布 物品消毒 </p>
       </li>
       <li>
         <i class="pub-color01">02</i>
         <h6 class="pub-color-wred">但偏偏雨渐渐</h6>
         <p>还有多久才能陪在你身边，但故事的最后，你还是说了拜拜</p>
       </li>
       <li>
         <i>03</i>
         <h6 class="pub-color-blue">但偏偏雨渐渐</h6>
         <p>还有多久才能陪在你身边，但故事的最后，你还是说了拜拜</p>
         //<br>
       </li>
       <li>
         <i class="pub-color01">04</i>
         <h6 class="pub-color-wred">但偏偏雨渐渐</h6>
         <p>还有多久才能陪在你身边，但故事的最后，你还是说了拜拜</p>
       </li>
       <li>
         <i>05</i>
         <h6 class="pub-color-blue">但偏偏雨渐渐</h6>
         <p>还有多久才能陪在你身边，但故事的最后，你还是说了拜拜</p>
       </li>
     </ul>
    </div>

    <div class="primary-right">
      <div class="img01"><img class="" src="./img/right_img.jpg"></div>
      <div class="img02"><img class="" src="./img/right_img2.jpg"></div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .containerself{
    margin-top: 30px;
  }
  .primary{
    width: 950px;
   height: 580px;
    float: left;
    background: @whiteColor;
  }
  .primary-right{
    width: 240px;
    height: 806px;
    float: right;
    background: white;
    text-align: center;
    .img01{
      margin-top: 60px;
    }
    .img02{
      margin-top: 90px;
    }
  }
  .month-nurse-module01{
    height: 380px;
  }
  .month-nurse-module01 ul{
    width: 924px;
    height: 198px;
   margin: 60px 0 50px 30px;
  }
  .month-nurse-module01 li{
      width: 198px;
      height: 198px;
      margin: 0 55px;
      padding: 20px;
    }

  .month-nurse-module01 .li1{
    background: url("./img/mon-nurse1.jpg");
  }
  .month-nurse-module01 .li2{
    background: url("./img/mon-nurse2.jpg");
  }
  .month-nurse-module01 .li3{
    background: url("./img/mon-nurse3.jpg");
  }

  .nurse-btn{
    width: 200px;
    height: 35px;
    background-color: @grayorangeColor;
    color: #fff;
    text-align: center;
    line-height: 35px;
    font-size: 18px;
    margin: 0 auto 30px;
    font-weight: normal;
  }
  .month-nurse-module01 p{
      text-align: center;
      width: 660px;
      margin: auto;
      font-size: 16px;
  }
  .fenge-line01{
    width: 950px;
    height: 20px;
    background: @bglightdark;
  }
  .title{
    text-align: center;
  }
  .title h2 {
    color:@grayorangeColor;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .title i{
    background: url("./img/mon-bg1.png");
    display: block;
    width: 244px;
    height: 12px;
    margin: 0 auto 10px;
  }
  .title p {
    font-size: 18px;
    color: @darkgrey;
  }
  .month-nurse-module02{
    height: 291px;
    .pub-color01{
      background:@lightorangeColor ;
    }
  }
  .month-nurse-module02 li i{
    font-family: MV Boli;
    font-size: 40px;
    font-style: normal;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: block;
    width: 82px;
    height: 82px;
    line-height: 82px;
    color: #fff;
    padding-left: 0px;
    background:@blueColor;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 30px;
    margin-left: auto;
  }

  .month-nurse-module02 li{
    width: 178px;
    height: 292px;
    margin: 6px;
    text-align: center;
    background: @whiteColor;
    padding-top: 30px;
    margin-top: 50px;
  }
.month-nurse-module02 li h6{
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: normal;

}

  .month-nurse-module02 li p{
    color: #999;
    line-height: 22px;
    font-size: 14px;
  }
.pub-color-blue{
  color: rgb(3, 148, 243)
}
  .pub-color-wred{
    color: @lightorangeColor;
  }
</style>
