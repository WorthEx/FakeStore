import {createRouter, createWebHistory} from "vue-router"
import {useLoading} from "@/components/loading/useLoading.js";

const loading = useLoading()

const routes = [
	{
		path: '/',
		name: 'home',
		component: _ => import('@/components/pages/Home.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
	scrollBehavior: (to) => {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth"
			}
		}
		return new Promise((resolve) => {
			resolve({
				left: 0, top: 0,
				behavior: "smooth",
			})
		})
	},
})

router.beforeEach(async (to, from, next) => {
	loading.showLoading()
	// await new Promise(resolve => {
	// 	setTimeout(_ => resolve(), 500)
	// })
	next()
})
router.afterEach(_ => {
	loading.hideLoading()
})

export default router
