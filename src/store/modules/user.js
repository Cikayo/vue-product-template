import { userInfo, logout, userLogin } from '@/api/user';
import { getToken, removeToken, setToken } from '@/utils/auth';

const state = {
  token: getToken(),
  name: '',
  auth: [], // 用户权限数组
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AUTH: (state, auth) => {
    state.auth = auth;
  },
}

const actions = {
  // 登录
  login({ commit }, userInfo) {
    const { user_name, password } = userInfo
    return new Promise((resolve, reject) => {
      userLogin({ user_name: user_name.trim(), user_password: password }).then(res => {
        commit('SET_TOKEN', res.token)
        setToken(res.token)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取 user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      userInfo({
        token: state.token
      }).then(res => {
        if (res.code !== 20000) {
          reject('认证失败！请重新登录！')
        }
        const { data, menuList } = res;
        const { user_name } = data;
        commit('SET_NAME', user_name);
        commit('SET_AUTH', menuList);
        resolve(menuList);
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 清空 token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '');
      removeToken();
      resolve();
    })
  },
  // 登出
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout({
        token: state.token
      }).then((res) => {
        commit('SET_TOKEN', '');
        commit('SET_NAME', '');
        removeToken();
        // 这里 dispatch 参数必须传，否则定位不到 permission 的 delAllRoutes 方法
        dispatch('permission/delAllRoutes', null, { root: true })
        resolve(res);
      }).catch(error => {
        reject(error)
      })
    })
  },

}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}