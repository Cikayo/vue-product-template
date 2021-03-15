import Cookies from 'js-cookie'

const TOKEN_KEY = 'token';

/**
 * 获取 token，默认 key 为 TOKEN_KEY
 * @returns 
 */
export function getToken(key = TOKEN_KEY) {
  return Cookies.get(key)
}

/**
 * 设置 token，默认 key 为 TOKEN_KEY
 * @param {*} token 
 * @param {*} key 
 * @returns 
 */
export function setToken(token, key = TOKEN_KEY) {
  return Cookies.set(key, token, { expires: 1 })
}

/**
 * 移除 cookie，默认 key 为 TOKEN_KEY
 * @returns 
 */
export function removeToken(key = TOKEN_KEY) {
  return Cookies.remove(key)
}
