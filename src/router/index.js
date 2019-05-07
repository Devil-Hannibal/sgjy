import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/components/HelloWord'
import Home from '@/components/home/Home'
import About from '@/components/about/About' //关于我们
import AbScenery from '@/components/about/AbScenery' //教学环境

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
				// 关于我们
				{
					path: '/about',
					name: 'about',
					component: About,
					children:[{path: '/about',name: 'abScenery',component: AbScenery,}]
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
