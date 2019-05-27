<template>
  <div class="container tab">
    <el-steps align-center :active="active" finish-status="success">
        <el-step title="1.填写服务信息"></el-step>
        <el-step title="2.填写客户信息"></el-step>
        <el-step title="3.预约订单确认"></el-step>
    </el-steps>
    <div class="introduce font-14 container">
      <p class="in-title font-24">临时工</p>
      <p>服务对象：适合所有家庭</p>
      <p>市场价格：上海地区主要以25-30元/小时为主</p>
      <p>服务内容：做饭、保洁、照顾小孩、照顾老人为主</p>
      <p>预订须知：家务为主，重大节假日可能上浮，需要阿姨确认是否接单</p>
    </div>
    <div class="site">
        <div class="site-item">
            <span class="font-22">服务区域</span>
            <div class="list1">
                <v-distpicker></v-distpicker>
            </div>
        </div>
        <div class="site-item">
            <span class="font-22">服务地址</span>
            <div class="list1 input">
                <input type="text">
            </div>
        </div>
        <div class="site-item">
            <span class="font-22">开始时间</span>
            <div class="list1">
                <el-date-picker
                    v-model="value1"
                    type="datetime"
                    format="yyyy-MM-dd HH:mm"
                    value-format="yyyy-MM-dd HH:mm"
                    placeholder="选择日期时间">
                </el-date-picker>
            </div>
        </div>
        <div class="site-item">
            <span class="font-22">服务时长</span>
            <div class="list1">
                <el-select v-model="value4" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="site-item">
            <span class="font-22">特别需求</span>
            <div class="list1 input">
                <input type="text">
            </div>
        </div>
        <div class="site-item">
            <span class="font-22">服务内容</span>
            <div class="list1">
            <ul>
              <li>
                <div class="font-18">家居保洁</div>
                <p>房内地面、台面、厨房、卫生间、整理物品、清除垃圾</p>
              </li>
              <li>
                <div class="font-18">育婴育儿</div>
                <p>帮助照顾稍大点的宝宝，带睡等</p>
              </li>
              <li>
                <div class="font-18">代跑腿</div>
                <p>代为办理各种事务</p>
              </li>
            </ul>
            </div>
        </div>
        <div class="site-item">
            <span class="font-22">联系人</span>
            <div class="list1 input deviation">
                <input type="text">
            </div>
        </div>
        <div class="site-item">
            <span class="font-22">手机号</span>
            <div class="list1 input deviation">
                <input type="text" class="fl deviation2">
                <button v-show="Verification" @click="handleClick">点击获取验证码</button>
                <button v-show="!Verification"><span>{{timer}}</span>秒后重新获取</button>
            </div>
        </div>
        <div class="site-item">
            <span class="font-22">验证码</span>
            <div class="list1 input deviation">
                <input type="text" class="deviation2">
            </div>
        </div>
    </div>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
</div>
</template>
<script>
import VDistpicker from 'v-distpicker'
export default {
  components: {VDistpicker},
  data () {
    return {
      value1: '',
      active: 0,
      options: [{
        value: '选项1',
        label: '2小时'
      }, {
        value: '选项2',
        label: '4小时'
      }, {
        value: '选项3',
        label: '6小时'
      }, {
        value: '选项4',
        label: '8小时'
      }],
      value4: '',
      Verification: true,
      timer: 60
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 3
    },
    handleClick () {
      this.Verification = false
      let auth = setInterval(() => {
        this.timer--
        if (this.timer <= 0) {
          this.Verification = true
          clearInterval(auth)
        }
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/css/common.less';
@import './subscribe-tab.less';
</style>
