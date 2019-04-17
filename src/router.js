import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/components/BasicLayout'
import Home from './views/Home.vue';

Vue.use(Router)
// console.log(1,process.env.BASE_URL)
export default new Router({
	mode: 'history',
	base:'zzyk',
	routes: [
		{
			path: '/',
			name: 'index',
			component: BasicLayout,
			redirect:'/home',
			children: [
				{
					path: '/home',
					name: 'home',
					component: Home,
				}
			]
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		}
	]
})
