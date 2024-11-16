<script setup>

</script>

<template>
  <section
      class="min-h-screen w-full relative overflow-hidden ">
    <div
        :style="{webkitTextStroke: '.2rem', webkitTextStrokeWidth: '.2rem', webkitTextStrokeColor: '#A6B1E1', webkitTextFillColor: '#F4EEFF'}"
        class="lg:block hidden z-[0] font-black text-[40rem] fhd:text-[55rem] rotate-[-12deg] leading-none
                absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2">
      404
    </div>
    <div
        class="w-full min-h-screen grid place-content-center select-none px-[3rem] relative">
      <!--      <svg id='patternId' class="absolute z-[-1000] bg-cover min-h-screen size-full" height='100%' width='100%'-->
      <!--           xmlns='http://www.w3.org/2000/svg'>-->
      <!--        <defs>-->
      <!--          <pattern id='a' height='40' patternTransform='scale(2) rotate(0)' patternUnits='userSpaceOnUse' width='40'>-->
      <!--            <rect fill='#f4eeffff' height='100%' width='100%' x='0' y='0'/>-->
      <!--            <path-->
      <!--                d='M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z'-->
      <!--                fill='none' stroke='#a6b1e1ff' stroke-width='1.5'/>-->
      <!--            <path d='M20 25a5 5 0 110-10 5 5 0 010 10z' fill='none' stroke='#dcd6f7ff' stroke-width='1.5'/>-->
      <!--          </pattern>-->
      <!--        </defs>-->
      <!--        <rect fill='url(#a)' height='800%' transform='translate(0,0)' width='800%'/>-->
      <!--      </svg>-->
      <div
          class="flex flex-col md:gap-8 gap-4 bg-dark/10 backdrop-blur-lg ring-dark/20 ring-2 rounded-2xl md:p-[4rem] p-4 relative
                md:animate-fade-up animate-once animate-duration-[1500ms] animate-ease-out animate-delay-0 overflow-hidden">
        <div
            class="lg:hidden block absolute z-[-500] left-1/2 -translate-x-1/2
            md:bottom-0 bottom-auto md:top-auto top-[-1rem]
            text-dark/20 leading-none font-bold md:text-[24rem] text-[10rem] h-full blur-[2px]">
          404
        </div>
        <div class="flex flex-col gap-2">
          <span class="md:text-[3rem] text-[1.8rem] font-bold text-dark leading-none
          animate-fade-up animate-once animate-duration-[1500ms] animate-ease-out animate-delay-0">
          Страница не найдена!</span>
          <span class="md:text-[1.8rem] text-[1rem] font-light text-dark
          animate-fade-up animate-once animate-duration-[1500ms] animate-ease-out animate-delay-200 leading-none">
          Откуда Вы взяли эту ссылку?<br/>Положите на место и не&nbsp;трогайте.
          </span>
        </div>
        <RouterLink
            class="group flex gap-4 items-center justify-center
            *:text-white font-light bg-dark md:rounded-xl rounded-xl px-4 md:py-4 py-3
            fhd:w-fit transition-all duration-[250ms] ease-out
            ring-dark
            focus:ring-[2px] focus:ring-offset-1 focus:ring-offset-lilac
            md:focus:ring-4 md:focus:ring-offset-4
            hover:bg-white hover:ring-white *:hover:text-dark
            animate-fade-up animate-duration-[1500ms] animate-ease-out animate-delay-300
            md:text-[1.3rem] text-[.9rem] *:leading-none overflow-hidden"
            to="/">
          <span>На главную</span>
          <i class="bi bi bi-chevron-right md:text-[1.2rem] text-[.9rem]
          group-hover:translate-x-[.5rem] group-active translate-x-0 transition-transform ease-out"/>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>