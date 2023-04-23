import { createRouter, createWebHashHistory } from 'vue-router'

// 定义路由
const routes = [
	{
		path: '/shopping-cart',
		name: 'ShoppingCart',
		component: () => import('../pages/shopping-cart/index.vue'),
		// component: () => import('../pages/HomePage.vue'),
	},
	{
		path: '/home',
		component: () => import('../pages/home-page/index.vue'),
		// component: () => import('../pages/HomePage.vue'),
		children: [
			{
				path: '',
				component: () => import('../pages/sub-home-1/index.vue'),
				// component: () => import('../pages/HomePage.vue'),
			},
			{
				path: 'subHome1',
				name: 'SubHome1',
				component: () => import('../pages/sub-home-1/index.vue'),
				// component: () => import('../pages/HomePage.vue'),
			},
			{
				path: 'subHome2-1',
				name: 'SubHome2-1',
				component: () => import('../pages/sub-home-2-1/index.vue'),
				// component: () => import('../pages/HomePage.vue'),
			},
			{
				path: 'subHome2-2',
				name: 'SubHome2-2',
				component: () => import('../pages/sub-home-2-2/index.vue'),
				// component: () => import('../pages/HomePage.vue'),
			},
		],
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		redirect: '/home/subHome1',
		// component: () => import('../pages/404-page/index.vue'),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
