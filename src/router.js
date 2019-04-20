import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/components/BasicLayout'
import Home from './views/Home.vue';

Vue.use(Router)
export const constantRouterMap = [
	{
		path: '/',
		name: 'index',
		component: BasicLayout,
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'home',
				breadcrumbName:'首页',
				component: Home,
			}, {
				path: '/market',
				name: 'market',
				breadcrumbName:'交易市场',
				component: () => import(/* webpackChunkName: "market" */ './views/MarketPlace.vue')
			}
		]
	},

];
export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: constantRouterMap,
	scrollBehavior: () => ({ y: 0 }),
})
