import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/components/HelloWord'
import Home from '@/components/home/Home'
import About from '@/components/about/About' //关于我们

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'helloWord',
			component: HelloWord,
			// redirect: '/'
			children: [
				{
					path: '/',
					component: Home
				},
				{
					path: '/about',
					name: 'about',
					component: About,
				},
			]
		},
		// {
		//   path: '/',
		//   name: 'home',
		//   component: Home,
		// 	 redirect: '/home'
		// },
		// 关于我们

	]
})
