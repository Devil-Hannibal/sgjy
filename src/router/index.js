import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/components/HelloWord'
import Home from '@/components/home/Home'
import Nav from '@/components/nav/Nav' //Nav
import About from '@/components/nav/About' //关于我们
import TalkMe from '@/components/nav/TalkMe' //联系我们

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
					children:[
						{path: '/nav/about',name: 'about',component: About},
						{path: '/nav/talkme',name: 'talkMe',component: TalkMe},
                        {
                            path: '/nav/CourseDetails',
                            name: 'CourseDetails',
                            component: res=> import('@/components/nav/CourseDetails')
                        }
                    ]
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
