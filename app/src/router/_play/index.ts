import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/default/index.vue'
export default [
  {
    path: '/_play',
    component: Layout,
    meta: {
      title: '游乐',
      alwaysShow: true,
      icon: 'VideoPlay',
      header: true,
    },
    redirect: '/_play/test1',
    children: [
      {
        path: 'test1',
        meta: {
          title: 'test1',
        },
        component: () => import('_v/_play/test1/index.vue'),
      },
      {
        path: 'test2',
        meta: {
          title: 'test2',
        },
        component: () => import('_v/_play/test2/index'),
      },
      {
        path: 'test3',
        meta: {
          title: 'test3',
        },
        component: () => import('_v/_play/test3/index'),
      },


      {
        path: 'vuesri',
        meta: {
          title: 'vuesri',
        },
        children: [
          {
            path: 'basemap',
            meta: {
              title: 'basemap',
            },
            component: () => import('_v/_play/vuesri/basemap/index.vue'),
          },
        ],
      },

      {
        path: 'table',
        meta: {
          title: 'table',
        },
        children: [
          {
            path: 'scroll',
            meta: {
              title: 'table-scroll',
            },
            component: () => import('_v/_play/table/scroll/index.vue'),
          },
        ],
      },
    ],
  },
] as RouteRecordRaw[]