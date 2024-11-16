import {createRouter, createWebHistory} from "vue-router"
import {useLoading} from "@/components/loading/useLoading.js";

const loading = useLoading()

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/components/pages/Home.vue'),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("@/components/pages/NotFound.vue"),
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
	if (to.name !== from.name) {
		loading.showLoading()
		await new Promise(resolve => {
			setTimeout(_ => resolve(), 500)
		})
	}
	next()
})
router.afterEach(_ => {
	loading.hideLoading()
})

export default router
