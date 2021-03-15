import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/layout';

/**
 * 注意，在定义路由数组的过程中，必要要定义menu_key字段
 * 因为后端会返回当前用户->角色->权限，用户所拥有的权限中会携带 key值，与menu_key字段进行匹配，以此来判断用户是否有访问页面的权限
 */

/**
 * 没有权限要求的基本路由
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/pages/login/index'),
    hidden: true, // 隐藏
  },
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/pages/home/index'),
        name: '首页',
      }
    ]
  },
]

// 需要验证用户权限的路由
export const asyncRoutes = [
  /**
   * 虽然404页面是不需要鉴权的页面，但是这个页面需要写在路由数组的最后
   * 否则会匹配所有的路由，导致其他路由页面无法访问
   * 因此，我们做出如下约定:
   * 1. 当有 menu_key 时，则与后台返回的用户权限进行匹配，并判断是否允许用户访问
   * 2. 如果没有 menu_key 时，则无需进行用户权限匹配，直接允许用户访问
   */
  { path: '*', redirect: '/404', hidden: true }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router