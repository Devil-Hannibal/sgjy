import Vue from 'vue'
import App from './App'
import router from './router'


import axios from './plugin/http.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/base.css';
import './../static/iconfont/iconfont.css'
// 轮播图插件
Vue.prototype.$axios=axios
// axios.defaults.baseURL = 'http://api2.dai-yu.net/'

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
})
