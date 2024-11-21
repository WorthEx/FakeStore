import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', () => {
	const cart = ref([])

	const clearCart = () => cart.value = []

	const addToCart = (item) => cart.value.push(item)

	const isInCart = (itemId) => cart.value.find(item => item.id === itemId) !== undefined

	const numberInCart = (itemId) => cart.value.filter(item => item.id === itemId).length

	const cartCost = computed(() => cart.value.reduce((sum, item) => sum + item.price, 0))

	const removeFromCart = (item) => cart.value.splice(cart.value.indexOf(item), 1)

	return {cart, clearCart, isInCart, numberInCart, cartCost, addToCart, removeFromCart}
}, {
	persist: {
		storage: sessionStorage,
	}
})
