<script setup>
const props = defineProps({
  error: Boolean,
  errorMsg: String,
})
</script>

<template>
  <div
      class="min-h-screen fixed inset-0 z-[1000] size-full bg-lilac/50 backdrop-blur-xl">
    <div class="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2
                flex flex-col items-center gap-[3rem] select-none"
         @click.stop.prevent>
      <svg v-if="!error" class="size-[40px]" viewBox="0 0 200 200"
           xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="65" fill="#424874" r="10" stroke="#424874" stroke-width="2">
          <animate attributeName="cy" begin="-.4" calcMode="spline" dur="2" keySplines=".5 0 .5 1;.5 0 .5 1"
                   repeatCount="indefinite" values="65;135;65;"></animate>
        </circle>
        <circle cx="100" cy="65" fill="#424874" r="10" stroke="#424874" stroke-width="2">
          <animate attributeName="cy" begin="-.2" calcMode="spline" dur="2" keySplines=".5 0 .5 1;.5 0 .5 1"
                   repeatCount="indefinite" values="65;135;65;"></animate>
        </circle>
        <circle cx="160" cy="65" fill="#424874" r="10" stroke="#424874" stroke-width="2">
          <animate attributeName="cy" begin="0" calcMode="spline" dur="2" keySplines=".5 0 .5 1;.5 0 .5 1"
                   repeatCount="indefinite" values="65;135;65;"></animate>
        </circle>
      </svg>
      <div class="flex flex-col gap-[1rem] items-center">
        <i v-if="error" class="bi bi-exclamation-circle-fill text-dark sm:text-[40px] text-[32px] leading-none"></i>
        <div
            class="text-dark font-light text-[16px] sm:text-[24px] leading-none *:text-nowrap *:whitespace-nowrap">
          <slot v-if="!props.error"></slot>
          <div v-else>{{ props.errorMsg }}</div>
        </div>
      </div>
      <RouterLink v-if="props.error"
                  class="leading-none sm:px-4 px-3 sm:py-3 py-2 ring-[1.5px] ring-dark rounded-lg hover:ring-dark transition-all active:scale-[98%]"
                  to="/"><span
          class="text-dark font-light text-[16px] sm:text-[20px] leading-none block">На главную</span>
      </RouterLink>
    </div>
  </div>
</template>