<script setup>
import {ref} from "vue";
import Container from "@/components/Container.vue";

const sidebarOpened = ref(false)

const switchSidebar = () => sidebarOpened.value = !sidebarOpened.value

</script>

<template>
  <div class="relative">
    <div
        class="w-full backdrop-blur-xl bg-lilac-light/40 select-none text-white shadow-[0px_0px_3rem_0px_rgb(66,72,116,40%)]
        fixed top-0 z-[1000] after:bg-white after:w-full after:bottom-0 after:h-[.05rem] after:absolute">
      <Container>
        <div
            class="sm:h-[5rem] h-[3.5rem] flex justify-between items-center text-[14px] md:text-[16px] text-dark">
          <RouterLink
              class="flex font-bold sm:text-[1.5rem] text-[1.2rem] items-center group *:transition-all"
              to="/">
            <span
                class="text-dark group-active:text-lilac-light group-active:bg-dark px-[.5rem] sm:py-[.2rem] py-[.1rem] rounded-md">Tech</span>
            <span
                class="bg-dark group-active:bg-lilac-light text-lilac-light group-active:text-dark
                px-[.5rem] sm:py-[.2rem] py-[.1rem] rounded-md">Store</span>
          </RouterLink>
          <nav
              class="md:flex gap-4 items-center h-full hidden">
            <RouterLink
                class="after:block after:h-[1px] hover:after:w-full
              after:w-0 after:bg-dark after:duration-150 after:transition-all transition-all active:text-dark"
                to="/">
              Главная
            </RouterLink>
            <RouterLink
                class="after:block after:h-[1px] hover:after:w-full
              after:w-0 after:bg-dark after:duration-150 after:transition-all transition-all active:text-dark"
                to="/#search">
              Каталог
            </RouterLink>
            <RouterLink
                class="after:block after:h-[1px] hover:after:w-full
              after:w-0 after:bg-dark after:duration-150 after:transition-all transition-all active:text-dark"
                to="/cart">
              Корзина
            </RouterLink>
          </nav>
          <i class="bi bi-list  md:hidden block text-[20px] cursor-pointer" @click="switchSidebar"></i>
        </div>
      </Container>
    </div>
    <div :class="sidebarOpened ? 'flex md:hidden' : 'hidden'"
         class="flex-col fixed z-[1100] h-screen w-full bg-black/50 backdrop-blur-2xl font-light text-white text-[16px]">
      <div class="flex justify-between items-center w-full px-[2rem] py-[1.5rem]
                  animate-fade-down animate-duration-[200ms] animate-ease-out">
        <div class="flex gap-[.2rem] font-bold text-[1.5rem] items-center leading-none">
          <span class="text-lilac-light">Tech</span>
          <span class="text-dark bg-lilac-light px-[.4rem] py-[.2rem] rounded-md">Store</span>
        </div>
        <div
            class="grid place-items-center place-content-center ps-[.5rem] py-[.5rem] group"
            @click="sidebarOpened = false">
          <i class="bi bi-x-lg cursor-pointer text-[1rem] leading-none group-hover:rotate-180 rotate-0 transition-transform ease-out"/>
        </div>
      </div>
      <RouterLink
          class="w-full px-[2rem] py-[1.5rem] active:ml-1 transition-all flex items-center justify-between hover:ml-1 hover:text-bluish
          animate-fade-down animate-duration-[300ms] animate-delay-[100ms] animate-ease-out"
          to="/"
          @click="switchSidebar">
        Главная
        <i class="bi bi-box-arrow-up-right text-[1rem]"></i>
      </RouterLink>
      <RouterLink
          class="w-full px-[2rem] py-[1.5rem] active:ml-1 transition-all flex items-center justify-between hover:ml-1 hover:text-bluish
          animate-fade-down animate-duration-[300ms] animate-delay-[200ms] animate-ease-out"
          to="/#search"
          @click="switchSidebar">
        Каталог
        <i class="bi bi-search text-[1rem]"></i>
      </RouterLink>
      <RouterLink
          class="w-full px-[2rem] py-[1.5rem] active:ml-1 transition-all flex items-center justify-between hover:ml-1 hover:text-bluish
          animate-fade-down animate-duration-[450ms] animate-ease-out animate-delay-[300ms]"
          to="/cart"
          @click="switchSidebar">
        Корзина
        <i class="bi bi-cart text-[1rem]"></i>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>