import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/pages/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/pages',
		name: 'Home',
		component: Home
	},
	{
		path: 'views/pages/about/:id',
		name: 'About',
		component: () => import('@/views/pages/About.vue')
	},
	{
		path: '/*',
		name: 'views/pagesNotFound',
		redirect: '/not-found/',
		component: () => import('@/views/pages/NotFound.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
