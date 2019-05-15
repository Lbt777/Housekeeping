import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import housekeeping from '@/components/housekeeping'

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
      path: '/housekeeping',
      components: {
        housekeeping: housekeeping
      }
    }
  ]
})
