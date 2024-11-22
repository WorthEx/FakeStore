<script setup>
import {RouterView} from 'vue-router'
import Loading from "@/components/loading/Loading.vue";
import {useLoading} from "@/components/loading/useLoading.js";
import Footer from "@/components/Footer.vue";
import Navigation from "@/components/Navigation.vue";

const loading = useLoading()
</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
  <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet">
  <div id="app" class="relative flex flex-col">
    <svg id='patternId' class="absolute z-[-1000] bg-cover bg-repeat size-full" height='100%' width='100%'
         xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern id='a' height='40' patternTransform='scale(2) rotate(0)' patternUnits='userSpaceOnUse' width='40'>
          <rect fill='#f4eeffff' height='100%' width='100%' x='0' y='0'/>
          <path
              d='M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z'
              fill='none' stroke='#a6b1e1ff' stroke-width='1.5'/>
          <path d='M20 25a5 5 0 110-10 5 5 0 010 10z' fill='none' stroke='#dcd6f7ff' stroke-width='1.5'/>
        </pattern>
      </defs>
      <rect fill='url(#a)' height='800%' transform='translate(0,0)' width='800%'/>
    </svg>
    <Navigation/>
    <Transition>
      <Loading v-if="loading.show.value">
        Загрузка
      </Loading>
    </Transition>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style>

.v-leave-active {
  transition: opacity .2s ease-in;
}

.v-leave-to {
  opacity: 0;
}
</style>
