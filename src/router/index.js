import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import nanny from '@/components/nanny'
import promise from '@/components/promise'
Vue.use(Router)

export default new Router({
mode: 'history',
routes: [
  {
    path: '/',
    components: {
      index: index
    }
  },
  {
    path: '/nanny',
    components: {
      nanny: nanny
    },
    meta: {
      title: '保姆'
    }
  },
  {
    path: '/promise',
    components: {
      promise: promise
    },
    meta: {
      title: '服务承诺'
    }
  }]
})
