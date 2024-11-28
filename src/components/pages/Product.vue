<script setup>
import {computed, onBeforeMount, ref, watch} from "vue";
import {toast} from "vue3-toastify";
import ProductsAPI from "@/apis/ProductsAPI.js";
import {useRoute} from "vue-router";
import Container from "@/components/Container.vue";
import {useLoading} from "@/components/loading/useLoading.js";
import {useCartStore} from "@/stores/cart.js";

const route = useRoute()
const loading = useLoading()
const cartStore = useCartStore()

const product = ref()
const descriptionFolded = ref(true)

const fetchProduct = async () => {
  loading.showLoading()
  try {
    const response = await ProductsAPI.getById(route.params.id);
    product.value = response.data.product;
  } catch (err) {
    toast.error('Не удалось загрузить продукт')
  } finally {
    loading.hideLoading()
  }
}

const addToCart = () => {
  cartStore.addToCart(product.value)
}

const removeFromCart = () => {
  cartStore.removeFromCart(product.value)
}

onBeforeMount(async _ => {
  await fetchProduct()
})

watch(product, _ => {
  if (product.value !== null) loading.hideLoading()
})

const numberOfInstancesInCart = computed(_ => cartStore.numberInCart(product.value.id))

const isInCart = computed(_ => cartStore.isInCart(product.value.id))
</script>

<template>
  <section
      class="min-h-screen w-full relative sm:pt-[7.5rem] pt-[4.5rem] sm:pb-[3rem] pb-[1rem]">
    <Container>
      <div v-if="product" class="bg-lilac/50 backdrop-blur-[.5rem] size-full rounded-[1rem]
      flex flex-col overflow-hidden ring-[.1rem] ring-dark">
        <section class="flex sm:flex-row flex-col-reverse">
          <div class="2xl:p-[2rem] p-[1rem] w-full sm:w-1/2 md:w-2/3 flex flex-col justify-between gap-[2rem]">
            <div class="flex flex-col sm:gap-[2rem] gap-[1rem]">
              <div class="flex flex-col gap-[.5rem]">
                <span class="leading-tight text-dark md:text-[1.5rem] sm:text-[1.25rem] font-medium">{{
                    product.title
                  }}</span>
                <span class="text-dark/80 md:text-[1.5rem] sm:text-[1.25rem]">{{
                    product.brand[0].toUpperCase() + product.brand.slice(1)
                  }}
              </span>
              </div>
              <div class="flex flex-col gap-[.5rem]">
                <span v-if="product.model" class="leading-tight text-dark/80 sm:text-[1.25rem]">
                  <span class="text-dark font-medium">Модель: </span>
                  {{ product.model }}
                </span>
                <span v-if="product.color" class="text-dark/80 sm:text-[1.25rem]">
                  <span class="text-dark font-medium">Цвет: </span>
                  {{ product.color[0].toUpperCase() + product.color.slice(1) }}
                </span>
              </div>
              <div class="flex p-[.1rem] gap-[.8rem] overflow-x-auto overflow-y-scroll no-scrollbar">
                <span
                    class="leading-none flex items-center justify-center
                    px-[.5rem] py-[.5rem] bg-lilac-light rounded-[.5rem]
                    ring-dark ring-1 text-dark/80 sm:text-[1.25rem]">
                  {{ product.onSale ? 'Распродажа' : 'Скоро&nbsp;на&nbsp;расподаже' }}
                </span>
                <span v-if="product.discount"
                      class="leading-none flex items-center justify-center
                    px-[.5rem] py-[.5rem] bg-lilac-light rounded-[.5rem]
                    ring-dark ring-1 text-dark/80 sm:text-[1.25rem]">
                  Скидка&nbsp;{{ product.discount }}%
                </span>
                <span
                    class="leading-none flex items-center justify-center
                    px-[.5rem] py-[.5rem] bg-lilac-light rounded-[.5rem]
                    ring-dark ring-1 text-dark/80 sm:text-[1.25rem]">
                  {{ product.popular ? 'Популярно' : 'Небезызвестно' }}
                </span>
                <span
                    class="leading-none flex items-center justify-center
                    px-[.5rem] py-[.5rem] bg-lilac-light rounded-[.5rem]
                    ring-dark ring-1 text-dark/80 sm:text-[1.25rem]">
                  {{ product.category[0].toUpperCase() + product.category.slice(1) }}
                </span>
              </div>
            </div>
            <div
                :class="!isInCart ? 'active:scale-[98%] hover:bg-dark/60 p-[1rem]' : 'p-[.5rem]'"
                class="bg-dark/80 rounded-[.5rem] text-white
       sm:text-[1.25rem] text-[1.1rem] text-center transition-colors w-full md:min-w-[15rem] sm:min-w-[10rem] sm:w-fit overflow-hidden"
                @click.stop.prevent="!isInCart && addToCart()">
              <span v-if="!isInCart">${{ product.price }}</span>
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
          <div v-if="product.image" class="w-full sm:w-1/2 md:w-1/3 2xl:p-[2rem] p-[1rem]">
            <img :src="product.image" alt="" class="object-cover w-full rounded-[.9rem]"/>
          </div>
          <div v-else
               class="w-full sm:w-1/2 lg:w-1/3 sm:min-h-[20rem] min-h-[15rem] bg-bluish/20 backdrop-blur-[.5rem]
          grid place-items-center">
            <i class="bi bi-ban text-dark text-[4rem]"></i>
          </div>
        </section>
        <section class="flex flex-col gap-[.5rem] 2xl:p-[2rem] p-[1rem]">
          <span class="leading-tight text-dark md:text-[1.5rem] sm:text-[1.25rem] font-medium">
            Описание
          </span>
          <p :class="descriptionFolded && 'fhd:line-clamp-none line-clamp-4'"
             class="sm:leading-normal leading-tight text-justify text-dark/90 sm:text-[1.25rem]">
            {{ product.description }}
          </p>
          <div class="w-full flex justify-end fhd:hidden">
            <span class="cursor-pointer text-dark/50 sm:text-[1.25rem] p-[.5rem]"
                  @click="descriptionFolded = !descriptionFolded">{{
                descriptionFolded ? 'Развернуть' : 'Свернуть'
              }}</span>
          </div>
        </section>
      </div>
    </Container>
  </section>
</template>

<style scoped>

</style>