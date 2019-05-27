<template>
  <div class="container tab">
    <el-steps align-center :active="active" finish-status="success">
        <el-step title="1.填写服务信息"></el-step>
        <el-step title="2.填写客户信息"></el-step>
        <el-step title="3.预约订单确认"></el-step>
    </el-steps>
    <div class="introduce font-14 container">
      <p class="in-title font-24">月嫂</p>
      <p>服务对象：产妇，0-3月宝宝</p>
      <p>市场价格：上海地区主要以6000-9000元/月为主</p>
      <p>服务内容：照顾产妇、照顾宝宝</p>
      <p>预订须知：协助产妇做些粗活，帮助产妇做她不方便的活，重大节假日可能上浮，拥有特殊技能可能会加价，需要阿姨确认是否接单</p>
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
                <div class="font-18">月子餐</div>
                <p>为产妇制作营养餐，合理安排产妇饮食</p>
              </li>
              <li>
                <div class="font-18">婴儿按摩</div>
                <p>通过给婴儿按摩，促进神经系统发育，促进生长及智能发育</p>
              </li>
              <li>
                <div class="font-18">乳房护理</div>
                <p>帮助产妇清洗、热敷、按摩乳房、刺激哺乳</p>
              </li>
              <li>
                <div class="font-18">婴儿服务</div>
                <p>给新生儿洗澡、喂奶、换尿布、洗新生儿衣物等</p>
              </li>
              <li>
                <div class="font-18">产妇按摩</div>
                <p>指导产妇做好产后恢复操，为恢复产妇体型</p>
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
        label: '3小时'
      }, {
        value: '选项3',
        label: '4小时'
      }, {
        value: '选项4',
        label: '5小时'
      }, {
        value: '选项5',
        label: '6小时'
      }, {
        value: '选项6',
        label: '7小时'
      }, {
        value: '选项7',
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
