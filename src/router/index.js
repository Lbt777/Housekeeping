import Vue from 'vue'
// 路由组件
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['com/index'], resolve),
      meta: {
        title: 'e家政 - 你负责美貌如花,我负责阿姨到家'
      }
    },
    {
      path: '/housekeeping',
      component: resolve => require(['com/housekeeping'], resolve),
      meta: {
        title: 'e家政 - 全方面的家政服务项目,新用户首单享优惠'
      }
    },
    {
      path: '/housesub',
      component: resolve => require(['com/housesub'], resolve),
      meta: {
        title: 'e家政 - 全方面的家政服务项目,新用户首单享优惠'
      }
    },
    {
      path: '/maternity',
      component: resolve => require(['com/maternity'], resolve),
      meta: {
        title: 'e家政 - 超五年月嫂工作经验,专业安全的新生儿护理、产妇护理'
      }
    },
    {
      path: '/lactation',
      component: resolve => require(['com/lactation'], resolve),
      meta: {
        title: 'e家政 - 产妇催乳师解决母乳难题,养出健康宝宝'
      }
    },
    {
      path: '/parenting',
      component: resolve => require(['com/parenting'], resolve),
      meta: {
        title: 'e家政 - 选择专业育儿嫂,帮助宝宝健康快乐成长 '
      }
    },
    {
      path: '/nanny',
      component: resolve => require(['com/nanny'], resolve),
      meta: {
        title: 'e家政 - 高端全职管家，开启保姆订制服务'
      }
    },
    {
      path: '/cooperation',
      component: resolve => require(['com/cooperation'], resolve),
      meta: {
        title: '家政加盟_家政公司加盟_家政公司加盟多少钱_e家政'
      }
    },
    {
      path: '/about',
      component: resolve => require(['com/about'], resolve),
      children: [
        {
          path: '/contact1',
          component: resolve => require(['com/publicstyle/contact/contact1'], resolve)
        },
        {
          path: '',
          component: resolve => require(['com/publicstyle/contact/contact1'], resolve)
        },
        {
          path: '/contact2',
          component: resolve => require(['com/publicstyle/contact/contact2'], resolve)
        },
        {
          path: '',
          component: resolve => require(['com/publicstyle/contact/contact2'], resolve)
        },
        {
          path: '/contact3',
          component: resolve => require(['com/publicstyle/contact/contact3'], resolve)
        },
        {
          path: '',
          component: resolve => require(['com/publicstyle/contact/contact3'], resolve)
        },
        {
          path: '/contact4',
          component: resolve => require(['com/publicstyle/contact/contact4'], resolve)
        },
        {
          path: '',
          component: resolve => require(['com/publicstyle/contact/contact4'], resolve)
        },
        {
          path: '/contact5',
          component: resolve => require(['com/publicstyle/contact/contact5'], resolve)
        },
        {
          path: '',
          component: resolve => require(['com/publicstyle/contact/contact5'], resolve)
        }
      ],
      meta: {
        title: 'e家政 - 给您介绍e家政公司服务项目范围'
      }
    },
    {
      path: '/promise',
      component: resolve => require(['com/promise'], resolve),
      meta: {
        title: 'e家政 - 服务承诺：标准化一对一定制服务'
      }
    },
    {
      path: '/security',
      component: resolve => require(['com/security'], resolve),
      meta: {
        title: 'e家政 - 实名认证、健康认证、家政保险、专业培训 '
      }
    },
    {
      path: '/personal',
      component: resolve => require(['com/personal'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['com/publicstyle/personaltab/personaltab1'], resolve),
          meta: {
            user: true
          }
        },
        {
          path: '/personaltab1',
          component: resolve => require(['com/publicstyle/personaltab/personaltab1'], resolve)
        },
        {
          path: '',
          component: resolve => require(['com/publicstyle/personaltab/personaltab2'], resolve)
        },
        {
          path: '/personaltab2',
          component: resolve => require(['com/publicstyle/personaltab/personaltab2'], resolve)
        },
        {
          path: '',
          component: resolve => require(['com/publicstyle/personaltab/personaltab3'], resolve)
        },
        {
          path: '/personaltab3',
          component: resolve => require(['com/publicstyle/personaltab/personaltab3'], resolve)
        },
        {
          path: '',
          component: resolve => require(['com/publicstyle/personaltab/personaltab4'], resolve)
        },
        {
          path: '/personaltab4',
          component: resolve => require(['com/publicstyle/personaltab/personaltab4'], resolve)
        },
        {
          path: '',
          component: resolve => require(['com/publicstyle/personaltab/personaltab5'], resolve)
        },
        {
          path: '/personaltab5',
          component: resolve => require(['com/publicstyle/personaltab/personaltab5'], resolve)
        }
      ],
      meta: {
        title: 'e家政 - 个人中心'
      }
    },
    {
      path: '/subscribe',
      component: resolve => require(['com/subscribe'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['com/publicstyle/subscribetab/tab1'], resolve)
        },
        {
          path: '/subscribetab1',
          component: resolve => require(['com/publicstyle/subscribetab/tab1'], resolve)
        },
        {
          path: '',
          component: resolve => require(['com/publicstyle/subscribetab/tab2'], resolve)
        },
        {
          path: '/subscribetab2',
          component: resolve => require(['com/publicstyle/subscribetab/tab2'], resolve)
        }
      ],
      meta: {
        title: 'e家政 - 在线预约'
      }
    },
    {
      path: '/logon',
      component: resolve => require(['com/logon'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['com/publicstyle/login/login'], resolve),
          beforeEnter: (to, from, next) => {
            // 已登录 不能再进行登录
            var token = window.localStorage.getItem('token')
            if (token === false) {
              next('/')
            } else {
              next()
            }
          }
        },
        {
          path: '/register',
          component: resolve => require(['com/publicstyle/login/register'], resolve),
          meta: {
            title: 'e家政 - 注册'
          }
        }
      ],
      meta: {
        title: 'e家政 - 登录'
      }
    }]
})
