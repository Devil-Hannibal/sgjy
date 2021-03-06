import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/components/HelloWord'
import Home from '@/components/home/Home'	//首页
import About from '@/components/nav/About' //关于我们
import TalkMe from '@/components/nav/TalkMe' //联系我们
import Msgcourse from '@/components/nav/Msgcourse' //讯息资讯
import NewsLists from '@/components/nav/NewsLists' //文章列表
import NewsDetails from '@/components/nav/NewsDetails' //文章详情
import TrainCourse from '@/components/nav/TrainCourse' //培训课程



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
					redirect: '/news',
					
					children:[
						{path:'/news',name:'news',component:NewsLists}, //文章列表
						{path:'/news/details',name:'details',component:NewsDetails}	//文章详情
					]
				},
				{							
					path:'/trainCourse',		//培训课程
					name:'trainCourse',
					component: TrainCourse,
					
				},
				{
				    path: '/courseDetails',	  //课程详情
				    name: 'CourseDetails',
					redirect:'/courseDetails/1',
				    component: ()=> import('@/components/nav/CourseDetails'),
					children:[
                        {
                            path: '/courseDetails/1',		//课程详情
                            name:'CourseDetailsFirst',
                            component: ()=> import('@/components/nav/CourseDetailsFirst'),
                        },
                        {
                            path: '/courseDetails/2',		//课程问答
                            name:'CourseAnswers',
                            component: ()=> import('@/components/nav/CourseAnswers'),
                        },
					]
				},
                {
                    path:'/starRecommendation',		//明星推荐
                    name:'StarRecommendation',
                    component: ()=> import('@/components/nav/StarRecommendation'),
                },


			]
		},

	]
})
