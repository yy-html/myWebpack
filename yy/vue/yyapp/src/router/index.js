import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//import MainFooter from '@/components/mainfooter/'
const MainFooter = () => import('@/components/mainfooter/')
// import MainHeader from '@/components/mainheader/'

// import HomeContent from '@/components/home/content/'
// import HomeHeader from '@/components/home/header/'

// import CastContent from '@/components/cast/content/'
// import CastHeader from '@/components/cast/header/'
// import CastDetailContent from '@/components/cast/castDetail/content/'
// import CastDetailHeader from '@/components/cast/castDetail/header/'

// import CartContent from '@/components/cart/content/'
// import CartHeader from '@/components/cart/header/'

// import UserContent from '@/components/user/content/'
// import UserHeader from '@/components/user/header/'
// import UserLogining from '@/components/user/content/logining/'
// import UserNologin from '@/components/user/content/nologin/'

// import Rigister from '@/components/register/content'

export default new Router({
  routes: [
		{
			path: '/',
			redirect: '/home' //重定向
//			alias: '/home' 别名
		},
		{
			path: '/login',
			components:{
				'content': resolve => require(['@/components/login/'],resolve)
			}
		},
		{
			path: '/home',
			components: {
				'content': resolve => require(['@/components/home/content/'],resolve),
				'header': resolve => require(['@/components/home/header/'],resolve),
				'footer': MainFooter
			}
		},
		{
			path: '/cast',
			components: {
				'content': resolve => require(['@/components/cast/content/'],resolve),
				'header': resolve => require(['@/components/cast/header/'],resolve),
				'footer': MainFooter
			}
		},
		{
			path: '/castDetail/:id',
			name: 'castDetail',
			components: {
				'content': resolve => require(['@/components/cast/castDetail/content/'],resolve),
				'header': resolve => require(['@/components/cast/castDetail/header/'],resolve),
				'footer': MainFooter
			}
		},
		{
			path: '/movie',
			components: {
				'content': resolve => require(['@/components/movie/content/'],resolve),
				'header': resolve => require(['@/components/movie/header/'],resolve),
				'footer': MainFooter
			}
		},
		{
			path: '/cart',
			components: {
				'content': resolve => require(['@/components/cart/content/'],resolve),
				'header': resolve => require(['@/components/cart/header/'],resolve),
				'footer': MainFooter
			}
		},
		{
			path: '/user',
			components: {
				'content': resolve => require(['@/components/user/content/'],resolve),
				'header': resolve => require(['@/components/user/header/'],resolve),
				'footer': MainFooter
			},
			children: [
				{
					path: 'logining',
					components: {
						'user': resolve => require(['@/components/user/content/logining/'],resolve),
					}
				},
				{
					path: 'nologin',
					components: {
						'user': resolve => require(['@/components/user/content/nologin/'],resolve),
					}
				},
				{
					path: '',
					components: {
						'user': resolve => require(['@/components/user/content/logining/'],resolve)
					}
				}
			]
		},
		{
			path: '/register',
			components: {
				'content': resolve => require(['@/components/register/'],resolve),
			}
		},
		{
			path: '*',
			redirect: '/home'
		}
  ]
})
