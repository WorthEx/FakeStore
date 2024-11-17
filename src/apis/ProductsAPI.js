import FAKE_STORE_API from "@/apis/instances/FakeStoreAPI.js"

export default {
	getCategories() {
		return FAKE_STORE_API.get("/products/category")
	},
	getByCategory(category) {
		return FAKE_STORE_API.get(`/products/category?type=${category}`)
	},
	getAll(page) {
		return FAKE_STORE_API.get(`/products?limit=25&page=${page}`)
	},
	getById(id) {
		return FAKE_STORE_API.get(`/products/${id}`)
	}
}