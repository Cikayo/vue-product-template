import { asyncRoutes, constantRoutes } from '@/router'

function hasPermission(menuList, route) {
  return menuList.findIndex(item => item === route.menu_key) > -1;
}

// 筛选需要权限的菜单
export function filterAsyncRoutes(routes, menuList) {
  const res = [];
  if(menuList.length == 0) {
    return res;
  }
  routes.forEach(route => {
    // 如果没有 menu_key,则表示为不需要权限判断的页面
    if(!route.menu_key) {
      res.push(route)
    } else {
      if(hasPermission(menuList, route)) {
        if(route.children) {
          route.children = filterAsyncRoutes(route.children, menuList);
        }
        res.push(route)
      }
    }
  })
  return res;
}

const state = {
  routes: [],
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = constantRoutes.concat(routes);
  },
  DEL_ROUTES: (state) => {
    state.routes = constantRoutes.splice(0);
  }
}

const actions = {
  generateRoutes({ commit }, menuList) {
    return new Promise(resolve => {
      let accessedRoutes = filterAsyncRoutes(asyncRoutes, menuList)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },
  delAllRoutes({ commit }) {
    return new Promise(resolve => {
      commit('DEL_ROUTES')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
