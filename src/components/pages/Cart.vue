<script setup>
import Container from "@/components/Container.vue";
import {useCartStore} from "@/stores/cart.js";
import ProductList from "@/components/ProductList.vue";
import {onMounted, ref, watch} from "vue";

const cartStore = useCartStore()
const uniqueSortedCart = ref([])

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
  <div class="min-h-screen relative sm:py-[7.5rem] py-[5rem]">
    <Container>
      <div class="flex flex-col">
        <span class="font-bold sm:text-[2rem] text-[1.5rem] text-dark">Корзина</span>
        <ProductList :product-list="uniqueSortedCart"/>
      </div>
    </Container>
    <div class="fixed -translate-x-1/2 left-1/2 bottom-[2rem] w-full px-[1rem] select-none
                md:w-[760px] md:max-w-[760px]
                lg:w-[1000px] lg:max-w-[1000px]
                2xl:w-[1400px] 2xl:max-w-[1400px]">
      <div class="bg-lilac/60 ring-2 ring-dark/30 backdrop-blur-[.5rem] rounded-[1rem]
      flex sm:flex-row flex-col sm:justify-between gap-[1rem] overflow-x-auto
      px-[1rem] sm:py-[.6rem] py-[1rem] md:text-[1.2rem] text-[1rem]">
        <div class="text-dark flex items-center justify-center">
          <span class="font-bold">{{ cartStore.cart.length }}&nbsp;</span>
          {{
            cartStore.cart.length < 10 || cartStore.cart.length > 20 ?
                cartStore.cart.length % 10 === 1 ? 'товар' :
                    [2, 3, 4].includes(cartStore.cart.length % 10) ? 'товара' : 'товаров' :
                'товаров'
          }}
          на сумму&nbsp;<span class="font-bold">{{ cartStore.cartCost }}</span>тг.
        </div>
        <div
            class="rounded-[.8rem] bg-lilac-light hover:bg-lilac-light/80 transition-all
            text-dark px-[2rem] py-[1rem] cursor-pointer active:scale-[98%] text-center">
          Оформить
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>