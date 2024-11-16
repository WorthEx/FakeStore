import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', () => {
	const cart = ref([])

	const clearCart = () => cart.value = []

	const addToCart = (item) => cart.value.push(item)

	return {cart}
}, {
	persist: {
		storage: sessionStorage,
	}
})
