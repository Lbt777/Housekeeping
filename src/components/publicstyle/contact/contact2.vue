<template>
  <div>
    <div class="service-title">
      <h2>服务团队</h2>
      <p>Service Team</p>
      <img src="./image/fwcn.jpg"/>
    </div>
    <ul class="service-warp">
      <li class="service-li1">
        <div class="service-fl fl">
          <img src="./image/fwcn1.jpg"/>
        </div>
        <div class="service-fr fr">
          <span>家政团队</span>
          <span> Housekeeping team</span>
          <p>e家政家政团队由保洁师和家居工程技师组成，现拥有3000+人员。业务范围已覆盖全国60+座城市。“不求海量的用户，只求服务好每一位客户”是e家政秉承的服务宗旨。</p>
        </div>
      </li>
      <li class="service-li1">
        <div class="service-fr f1">
          <span>母婴团队</span>
          <span> Maternal and infant services item</span>
          <p>e家政母婴团队包由月嫂、育儿嫂、催乳师、产后康复师、小儿推拿师组成。现有员工制月嫂300余人，月服务单量超过6000单。所有服务人员定期参加e家政职业技术学校的培训，不断提高自己的专业水平和服务意识，以保证e家政的服务质量成为行业标杆。</p>
        </div>
        <div class="service-fl fr">
          <img src="./image/fwcn2.jpg"/>
        </div>

      </li>
      <li class="service-li1">
        <div class="service-fl fl">
          <img src="./image/fwcn3.jpg"/>
        </div>
        <div class="service-fr fr">
          <span>甲醛治理团队</span>
          <span>  Formaldehyde management team</span>
          <p>自主研发超微纳米光触媒、天然萃取生物触媒、纳米银除菌剂，并获得CMA机构、江苏省疾控中心检验通过。采用国内先进的检测、治理仪器，签约服务，已为企事业单位、学校、大型购物中心、居民住宅等10万余用户提供健康环境。</p>
        </div>
      </li>
      <li class="service-li1">
        <div class="service-fr f1">
          <span>运营团队</span>
          <span> Operation team</span>
          <p>e家政运营团队分为拓展事业部、行政人事部、网络运营部、技术开发部、产品研发部、客服部，近百人。团队均具有过硬的专业技术、积极向上的心态和为客户奉献的精神。突破进取，扎实工作是团队的工作原则。</p>
        </div>
        <div class="service-fl fr">
          <img src="./image/fwcn4.jpg"/>
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
  .service-title{
    margin-top: 50px;
    text-align: center;
    color: @orangeColor;
    margin-bottom: 70px;
    p{
      margin-top: 15px;
      margin-bottom: 15px;
      color: @lightgrey;
    }
  }
  .service-warp li{
    width: 100%;
    margin-bottom: 70px;
  }
  .service-warp .service-li1{
    .service-fl{
      width: 35%;
    }
    .service-fr{
      width: 58%;
      margin-top: 45px;
      display: inline-block;
      span:first-child{
        font-size: 18px;
        color: @darkgreyColor;
        font-weight: normal;
        border-bottom: 1px solid #FF7125;
        padding-bottom: 5px;
        margin-right: 15px;
      }
      span:last-child{
        color: @lightgrey;
      }
      p{
        margin-top: 25px;
        line-height: 30px;
      }
    }
  }
</style>
