<script setup>
import Container from "@/components/Container.vue";
import {useCartStore} from "@/stores/cart.js";
import ProductList from "@/components/ProductList.vue";
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import {toast} from "vue3-toastify";

const cartStore = useCartStore()
const uniqueSortedCart = ref([])

const sendItems = async () => {
  if (cartStore.cart.length < 1 || uniqueSortedCart.value.length < 1) {
    toast.warn("В корзине нет товаров.")
    return
  }
  const response = await axios.post(
      "https://run.mocky.io/v3/7c788f63-2a55-4efa-8997-81d445d96f0d",
      cartStore.cart)
  if (response.status === 200) {
    const result = Object.values(
        cartStore.cart.reduce((acc, item) => {
          const {title} = item;
          if (!acc[title]) {
            acc[title] = {title, quantity: 0};
          }
          acc[title].quantity++;
          return acc;
        }, {})
    )
    console.log(result)
    toast.success(`Товары (${cartStore.cart.length}) успешно отправлены.`)
    uniqueSortedCart.value = []
    cartStore.clearCart()
  }
}

onMounted(_ => {
  let cartFromStore = cartStore.cart.filter(
      (item, index, array) => array.findIndex(obj => obj.id === item.id) === index
  )
  cartFromStore.sort((a, b) => a.id - b.id)
  uniqueSortedCart.value = cartFromStore
})

watch(cartStore.cart, _ => {
  let cartFromStore = cartStore.cart.filter(
      (item, index, array) => array.findIndex(obj => obj.id === item.id) === index
  )
  cartFromStore.sort((a, b) => a.id - b.id)
  uniqueSortedCart.value = cartFromStore
})

</script>

<template>
  <div class="min-h-screen relative sm:py-[7.5rem] py-[5rem] bg-lilac-light">
    <Container>
      <div class="flex flex-col">
        <span class="font-bold sm:text-[2rem] text-[1.5rem] text-dark">Корзина</span>
        <ProductList v-if="uniqueSortedCart.length > 0" :product-list="uniqueSortedCart"/>
        <div v-else class="flex flex-col sm:gap-[2rem] gap-[1rem] w-full mx-auto py-[5rem] items-center">
          <span
              class="text-center text-dark sm:text-[1.5rem] text-[1rem]">
          В корзине ничего нет.</span>
          <RouterLink
              class="group flex gap-4 items-center justify-center
            *:text-white bg-dark md:rounded-xl rounded-xl px-4 py-4
            md:w-fit transition-all duration-[250ms] ease-out
            ring-dark
            focus:ring-[2px] focus:ring-offset-1 focus:ring-offset-lilac
            md:focus:ring-4 md:focus:ring-offset-4
            hover:bg-white hover:ring-white *:hover:text-dark
            2xl:text-[1.3rem] md:text-[1.2rem] text-[.9rem] *:leading-none overflow-hidden active:scale-95
            animate-fade-right animate-duration-[600ms] animate-ease-out animate-delay-[200ms]"
              to="/#search">
            <span>Каталог</span>
            <i class="bi bi bi-chevron-right md:text-[1.2rem] text-[.9rem]
          group-hover:translate-x-[.5rem] translate-x-0 transition-transform ease-out"/>
          </RouterLink>
        </div>
      </div>
    </Container>
    <div class="fixed -translate-x-1/2 left-1/2 bottom-[2rem] w-full px-[1rem] select-none
                md:w-[760px] md:max-w-[760px]
                lg:w-[1000px] lg:max-w-[1000px]
                2xl:w-[1400px] 2xl:max-w-[1400px]
                ">
      <div class="bg-dark/70 ring-2 ring-lilac/60 backdrop-blur-[.2rem] rounded-[1rem]
      flex sm:flex-row flex-col sm:justify-between gap-[1rem] overflow-x-auto
      px-[1rem] sm:py-[.6rem] py-[1rem] md:text-[1.2rem] text-[1rem]">
        <div class="text-lilac-light flex items-center justify-center">
          <span class="font-bold">{{ cartStore.cart.length }}&nbsp;</span>
          {{
            cartStore.cart.length < 10 || cartStore.cart.length > 20 ?
                cartStore.cart.length % 10 === 1 ? 'товар' :
                    [2, 3, 4].includes(cartStore.cart.length % 10) ? 'товара' : 'товаров' :
                'товаров'
          }}
          на сумму&nbsp;<span class="font-bold">${{ cartStore.cartCost }}</span>
        </div>
        <div class="rounded-[.8rem] bg-lilac-light hover:bg-lilac-light/80 transition-all
            text-dark px-[2rem] py-[1rem] cursor-pointer active:scale-[98%] text-center"
             @click.stop.prevent="sendItems">
          Оформить
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>