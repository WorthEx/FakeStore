<script setup>
import ProductCard from "@/components/ProductCard.vue";

const props = defineProps({
  productList: Array,
})
</script>

<template>
  <div :style="{gridAutoRows: '1fr'}"
       class="grid 2xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2
       sm:gap-[1.5rem] gap-[.6rem] sm:py-[3rem] py-[1.5rem]">
    <ProductCard v-for="(product, index) in props.productList" :product="product"
                 :style="{animationDelay: `${index % 25 * 100}ms`}"/>
  </div>
</template>

<style scoped>

</style>