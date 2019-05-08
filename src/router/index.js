import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/components/HelloWord'
import Home from '@/components/home/Home'	//首页
import About from '@/components/nav/About' //关于我们
import TalkMe from '@/components/nav/TalkMe' //联系我们
import Msgcourse from '@/components/nav/Msgcourse' //讯息资讯

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'helloWord',
			component: HelloWord,
			redirect: '/home',
			children: [
				{
					path: '/home',		//首页
					name:'home',
					component: Home,
				},
				{
					path:'/about',     //关于我们
					name:'about',
					component: About,
					
				},
				{							
					path:'/talkMe',		//联系我们
					name:'talkMe',
					component: TalkMe,
					
				},
				{							
					path:'/msg',		//讯息资讯
					name:'msg',
					component: Msgcourse,
					
				},
				{
				    path: '/courseDetails',	//课程详情
				    name: 'CourseDetails',
				    component: res=> import('@/components/nav/CourseDetails')
				 }
			]
		},

	]
})
