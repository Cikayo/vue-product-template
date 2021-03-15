import router from './router';
import store from './store';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from '@/utils/auth';

NProgress.configure({ showSpinner: false })

const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  // 每次路由跳转时，先进行是否登陆的判断
  const hasToken = getToken();
  if(hasToken){
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      let hasUserName = store.getters.user_name;
      console.log(hasUserName)
      if(hasUserName) {
        next();
      } else {
        try {
          // 异步获取用户的信息和权限列表
          let menuList = await store.dispatch('user/getInfo');
          // 筛选出来用户可以访问的菜单
          const accessRoutes = await store.dispatch('permission/generateRoutes', menuList)
          router.addRoute(accessRoutes);
          next({ ...to, replace: true });
        } catch (error) {
          await store.dispatch('user/resetToken');
          next('/login');
          NProgress.done();
        }
      }
    }
  } else {
    // 这里需要判断一下
    // 如果不判断，vue-router 无限跳转到登录页，导致内存溢出错误
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next('/login');
      NProgress.done();
    }
  }
})


router.afterEach(() => {
  // finish progress bar
  NProgress.done();
})