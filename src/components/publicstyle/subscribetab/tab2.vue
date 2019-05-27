<template>
  <div class="container">
    <div class="introduce font-14 container">
      <p class="in-title font-24">月嫂</p>
      <p>服务对象：产妇，0-3月宝宝</p>
      <p>市场价格：上海地区主要以6000-9000元/月为主</p>
      <p>服务内容：照顾产妇、照顾宝宝</p>
      <p>预订须知：协助产妇做些粗活，帮助产妇做她不方便的活，重大节假日可能上浮，拥有特殊技能可能会加价，需要阿姨确认是否接单</p>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm site">
  <!-- <el-form-item label="服务区域"> -->
    <!-- <div class="list1">
      <v-distpicker></v-distpicker>
    </div> -->
    <!-- </el-form-item> -->
    <el-form-item label="详细地址" prop="add">
      <el-input v-model="ruleForm.add"></el-input>
    </el-form-item>
    <el-form-item prop="phone" label="手机">
      <el-input v-model.number="ruleForm.phone"></el-input>
    </el-form-item>
    <el-form-item label="预约时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="服务时长" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择服务时长">
        <el-option label="两小时" value="两小时"></el-option>
        <el-option label="四小时" value="四小时"></el-option>
        <el-option label="六小时" value="六小时"></el-option>
        <el-option label="八小时" value="八小时"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="服务内容" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="家居保洁" name="type">
          <div class="a1">家居保洁</div>
          <p>房内地面、台面、厨房、卫生间、整理物品、清除垃圾</p>
        </el-checkbox>
        <el-checkbox label="育婴育儿" name="type">
          <div class="a1">育婴育儿</div>
          <p>帮助照顾稍大点的宝宝，带睡等</p>
        </el-checkbox>
        <el-checkbox label="代跑腿" name="type">
          <div class="a1">代跑腿</div>
          <p>代为办理各种事务</p>
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="其他需求" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即预约</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
// import VDistpicker from 'v-distpicker'
export default {
  // components: {VDistpicker},
  data () {
    var phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        var reg = /^1[34578]\d{9}$/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
    }
    return {
      ruleForm: {
        add: '',
        phone: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        add: [
          // required是否必填
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
        phone: [
          { required: true, validator: phone, trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择服务时长', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: false, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/css/common.less';
@import './subscribe-tab.less';
</style>
