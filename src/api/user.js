import service from '@/utils/request';

/**
 * 用户登录
 * @param {*} params 
 */
export const userLogin = (params) => service.post('/user/login', params);
/**
 * 获取用户详情，包括角色权限等
 * @param {*} params 
 * @returns 
 */
export const userInfo = (params) => service.get('/user/info', { params });
// 退出
export const logout = (params) => service.post('/user/logout', params);