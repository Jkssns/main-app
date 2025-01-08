import { createRouter, createWebHistory } from "vue-router"

const routes = [
	{
		path: '/',
		name: 'app',
		redirect: '/react-sub-app',
		components: null,
	},
	{
		path: '/react-sub-app',
		name: 'react-sub-app',
		components: null,
	},
	{
		path: '/vue-sub-app',
		name: 'vue-sub-app',
		components: null,
	},
]



export default createRouter({
	history: createWebHistory(),
	routes: routes,
})