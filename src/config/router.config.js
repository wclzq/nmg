// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView, HomeLayout, IndexLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [
  {
    path: '/home',
    component: HomeLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/menu/menu')
      }
    ]
  },
  //组织机构
  {
    path: '/orgtree',
    component: () => import('../views/main/OrgTree')

  },
  {
    path: '/testmap',
    name: 'testmap2',
    component: () => import('../views/main/datamanagement/mapmanage/InfoMap')

  },
  {
    path: '/infoserach',
    component: IndexLayout,
    redirect: '/infoserachHistory',
    meta: { title: '信息查询' },
    children: [
      // dashboard
      {
        path: '/infoserach/home',
        name: 'HomeMap',
        component: () => import('@/views/main/datamanagement/mapmanage/InfoMap')
      },
      {
        path: '/infoserachHistory',
        redirect: '/infoserach/home',
        component: PageView,
        meta: { title: '信息查询', icon: 'search' },
        children: [
          {
            path: 'history',
            name: 'History',
            component: () => import('@/views/main/resultshow/infoserach/History'),
            meta: { title: '历史凌灾数据查询', keepAlive: false }
          },
          {
            path: 'historyicerun',
            name: 'HistoryIceRun',
            component: () => import('@/views/main/resultshow/infoserach/HistoryIceRun'),
            meta: { title: '历史凌情数据查询', keepAlive: false }
          },
          {
            path: 'gqproject',
            name: 'gqproject',
            component: () => import('@/views/main/resultshow/infoserach/Project'),
            meta: { title: '工情数据查询' }
          },
          {
            path: 'waterdata',
            name: 'waterdata',
            component: () => import('@/views/main/resultshow/infoserach/WaterData'),
            meta: { title: '水情数据查询', keepAlive: true }
          },
          {
            path: 'remoteinfo',
            name: 'RemoteInfo',
            component: () => import('@/views/main/resultshow/infoserach/RemoteInfo'),
            meta: { title: '遥感信息数据查询', keepAlive: true }
          }
        ]
      },

      // forms
      {
        path: '/icerunperception',
        redirect: '/icerunperception/dynamicdata',
        component: PageView,
        meta: { title: '凌情动态感知', icon: 'form' },
        children: [
          {
            path: '/icerunperception/dynamicdata',
            name: 'DynamicData',
            component: () => import('@/views/main/resultshow/icerunperception/DynamicData'),
            meta: { title: '凌情动态数据', keepAlive: true }
          },
          // {
          //   path: '/icerunperception/dyndata',
          //   name: 'DynamxxicData',
          //   component: () => import('@/views/form/BasicForm'),
          //   meta: { title: '防凌视频监控', keepAlive: true, permission: ['form'] }
          // },
          // {
          //   path: '/form/step-form',
          //   name: 'StepForm',
          //   component: () => import('@/views/form/stepForm/StepForm'),
          //   meta: { title: '移动式凌情检测', keepAlive: true, permission: ['form'] }
          // },
          {
            path: '/icerunperception/movemonitor',
            name: 'MoveMonitor',
            component: () => import('@/views/main/resultshow/icerunperception/MoveMonitor'),
            meta: { title: '移动式凌情检测', keepAlive: true }
          },
          {
            path: '/icerunperception/fixdemonitor',
            name: 'FixdeMonitor',
            component: () => import('@/views/main/resultshow/icerunperception/FixedMonitor'),
            meta: { title: '定点式凌情检测' }
          },
          {
            path: '/icerunperception/patrolreport',
            name: 'PatrolReport',
            component: () => import('@/views/main/resultshow/icerunperception/PatrolReport'),
            meta: { title: '巡查上报情况查询', keepAlive: true, permission: ['admin'] }
          }
        ]
      },

      // list
      {
        path: '/disasterearlywarning',
        name: 'disasterearlywarning',
        component: PageView,
        redirect: '/disasterearlywarning/floodriskanalyze',
        meta: { title: '凌灾预警与动态评估', icon: 'table' },
        children: [
          {
            path: '/disasterearlywarning/floodriskanalyze',
            name: 'FloodRiskAnalyze',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/main/resultshow/disasterearlywarning/FloodRiskAnalyze'),
            meta: { title: '凌汛洪水风险分析' }
          },
          {
            path: '/disasterearlywarning/befrozenthawforecast',
            name: 'BefrozenThawForecast',
            component: () => import('@/views/main/resultshow/disasterearlywarning/Befrozen-Thaw-Forecast'),
            meta: { title: '封开河预报', keepAlive: true }
          },
          {
            path: '/disasterearlywarning/disasterearlywarning',
            name: 'DisasterEarlywarning',
            component: () => import('@/views/main/resultshow/disasterearlywarning/DisasterEarlywarning'),
            meta: { title: '凌汛灾害预警', keepAlive: true }
          },
          {
            path: '/disasterearlywarning/lossassess',
            name: 'LossAssess',
            component: () => import('@/views/main/resultshow/disasterearlywarning/LossAssess'),
            meta: { title: '凌灾损失评估', keepAlive: true }
          },

        ]
      },
      {
        path: '/emergencymanage',
        name: 'emergencymanage',
        component: PageView,
        redirect: '/emergencymanage/UAVmonitor',
        meta: { title: '应急管理', icon: 'setting' },
        children: [
          {
            path: '/emergencymanage/UAVmonitor',
            name: 'UAVmonitor',
            component: () => import('@/views/main/resultshow/emergencymanage/UAVmonitor'),
            meta: { title: '无人机应急监测' }
          },
          {
            path: '/emergencymanage/icepreventiondispatch',
            name: 'IcePreventionDispatch',
            component: () => import('@/views/main/resultshow/emergencymanage/IcePreventionDispatch'),
            meta: { title: '防凌联合调度' }
          },
          {
            path: '/emergencymanage/icepreventiondispatch/icebreaking',
            name: 'IceBreaking',
            component: () => import('@/views/main/resultshow/emergencymanage/IceBreakManage'),
            meta: { title: '破冰排凌方案管理' }
          }
        ]
      },

      // profile
      {
        path: '/decisionanalysis',
        name: 'decisionanalysis',
        component: PageView,
        redirect: '/decisionanalysis/preventionschemesoptimization',
        meta: { title: '智慧决策与分析', icon: 'profile' },
        children: [
          {
            path: '/decisionanalysis/preventionschemesoptimization',
            name: 'PreventionSchemesOptimization',
            component: () => import('@/views/main/resultshow/decisionanalysis/Prevention-Schemes-Optimization'),
            meta: { title: '凌灾防控方案智能优选' }
          },
          {
            path: '/decisionanalysis/flqst-evaluate',
            name: 'Evaluate',
            component: () => import('@/views/main/resultshow/decisionanalysis/Evaluate'),
            meta: { title: '分凌区生态评价' }
          },
          {
            path: '/decisionanalysis/scenededuce',
            name: 'SceneDeduce',
            component: () => import('@/views/main/resultshow/decisionanalysis/SceneDeduce'),
            meta: { title: '凌汛过程及凌灾情景推演' }
          },
          {
            path: '/decisionanalysis/resultevaluate',
            name: 'ResultEvaluate',
            component: () => import('@/views/main/resultshow/decisionanalysis/ResultEvaluate'),
            meta: { title: '凌灾防控效果综合评价' }
          }
          // ,
          // {
          //   path: '/profile/advanced',
          //   name: 'ProfileAdvanced',
          //   component: () => import('@/views/profile/advanced/Advanced'),
          //   meta: { title: '凌汛过程及凌灾情景推演', permission: ['profile'] }
          // },
          // {
          //   path: '/profile/advanced',
          //   name: 'ProfileAdvanced',
          //   component: () => import('@/views/profile/advanced/Advanced'),
          //   meta: { title: '凌灾防控效果综合评价', permission: ['profile'] }
          // }
        ]
      },

      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: '个人页', icon: 'user' },
        children: [
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: '个人设置', hideHeader: true, permission: ['user', 'admin'] },
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('@/views/account/settings/BaseSetting'),
                meta: { title: '基本设置', hidden: true, permission: ['user', 'admin'] }
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: { title: '安全设置', hidden: true, keepAlive: true, permission: ['admin'] }
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('@/views/account/settings/Custom'),
                meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: ['user', 'admin'] }
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: ['user'] }
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                component: () => import('@/views/account/settings/Notification'),
                meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: ['user'] }
              }
            ]
          }
        ]
      }
    ]
  },

  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    meta: { title: '数据管理' },
    redirect: '/infoserach/home',
    children: [
      {
        path: '/datamanagement/resupload',
        redirect: '/datamanagement/resupload/dataanalysis',
        component: PageView,
        meta: { title: '成果审核上传发布', icon: 'upload' },
        children: [
          {
            path: '/datamanagement/resupload/dataanalysis',
            name: 'DataAnalysis',
            component: () => import('@/views/main/datamanagement/resupload/DataAnalysis'),
            meta: { title: '数据统计分析', icon: 'caret-right' }
          },
          {
            path: '/datamanagement/resupload/resupload',
            name: 'ResUpload',
            component: () => import('@/views/main/datamanagement/resupload/ResUpload'),
            meta: { title: '成果数据上传', icon: 'caret-right' }
          }

        ]
      },
      {
        path: '/datamanagement/mapmanage',
        redirect: '/datamanagement/mapmanage/infomap',
        component: PageView,
        meta: { title: '地图发布与管理', icon: 'global' },
        children: [
          {
            path: '/datamanagement/mapmanage/infomap',
            name: 'infomap',
            meta: { title: '地图发布与管理', icon: 'caret-right' },
            // component: () => import('@/views/main/datamanagement/mapmanage/InfoMap')
          }
        ]
      },
      {
        path: '/datamanagement/monitordata',
        redirect: '/datamanagement/monitordata/dataupload/',
        component: PageView,
        meta: { title: '监测数据上报', icon: 'solution' },
        children: [
          {
            path: '/datamanagement/monitordata/dataupload',
            name: 'DataUpload',
            meta: { title: '动态监测数据上传', icon: 'caret-right' },
            component: () => import('@/views/main/datamanagement/monitordata/DataUpload')
          },
          {
            path: '/datamanagement/monitordata/datamanage',
            name: 'DataManage',
            meta: { title: '动态监测数据管理', icon: 'caret-right' },
            component: () => import('@/views/main/datamanagement/monitordata/DataManage')
          }
        ]
      },
      {
        path: '/datamanagement/contentmanage',
        redirect: '/datamanagement/contentmanage/datamanage',
        component: PageView,
        meta: { title: '内容管理', icon: 'setting' },
        children: [
          {
            path: '/datamanagement/contentmanage/datamanage',
            name: 'ContentDataManage',
            meta: { title: '数据管理', icon: 'caret-right' },
            component: () => import('@/views/main/datamanagement/contentmanage/DataManage')
          },
          {
            path: '/datamanagement/contentmanage/systemmanage',
            name: 'SystemManage',
            meta: { title: '系统管理', permission: ['xxx'], icon: 'caret-right' },
            component: () => import('@/views/main/datamanagement/contentmanage/SystemManage')
          },
          {
            path: '/datamanagement/contentmanage/authmanage',
            name: 'AuthManage',
            meta: { title: '权限管理', permission: ['admin'], icon: 'caret-right' },
            component: () => import('@/views/main/datamanagement/contentmanage/AuthManage')
          }
        ]
      },
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }

]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/adminLogin',
    component: BlankLayout,
    redirect: '/admin/login',
    children: [
      {
        path: '/admin/login',
        name: 'AdminLogin',
        component: () => import('@/views/test/Test')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
