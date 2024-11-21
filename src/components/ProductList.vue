<script setup>
import ProductCard from "@/components/ProductCard.vue";
import {useCartStore} from "@/stores/cart.js";

const props = defineProps({
  productList: Array,
})

const cartStore = useCartStore()

</script>

<template>
  <div :style="{gridAutoRows: '1fr'}"
       class="grid 2xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2
       lg:gap-[1.5rem] gap-[.6rem] sm:py-[3rem] py-[1.5rem]">
    <ProductCard v-for="(product, index) in props.productList" :is-in-cart="cartStore.isInCart(product.id)"
                 :product="product" :style="{animationDelay: `${index % 25 * 100}ms`}"/>
  </div>
</template>

<style scoped>

</style>