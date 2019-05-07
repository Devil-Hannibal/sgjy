import Vue from 'vue'					//引入vue
import App from './App'					//引入APP
import router from './router'			//引入vue-路由


import axios from './plugin/http.js'	//数据请求封装Axios

import ElementUI from 'element-ui';		//引入饿了么-ui库
import 'element-ui/lib/theme-chalk/index.css';   //引入饿了么 UI库样式

import './assets/base.css';				 //基本样式
import './assets/changeElementUi.css'       //修改饿了么UI库
import './../static/iconfont/iconfont.css'		//引入字体样式
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
