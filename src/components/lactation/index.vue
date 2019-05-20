<template>
  <div class="container clearfix">
    <div class="top-des">
      <h6>您是否对催乳师感到疑惑？</h6>
      <p>催乳师，是对专门催乳的人员的一种称呼，
        催乳师就是通过催乳技术即中医推拿手法，为产妇解决产后无乳、
        乳少等症状的专业护理人员。</p>
      <b></b>
    </div>
    <div class="primary">
    <div class="primary-left">
      <div class="modules01">
        <div class="title">
          <h2>服务内容</h2>
        </div>
        <div class="tab-next">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="母乳哺育" name="first">
              <ul class="ul1">
                <li>
                  <b class="tab-b">01</b>
                  <span class="tab-span">开奶</span>
                  <p class="tab-p">催乳师通过专业知识和技能帮助产妇建立泌乳反射的过程。</p>
                  <i class="tab-i"></i>
                  <em class="tab-em"></em>
                  <samp class="tab-samp"></samp>
                </li>
                <li>
                  <b class="tab-b">02</b>
                  <span class="tab-span">少奶（无奶）</span>
                  <p class="tab-p">催乳师通过专业知识和技能解决产妇少奶或者是无奶的问题。</p>
                  <i class="tab-i"></i>
                  <em class="tab-em"></em>
                  <samp class="tab-samp"></samp>
                </li>
                <li>
                  <b class="tab-b">03</b>
                  <span class="tab-span">乳房肿胀</span>
                  <p class="tab-p">产妇由于各种原因导致乳房奶块形成，催乳师通过中医理论和手法消除奶块使乳腺通畅。</p>
                  <i class="tab-i"></i>
                  <em class="tab-em"></em>
                  <samp class="tab-samp"></samp>
                </li>
                <li>
                  <b class="tab-b">04</b>
                  <span class="tab-span">产褥期乳汁淤积型乳腺炎</span>
                  <p class="tab-p">催乳师通过科学的方法帮助产妇解决产褥期内由于乳汁淤积而形成的乳腺炎。</p>
                  <i class="tab-i"></i>
                  <em class="tab-em"></em>
                  <samp class="tab-samp"></samp>
                </li>
                <li>
                  <b class="tab-b">05</b>
                  <span class="tab-span">哺乳期急性乳腺炎</span>
                  <p class="tab-p">催乳师通过科学的方法解决产妇在哺乳期而发生的急性乳腺炎。</p>
                  <i class="tab-i"></i>
                  <em class="tab-em"></em>
                  <samp class="tab-samp"></samp>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="乳腺护理" name="second">
              <ul class="ul1">
                <li>
                  <b class="tab-b">01</b>
                  <span class="tab-span">科学无痛回奶</span>
                  <p class="tab-p">通过催乳师无痛回奶手法和饮食指导使婴儿断奶后让乳房不再分泌乳汁，使乳房更加健康。</p>
                  <i class="tab-i"></i>
                  <em class="tab-em"></em>
                  <samp class="tab-samp"></samp>
                </li>
                <li>
                  <b class="tab-b">02</b>
                  <span class="tab-span">哺乳期乳腺养护</span>
                  <p class="tab-p">通过催乳师的科学手法操作及相应的母婴知识指导可防止乳房下垂，避免乳头皲裂,更有利于促进乳汁分泌。</p>
                  <i class="tab-i"></i>
                  <em class="tab-em"></em>
                  <samp class="tab-samp"></samp>
                </li>
                <li>
                  <b class="tab-b">03</b>
                  <span class="tab-span">哺乳期小叶增生调理</span>
                  <p class="tab-p">通过催乳师相应的手法操作及哺乳科学知识指导最大限度的解决哺乳期小叶增生问题。</p>
                  <i class="tab-i"></i>
                  <em class="tab-em"></em>
                  <samp class="tab-samp"></samp>
                </li>
                <li>
                  <b class="tab-b">04</b>
                  <span class="tab-span">哺乳期乳房外形调整</span>
                  <p class="tab-p">催乳师通过中医理论和手法最大限度的恢复产妇乳房哺乳前的挺拔.</p>
                  <i class="tab-i"></i>
                  <em class="tab-em"></em>
                  <samp class="tab-samp"></samp>
                </li>
                <li>
                  <b class="tab-b">05</b>
                  <span class="tab-span">深度乳腺管疏通</span>
                  <p class="tab-p">产妇在哺乳断奶后没有把奶水排干净，经过一段时间后奶水变质,催乳师通过特定的手法排出残奶使乳腺组织更加健康。</p>
                  <i class="tab-i"></i>
                  <em class="tab-em"></em>
                  <samp class="tab-samp"></samp>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
     <div class="fenge-line"></div>
      <div class="modules02">
        <div class="title">
          <h2>服务价格</h2>
        </div>
        <div class="table-des">
        <table cellpadding="0" cellspacing="0">
          <thead>
          <tr>
            <td></td>
            <td>类型</td>
            <td>价格</td>
            <td>套餐</td>
            <td  id="last-td">服务项目</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="td1" id="td1">催乳</td>
            <td>单次</td>
            <td class="td_bg">600元/次</td>
            <td>
              1200元/3次
              <br>
              1500元/5次
            </td>
            <td class="td_bg"></td>
          </tr>
          <tr>
            <td class="td1">开奶</td>
            <td>单次</td>
            <td class="td_bg">600元/次</td>
            <td>
              1200元/3次
              <br>
              1500元/5次
            </td>
            <td class="td_bg"></td>
          </tr>
          <tr>
            <td class="td1">少奶</td>
            <td>套餐</td>
            <td class="td_bg">
              第一疗程
              <br>
              第二疗程
              <br>
              第三疗程
            </td>
            <td>
              1200元/3次
              <br>
              1200元/3次
              <br>
              1200元/3次
              <br>
            </td>
            <td class="td_bg">
              做满两个疗程：减100并赠送乳腺养护1次
              做满三个疗程：减200并赠送乳腺养护1次
            </td>
          </tr>
          <tr>
            <td class="td1" rowspan="2">乳房肿胀</td>
            <td>单次</td>
            <td class="td_bg">800元/次</td>
            <td>
            </td>
            <td class="td_bg"></td>
          </tr>
          <tr>
            <td>套餐</td>
            <td class="td_bg">
             第一疗程
              <br>
              第二疗程
            </td>
            <td>
              1500元/3次
              <br>
              1500元/3次
            </td>
            <td class="td_bg">做满两个疗程：减100并赠送乳腺养护1次</td>
          </tr>
          <tr>
            <td class="td1"  rowspan="2">产褥期乳汁淤积型乳腺炎</td>
            <td>单次</td>
            <td class="td_bg">800元/次</td>
            <td>
            </td>
            <td class="td_bg"></td>
          </tr>
          <tr>
            <td>套餐</td>
            <td class="td_bg">
              第一疗程
              <br>
              第二疗程
              <br>
              第三疗程
              <br>
              第四疗程
            </td>
            <td>
             2000元/3次
              <br>
              2000元/3次
              <br>
              2000元/3次
              <br>
              2000元/3次
              <br>
            </td>
            <td class="td_bg">
              做满两个疗程：减100并赠送乳腺养护1次
              <br>
              做满三个疗程：减200并赠送乳腺养护1次
              <br>
              做满四个疗程：减300并赠送乳腺养护1次
              <br>
            </td>
          </tr>
          <tr>
            <td class="td1 have-hr" style="padding-right: 20px;">
              哺乳期乳腺养护
              <hr>
              哺乳期小叶增生
              调理
              <hr>
              哺乳期乳房外形
              调整
              <hr>
              深度乳腺管疏通
            </td>
            <td>套餐</td>
            <td class="td_bg">600元/次</td>
            <td>
              2000元/5次
              <br>
              2000元/5次
              <br>
              2000元/5次
              <br>
              2000元/5次
              <br>
            </td>
            <td class="td_bg">
              做满两个疗程：减100并赠送乳腺养护1次
              <br>
              做满三个疗程：减200并赠送乳腺养护1次
              <br>
              做满四个疗程：减300并赠送乳腺养护1次
            </td>
          </tr>
          <tr>
            <td class="td1">哺乳期乳腺养护</td>
            <td>套餐</td>
            <td class="td_bg">
              A
              <br>
              B
            </td>
            <td>
              1800元/4次
              <br>
              2500元/6次
            </td>
            <td class="td_bg">
              赠送乳房外形调整1次
              <br>
              赠送乳房外形调整2次
            </td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div class="fenge-line"></div>
      <div class="modules03">
        <div class="title">
          <h2>服务价格</h2>
        </div>
        <div class="modules03-des">
          <ul>
          <li class="li1">
            <a></a>
            <p>在线预约</p>
          </li>
          <li class="li2">
            <a></a>
            <p>体验服务</p>
          </li>
          <li class="li3">
            <a></a>
            <p>定制套餐</p>
          </li>
          <li class="li4">
            <a></a>
            <p>平台派单</p>
          </li>
          <li class="li5">
            <a></a>
            <p>完成服务</p>
          </li>
          <li class="li6">
            <a></a>
            <p>客户回访</p>
          </li>
          </ul>
        </div>
      </div>
      <div class="fenge-line"></div>
      <div class="modules04">
        <div class="title">
          <h2>催乳师风采</h2>
        </div>
        <ul class="modules04-ul">
          <li>
            <div class="content01">
              <p>
                吴老师&nbsp;&nbsp;&nbsp;&nbsp;38岁
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
              </p>
              <p>
                7年工作经验
                <br>
                可以上岗&nbsp;&nbsp;已上保险
              </p>
            </div>
            <div class="person">
              <a>
             <img src="http://www.51ejz.com/images/cuiru4.png">
            </a>
            </div>
            <a class="yuyue">预约体验</a>
          </li>
          <li>
            <div class="content01" id="modules04-li2">
              <p>
                吴老师&nbsp;&nbsp;&nbsp;&nbsp;38岁
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
              </p>
              <p>
                7年工作经验
                <br>
                可以上岗&nbsp;&nbsp;已上保险
              </p>
            </div>
            <div class="person" id="person02">
              <a>
                <img src="http://www.51ejz.com/images/cuiru4.png">
              </a>
            </div>
            <a class="yuyue">预约体验</a>
          </li>
          <li>
            <div class="content01">
              <p>
                吴老师&nbsp;&nbsp;&nbsp;&nbsp;38岁
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
                <img src="./img/rcbj-list-star.png">
              </p>
              <p>
                7年工作经验
                <br>
                可以上岗&nbsp;&nbsp;已上保险
              </p>
            </div>
            <div class="person">
              <a>
                <img src="http://www.51ejz.com/images/cuiru4.png">
              </a>
            </div>
            <a class="yuyue">预约体验</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="primary-right">
      <div class="img01"><img class="" src="./img/right_img.jpg"></div>
      <div class="img02"><img class="" src="./img/right_img2.jpg"></div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('.primary-right').offsetTop
      if (scrollTop <= 1040) {
        offsetTop = 1040 - Number(scrollTop)
        document.querySelector('.primary-right').style.top = offsetTop + 'px'
      } else {
        document.querySelector('.primary-right').style.top = '0px'
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="less" scoped >
  @import '~static/css/common.less';

  .modules01 ul li{
   background: url("./img/cuiru-bg2.jpg") no-repeat center ;
    width: 240px;
    height: 206px;
    position: relative;
    float: left;
    margin: 0px 25px 50px;
    display:block;
   }
  a{
    cursor:pointer
  }
  .container .top-des{
    padding: 50px 0px;
    position: relative;
    background: @whiteColor;
  }
.container .top-des h6{
    color: #E95513;
    font-size: 18px;
    margin-bottom: 15px;
}
  .container .top-des p{
    color: #E95513;
  }
  .container  .top-des b {
    display: block;
    position: absolute;
    left: 43px;
    bottom: -34px;
    width: 68px;
    height: 68px;
    background: url(./img/cuiru-icon.png) no-repeat center;
  }
  .primary{
   margin-top: 50px;
  }
  .primary-left{
    width: 950px;
    float: left;
    background: @whiteColor;
  }
  .title{
    text-align: center;
  }
  .title h2 {
    background: url(./img/cuiru-bg.png) no-repeat center;
    color: #E95513;
    font-size: 24px;
    height: 34px;
    margin-bottom: 40px;
    margin-top: 40px;
  }
   .title  p {
    margin-bottom: 50px;
  }
   .title p a{
    display: inline-block;
    width: 103px;
    height: 33px;
    line-height: 33px;
    font-size: 16px;
    color: #666;
  }
  .primary-right{
    position: fixed;
    width: 240px;
    top: 1040px;
    right: 75px;
    z-index: 999;
    background: white;
    text-align: center;
    .img01{
      margin-top: 60px;
    }
    .img02{
      margin-top: 90px;
    }
  }
 /deep/ .el-tabs__nav-scroll {
    overflow: hidden;
    margin-left: 400px;
  }
  /deep/ .el-tabs__item.is-active {
    color: #E95513;
    &:hover{
      color: #E95513;
    }
  }
  /deep/.el-tabs__active-bar{
    background-color: #E95513;
  }
  .tab-next .ul1{
    margin-left: 40px;
  }
  .tab-next  .ul1 li{
    padding-top: 20px;
  }
  .tab-b{
    display: block;
    font-size: 36px;
    margin-bottom: 7px;
    text-align: center;
    font-weight: normal;
    color:#E95513 ;
  }
  .tab-span{
    display: block;
    font-size: 16px;
    color: #E95513;
    margin-bottom: 20px;
    text-align: center;
  }
.tab-p{
  margin: 0 15px;
  font-size: 12px;
  line-height: 20px;
}
.tab-i{
  position: absolute;
  background: url(./img/cuiru-bg3.png) no-repeat center;
  width: 26px;
  height: 23px;
  top: 40px;
  right: 96px;
}
.tab-em{
  position: absolute;
  width: 40px;
  height: 3px;
  background-color: #fff;
  top: 63px;
  left: 0;
  right: 0;
  margin: auto;
}
.tab-samp{
  position: absolute;
  display: block;
  bottom: 3px;
  right: 3px;
  z-index: 100;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 6px;
  border-color: transparent #fff #fff transparent;
}
.tab-next  .ul1 li:hover{
  background:#E95513  ;
  color: @whiteColor;
  .tab-b{
  color: @whiteColor;
}
  .tab-span{
    color: @whiteColor;
  }
  .tab-i{
    display: none;
  }
}
.fenge-line{
  width: 950px;
  background: @bglightdark;
  height: 30px;
}
.table-des{
  width: 866px;
  margin: auto;
}
 table {
    text-align: center;
    vertical-align: middle;
  }
 #td1{
   border-top: 2px solid #E95513;
 }
  .table-des table thead tr td {
    padding: 15px 0;
    border-top: 2px solid #E95513;
    color: #E95513;
    font-size: 16px;
    width: 139px;
    }
  #last-td{
    width: 298px;
  }
   .td1 {
    border-top: 2px solid #E95513;
    border-bottom: 2px solid #E95513;
    color: #E95513;
    font-size: 16px;
  }
  .modules02 table tbody tr td {
    padding: 15px 0;
    border-top: 1px dashed #808080;
  }
  .td_bg {
    background-color: #FEEFE8;
  }
   hr {
    border: none;
    border-top: 1px dashed #E95513;

     padding-top: 0px;
     margin-top: 10px;
     border-bottom-width: 10px;
     padding-bottom: 10px;
   }
  .modules03{
    padding-bottom: 40px;
  }
  .modules03-des ul {
    background: url(./img/cuiru2.png) no-repeat center bottom;
    height: 199px;
  }
  .modules03-des {
    width: 870px;
    margin: auto;
  }
  .modules03-des ul li a {
    display: block;
    width: 100px;
    height: 100px;
    background-image: url(./img/cuiru-liu.png);
    margin-bottom: 23px;
  }
  .modules03-des ul .li1 a{
    background-position: 0 0;
    &:hover{
      background-position: 0px 100px;
    }
  }
  .modules03-des ul .li1:hover{ p{color: @grayorangeColor;} }
  .modules03-des ul .li2 a{
    background-position: -100px 0;
    &:hover{
      background-position: -100px 100px;
    }
  }
  .modules03-des ul .li2:hover{ p{color: @grayorangeColor;} }
  .modules03-des ul .li3 a{
    background-position: -200px 0;
    &:hover{
      background-position: -200px 100px;
    }
  }
  .modules03-des ul .li3:hover{ p{color: @grayorangeColor;} }
  .modules03-des ul .li4 a{
    background-position: -300px 0;
    &:hover{
      background-position: -300px 100px;
    }
  }
  .modules03-des ul .li4:hover{ p{color: @grayorangeColor;} }
  .modules03-des ul .li5 a{
    background-position: -400px 0;
    &:hover{
      background-position: -400px 100px;
    }
  }
  .modules03-des ul .li5:hover{ p{color: @grayorangeColor;} }
  .modules03-des ul .li6 a{
    background-position: -500px 0;
    &:hover{
      background-position: -500px 100px;
    }
  }
  .modules03-des ul .li6:hover{ p{color: @grayorangeColor;} }
  .modules03-des ul .li1{
    margin-left: 10px;
  }
  .li2, .li3, .li4, .li5, .li6{
    margin-left: 48px;
  }
  .modules03-des ul li p {
    color: #999;
    text-align: center;
  }
  .modules04-ul{
    width: 866px;
    margin: auto;
    overflow: hidden;
  }
  .modules04-ul li{
     height: 449px;
    position: relative
   }
  .modules04 .modules04-ul .content01{
    width: 266px;
    border: 1px solid #E0DFDF;
    padding: 50px 15px 0;
    height: 194px;
    background-color: #F5F5F5;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .modules04-ul li p:first-child {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .modules04-ul li .person{
    background: url("./img/person01.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    width: 170px;
    height: 255px;
    position: absolute;
    top: 193px;
    z-index: 50;
    left: 50px;
  }
  #person02{
    left: 80px;
  }
  .modules04-ul  li .yuyue {
    color: #E95513;
    font-size: 16px;
    display: block;
    width: 140px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: auto;
    background-color: #EFEFEF;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    z-index: 100;
    &:hover{
      background: @grayorangeColor;
      color: white;
    }
  }
  #modules04-li2{
    margin: 0 30px;
  }
</style>
