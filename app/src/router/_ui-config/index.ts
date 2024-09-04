import { RouteRecordRaw, RouterView } from 'vue-router'
import Layout from '@/layouts/default/index.vue'
export default [
  {
    path: '/_ui-config',
    component: Layout,
    meta: {
      title: 'UI 配置',
      icon: 'Setting',
      alwaysShow: true,
      header: true,
    },
    redirect: '/_ui-config/global/color',
    children: [
      {
        path: 'global',
        meta: {
          title: '全局配置',
        },
        component: RouterView,
        children: [
          {
            path: 'color',
            meta: { 
              title: '颜色配置',
            },
            component: () => import('_v/_ui-config/global/color/index.vue'),
          },
          {
            path: 'font',
            meta: {
              title: '字体配置',
            },
            component: () => import('_v/_ui-config/global/font/index.vue'),
          },

          {
            path: 'gap',
            meta: {
              title: '间距配置',
            },
            component: () => import('_v/_ui-config/global/gap/index.vue'),
          },
        ],
      },

      {
        path: 'components',
        meta: {
          title: '组件配置',
        },
        component: RouterView,
        children: [
          {
            path: 'menu',
            meta: {
              title: '菜单配置',
            },
            component: () => import('_v/_ui-config/menu/index.vue'),
          },

          {
            path: 'card',
            meta: {
              title: '卡片配置',
            },
            component: () => import('_v/_ui-config/card/index.vue'),
          },

          {
            path: 'button',
            meta: {
              title: '按钮配置',
            },
            component: () => import('_v/_ui-config/button/index.vue'),
          },

          {
            path: 'table',
            meta: {
              title: '表格配置',
            },
            component: () => import('_v/_ui-config/table/index.vue'),
          },
    
        ],
      },
      
    
      {
        path: 'top',
        meta: {
          title: '顶部配置',
        },
        component: () => import('_v/_ui-config/top/index.vue'),
      },
    
    ],
  },
] as RouteRecordRaw[]