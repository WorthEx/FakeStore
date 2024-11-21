<script setup>
import {useCartStore} from "@/stores/cart.js";
import {computed} from "vue";

const props = defineProps({
  product: Object,
  isInCart: Boolean,
})

const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addToCart(props.product)
}

const removeFromCart = () => {
  cartStore.removeFromCart(props.product)
}

const numberOfInstancesInCart = computed(_ => cartStore.numberInCart(props.product.id))

</script>

<template>
  <div class="w-full ring-2 ring-bluish rounded-[.7rem] min-h-[10rem] overflow-hidden
  flex flex-col relative select-none
  animate-fade-up animate-ease-out cursor-pointer group">
    <div v-if="props.product.image"
         class="relative overflow-hidden select-none bg-white sm:h-[20rem] h-[15rem] grid place-content-center">
      <img :src="props.product.image"
           alt=""
           class="object-cover h-full rounded-t-[.7rem] pointer-events-none
           transition-all ease-out duration-200 group-hover:scale-[110%]">
      <div v-if="props.product.popular && props.product.popular === true"
           class="absolute top-[.5rem] right-[.5rem] p-[.5rem] grid place-content-center
           bg-lilac rounded-[.5rem] ">
        <i class="bi bi-fire text-dark  text-[1.2rem]"></i>
      </div>
    </div>
    <div v-else
         class="bg-dark animate-pulse animate-duration-[8s] relative min-h-[15rem] overflow-hidden
             grid place-content-center place-items-center">
      <i class="bi bi-ban leading-none text-lilac-light text-[80px]"></i>
    </div>
    <div :class="!props.product.image && 'h-full'"
         class="p-[.75rem] flex flex-col justify-between gap-[2rem] bg-lilac-light">
      <div class="flex flex-col gap-[.5rem]">
        <div class="line-clamp-2 text-dark font-medium text-[1rem] break-words">
          {{ props.product.title }}
        </div>
        <div class="line-clamp-2 text-dark/80 text-[1rem] break-words">
          {{ props.product.brand ? props.product.brand[0].toUpperCase() + props.product.brand.slice(1) : '-' }}
        </div>
      </div>
      <div :class="!isInCart ? 'active:scale-[98%] hover:bg-dark/60 p-[1rem]' : 'p-[.5rem]'" class="bg-dark/80 rounded-[.5rem] text-white
       sm:text-[1.25rem] text-[1.1rem] text-center transition-colors"
           @click.stop.prevent="(!isInCart) && addToCart()">
        <span v-if="!isInCart">${{ props.product.price }}</span>
        <div v-else class="flex justify-between items-center">
          <div
              class="grid place-content-center bg-lilac-light/25 hover:bg-lilac-light/10 transition-all rounded-[.2rem] p-[.5rem]">
            <i class="bi bi-dash text-white" @click.prevent.stop="removeFromCart()"></i>
          </div>
          <div class="grid place-content-center">
            <span>{{ numberOfInstancesInCart }}</span>
          </div>
          <div
              class="grid place-content-center bg-lilac-light/25 hover:bg-lilac-light/10 transition-all rounded-[.2rem] p-[.5rem]">
            <i class="bi bi-plus text-white" @click.prevent.stop="addToCart()"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>