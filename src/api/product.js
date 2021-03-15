import service from '@/utils/request';

// 商品类型管理
export const getProductCategory = () => service.get('/product/categorylist').then(res => res);
// 添加商品类型
export const addProductCategory = (params) => service.post('/product/addcategory', params).then(res => res);
// 设置商品分类
export const setProductCategory = (params) => service.post('/product/setcategory', params).then(res => res);
// 删除商品分类
export const delProductCategory = (params) => service.post('/product/delcategory', params).then(res => res);

// 商品列表
export const getProductList = (params) => service.get('/product/list', { params }).then(res => res);
// 添加商品
export const addProduct = (params) => service.post('/product/add', params).then(res => res);
// 修改商品
export const setProduct = (params) => service.post('/product/set', params).then(res => res);
// 删除商品
export const delProduct = (params) => service.post('/product/del', params).then(res => res);
// 批量删除
export const batchDelProduct = (params) => service.post('/product/batchdel', params).then(res => res);