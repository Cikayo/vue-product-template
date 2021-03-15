import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.scss';

import App from './App.vue'

import router from './router';
import store from './store';

import './permission'; // 路由拦截

Vue.use(ElementUI, { size: 'medium' });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
