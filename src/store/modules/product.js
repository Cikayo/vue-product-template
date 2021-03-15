import { getProductCategory } from '@/api/product';
const state = {
  categorys: []
}

const mutations = {
  SET_CATEGORYS: (state, data) => {
    state.categorys = data;
  }
}

const actions = {
  // 初始化商品分类
  initCategory({ commit }) {
    return new Promise((resolve, reject) => {
      getProductCategory().then(res => {
        commit('SET_CATEGORYS', res.data);
        resolve();
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}