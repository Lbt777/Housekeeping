<template>
    <div class="security container">
      <div class="security-nav security-nav-list"> <!--导航条-->
        <div class="security-nav-list">
          <span class="font-20">首页</span>
          <span> / </span>
          <span>安全保障</span>
        </div>
      </div><!--导航条-->
      <div class="security-contain clearfix"> <!--中间内容-->
        <div class="security-l fl"><!--中间左边-->
          <div class="security-box clearfix">
            <div class="security-title">
              <p class="font-22">全面安全保障</p>
              <div class="hr1"></div>
              <p class="font-16">五大保障机制为企业服务保驾护航，将客户的风险降至最低</p>
            </div>
            <ul class="security-list">
              <li class="list1">
                <div class="list1-box fl"></div>
                <div class="list1-title  fr">
                  <h3>实名认证</h3>
                  <span>REAL NAME </span>
                  <p>e家政对每位阿姨进行第三方身份认证，确保为您服务的阿姨身份信息真实可靠。</p>
                </div>
              </li>
              <li class="list2">
                <div class="list1-box fl"></div>
                <div class="list1-title fr">
                  <h3>健康证明</h3>
                  <span>EMDICAL CERTIFICATE</span>
                  <p>e家政将定期安排阿姨进行体检，医院开据健康证明方可上岗工作。</p>
                </div>
              </li>
              <li class="list3">
                <div class="list1-box fl"></div>
                <div class="list1-title fr">
                  <h3>家政保险</h3>
                  <span>HOME INSURANCE</span>
                  <p>e家政为家政服务阿姨办理家政服务保险，保障您的财产和物品安全。</p>
                </div>
              </li>
              <li class="list4">
                <div class="list1-box fl"></div>
                <div class="list1-title fr">
                  <h3>会员制度</h3>
                  <span>MEMBER SYSTEM</span>
                  <p>每一位成为e家政会员的用户都可以享受e家政后期服务的跟踪回访以及相关的优惠活动。</p>
                </div>
              </li>
              <li class="list5">
                <div class="list1-box fl"></div>
                <div class="list1-title fr">
                  <h3>专业培训</h3>
                  <span>PROFESSIONAL TRAINING</span>
                  <p>每一位e家政阿姨都需要经过e家政服务技能培训，并进行考核和认证，保证优质的家政服务。</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="hr2"></div>
          <div class="security-warp">
            <ul class="security-warp-list">
              <li>
                <img src="./image/aqbz10.png">
                <p class="font-18">专业</p>
                <p>标准化培训 严格筛选 专业设备</p>
                <div class="rh rh1"></div>
              </li>
              <li>
                <img src="./image/aqbz11.png">
                <p class="font-18">专业</p>
                <p>标准化培训 严格筛选 专业设备</p>
                <div class="rh rh2"></div>
              </li>
              <li>
                <img src="./image/aqbz12.png">
                <p class="font-18">专业</p>
                <p>标准化培训 严格筛选 专业设备</p>
                <div class="rh rh3"></div>
              </li>
            </ul>
          </div>
        </div><!--中间左边-->
        <div class="security-r fr">
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
.security {
  margin-top: 55px;
  margin-bottom: 55px;
  .security-nav {
    width: 100%;
    height: 38px;
    line-height: 38px;
    background: @whiteColor;
    margin: 0 0 10px;
    .security-nav-list {
      padding: 0 0 0 45px;
      background: url("./image/fwcn.gif") no-repeat 20px center;
    }
  }
  .security-l{
    width: 79%;
    position: relative;
    background: @whiteColor;
    border-top: 2px solid @orangeColor;
    .security-box{
      margin: 0 60px 0 60px  ;
      .security-title{
        text-align: center;
        margin-bottom: 45px;
        margin-top: 45px;
        .hr1{
          width: 43px;
          height: 4px;
          margin: 10px auto;
          background-color: @orangeColor;
        }
      }
        ul li{
          width: 41%;
          margin-right: 74px;
          height: 162px;
          margin-bottom: 80px;
          .list1-box{
            width: 22%;
            height: 162px;
          }
          .list1-title{
            width: 70%;
            position: relative;
            h3{
              line-height: 50px;
              color: @darkorangeColor;
            }
            span{
              font-size: 16px;
              color: @lightgrey;
            }
            p{
              margin-top: 25px;
              line-height: 25px;
              height: 45px;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
        ul .list1{
          background: url("./image/aqbz.png") no-repeat 92% 20%;
          .list1-box{
            background: #FF8244 url("./image/aqbz1.png") no-repeat center 65%;
          }
        }
        ul .list2{
          background: url("./image/aqbz2.png") no-repeat 92% 20%;
          .list1-box{
            background: #FF8244 url("./image/aqbz3.png") no-repeat center 65%;
          }
        }
        ul .list3{
          background: url("./image/aqbz4.png") no-repeat 92% 20%;
          .list1-box{
            background: #FF8244 url("./image/aqbz5.png") no-repeat center 65%;
          }
        }
        ul .list4{
          background: url("./image/aqbz6.png") no-repeat 92% 20%;
          .list1-box{
            background: #FF8244 url("./image/aqbz7.png") no-repeat center 65%;
          }
        }
        ul .list5{
          background: url("./image/aqbz8.png") no-repeat 92% 20%;
          .list1-box{
            background: #FF8244 url("./image/aqbz9.png") no-repeat center 65%;
          }
        }
      }
    .hr2{
      background-color: @bglightdark;
      height: 10px;
    }
    .security-warp{
      border-top: 2px solid @orangeColor;
      .security-warp-list{
        margin: 40px 60px 0 60px;
        li{
          width: 30%;
          margin-left: 41px;
          text-align: center;
          p{
            margin: 15px 0 25px 0;
          }
          .rh{
            width: 62px;
            height: 4px;
            margin: auto;
          }
          .rh1{
            background: @grayorangeColor;
          }
          .rh2{
            background: #4DD6C5;
          }
          .rh3{
            background: #FFAC52;
          }
        }
        li:first-child{
          margin-left: 0;
        }
      }
    }

  }
}
</style>
