import Vue from 'vue'
// 路由组件
import Router from 'vue-router'
// 主页
import index from 'com/index'
// 家政页面
import housekeeping from 'com/housekeeping'
// 月嫂页面
import maternity from 'com/maternity'
// 催乳师页面
import lactation from 'com/lactation'
// 保姆页面
import nanny from 'com/nanny'
// 育儿嫂页面
import parenting from 'com/parenting'
// 城市合作页面
import cooperation from 'com/cooperation'
// 关于我们页面
import about from 'com/about'
//关于我们tab1
import contact1 from 'com/publicstyle/contact/contact1'
//关于我们tab2
import contact2 from 'com/publicstyle/contact/contact2'
// 服务承诺页面
import promise from 'com/promise'
// 安全保障页面
import security from 'com/security'
// 个人中心页面
import personal from 'com/personal'
// 在线预约页面
import subscribe from 'com/subscribe'
// 在线预约子路由页面1
// import subscribetab1 from 'com/publicstyle/subscribetab/tab1'
// 在线预约子路由页面2
// import subscribetab2 from 'com/publicstyle/subscribetab/tab2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: index,
        index: index
      },
      meta: {
        title: 'e家政 - 你负责美貌如花,我负责阿姨到家'
      }
    },
    {
      path: '/housekeeping',
      components: {
        default: housekeeping,
        housekeeping: housekeeping
      },
      meta: {
        title: 'e家政 - 全方面的家政服务项目,新用户首单享优惠'
      }
    },
    {
      path: '/maternity',
      components: {
        default: maternity,
        maternity: maternity
      },
      meta: {
        title: 'e家政 - 超五年月嫂工作经验,专业安全的新生儿护理、产妇护理'
      }
    },
    {
      path: '/lactation',
      components: {
        default: lactation,
        lactation: lactation
      },
      meta: {
        title: 'e家政 - 产妇催乳师解决母乳难题,养出健康宝宝'
      }
    },
    {
      path: '/parenting',
      components: {
        default: parenting,
        parenting: parenting
      },
      meta: {
        title: 'e家政 - 选择专业育儿嫂,帮助宝宝健康快乐成长 '
      }
    },
    {
      path: '/nanny',
      components: {
        default: nanny,
        nanny: nanny
      },
      meta: {
        title: 'e家政 - 高端全职管家，开启保姆订制服务'
      }
    },
    {
      path: '/cooperation',
      components: {
        default: cooperation,
        cooperation: cooperation
      },
      meta: {
        title: '家政加盟_家政公司加盟_家政公司加盟多少钱_e家政'
      }
    },
    {
      path: '/about',
      components: {
        default: about,
        about: about
      },
      children:[
        {
          path:'/contact1',
          components:{
            default:contact1
          }
        },
        {
          path:'/contact2',
          components:{
            default:contact2
          }
        }
      ],
      meta: {
        title: 'e家政 - 给您介绍e家政公司服务项目范围'
      }
    },
    {
      path: '/promise',
      components: {
        default: promise,
        promise: promise
      },
      meta: {
        title: 'e家政 - 服务承诺：标准化一对一定制服务'
      }
    },
    {
      path: '/security',
      components: {
        default: security,
        security: security
      },
      meta: {
        title: 'e家政 - 实名认证、健康认证、家政保险、专业培训 '
      }
    },
    {
      path: '/personal',
      components: {
        default: personal,
        personal: personal
      },
      meta: {
        title: 'e家政 - 个人中心'
      }
    },
    {
      path: '/subscribe',
      components: {
        default: subscribe,
        subscribe: subscribe
      },
      // children: [
      //   {
      //     path: '/subscribetab1',
      //     components: {
      //       default: subscribetab1
      //     }
      //   // },
      //   // {
      //   //   path: '',
      //   //   components: {
      //   //     default: subscribetab2,
      //   //     subscribetab2: subscribetab2
      //   //   }
      //   }
      // ],
      meta: {
        title: 'e家政 - 在线预约'
      }
    }]
})
