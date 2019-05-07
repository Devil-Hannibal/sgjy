import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/components/HelloWord'
import Home from '@/components/home/Home'
import Nav from '@/components/about/Nav' //关于我们
import About from '@/components/about/About' //教学环境

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'helloWord',
			component: HelloWord,
			redirect: '/home',
			children: [
				{
					path: '/home',
					component: Home
				},
				// 关于我们
				{
					path: '/nav',
					name: 'nav',
					component: Nav,
					redirect: '/about',
					children:[{path: '/about',name: 'About',component: About,}]
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
