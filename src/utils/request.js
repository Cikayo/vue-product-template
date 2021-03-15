import axios from 'axios';
import { MessageBox, Message } from 'element-ui';
import store from '@/store';
import { getToken } from './auth';

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken();
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  /**
   * 如果要获取http信息（例如标题或状态），请返回响应=>响应
  */
  /**
   * 通过自定义代码确定请求状态
   */
  response => {
    const res = response.data;
    // 响应码不是 20000，则表示出错，常规错误是 50000
    if (res.code !== 20000) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 50001 未登录，50002 本地token与服务器token不相同
      if (res.code === 50001 || res.code === 50002) {
        // to re-login
        MessageBox.confirm('登录已超时，是否重新登录?', '登录提醒', {
          confirmButtonText: '重新登录',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.msg,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
