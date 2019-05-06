import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/about/About' //关于我们

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
			 // redirect: '/'
    },
		// {
		//   path: '/',
		//   name: 'home',
		//   component: Home,
		// 	 redirect: '/home'
		// },
		// 关于我们
		 {												
		  path: '/about',
		  name: 'about',
		  component: About,
		},
  ]
})
