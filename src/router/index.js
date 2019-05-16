import Vue from 'vue'
// ·�����
import Router from 'vue-router'
// ��ҳ
import index from 'com/index'
// ����ҳ��
import housekeeping from 'com/housekeeping'
// ��ɩҳ��
import maternity from 'com/maternity'
// ����ʦҳ��
import lactation from 'com/lactation'
// ��ķҳ��
import nanny from 'com/nanny'
// ����ɩҳ��
import parenting from 'com/parenting'
// ���к���ҳ��
import cooperation from 'com/cooperation'
// ��������
import about from 'com/about'
// �����ŵ
import promise from 'com/promise'
// ��ȫ����
import security from 'com/security'
// ��������
import personal from 'com/personal'
// ����ԤԼ
import subscribe from 'com/subscribe'

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
        title: 'e���� - �㸺����ò�绨,�Ҹ����̵���'
      }
    },
    {
      path: '/housekeeping',
      components: {
        default: housekeeping,
        housekeeping: housekeeping
      },
      meta: {
        title: 'e���� - ȫ����ļ���������Ŀ,���û��׵����Ż�'
      }
    },
    {
      path: '/maternity',
      components: {
        default: maternity,
        maternity: maternity
      },
      meta: {
        title: 'e���� - ��������ɩ��������,רҵ��ȫ��������������������'
      }
    },
    {
      path: '/lactation',
      components: {
        default: lactation,
        lactation: lactation
      },
      meta: {
        title: 'e���� - ��������ʦ���ĸ������,������������'
      }
    },
    {
      path: '/parenting',
      components: {
        default: parenting,
        parenting: parenting
      },
      meta: {
        title: 'e���� - ѡ��רҵ����ɩ,���������������ֳɳ� '
      }
    },
    {
      path: '/nanny',
      components: {
        default: nanny,
        nanny: nanny
      },
      meta: {
        title: 'e���� - �߶�ȫְ�ܼң�������ķ���Ʒ���'
      }
    },
    {
      path: '/cooperation',
      components: {
        default: cooperation,
        cooperation: cooperation
        // nanny: nanny
      },
      meta: {
        title: '��������_������˾����_������˾���˶���Ǯ_e����'
      }
    },
    {
      path: '/about',
      components: {
        default: about,
        about: about
      },
      meta: {
        title: 'e���� - ��������e������˾������Ŀ��Χ'
      }
    },
    {
      path: '/promise',
      components: {
        default: promise,
        promise: promise
      },
      meta: {
        title: 'e���� - �����ŵ����׼��һ��һ���Ʒ���'
      }
    },
    {
      path: '/security',
      components: {
        default: security,
        security: security
      },
      meta: {
        title: 'e���� - ʵ����֤��������֤���������ա�רҵ��ѵ '
      }
    },
    {
      path: '/personal',
      components: {
        default: personal,
        personal: personal
      },
      meta: {
        title: 'e���� - ��������'
      }
    },
    {
      path: '/subscribe',
      components: {
        default: subscribe,
        subscribe: subscribe
      },
      meta: {
        title: 'e���� - ����ԤԼ'
      }
    }]
})
