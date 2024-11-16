<script setup>
const props = defineProps({
  error: Boolean,
  errorMsg: String,
})
</script>

<template>
  <div
      class="min-h-screen fixed inset-0 z-[1000] size-full bg-black/80 backdrop-blur-lg">
    <div class="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2
                flex flex-col items-center gap-5 select-none"
         @click.stop.prevent>
      <svg v-if="!error" class="size-[40px]" viewBox="0 0 200 200"
           xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="65" fill="#ffffff" r="10" stroke="#ffffff" stroke-width="2">
          <animate attributeName="cy" begin="-.4" calcMode="spline" dur="2" keySplines=".5 0 .5 1;.5 0 .5 1"
                   repeatCount="indefinite" values="65;135;65;"></animate>
        </circle>
        <circle cx="100" cy="65" fill="#ffffff" r="10" stroke="#ffffff" stroke-width="2">
          <animate attributeName="cy" begin="-.2" calcMode="spline" dur="2" keySplines=".5 0 .5 1;.5 0 .5 1"
                   repeatCount="indefinite" values="65;135;65;"></animate>
        </circle>
        <circle cx="160" cy="65" fill="#ffffff" r="10" stroke="#ffffff" stroke-width="2">
          <animate attributeName="cy" begin="0" calcMode="spline" dur="2" keySplines=".5 0 .5 1;.5 0 .5 1"
                   repeatCount="indefinite" values="65;135;65;"></animate>
        </circle>
      </svg>
      <i v-else class="bi bi-exclamation-circle-fill text-white sm:text-[40px] text-[32px] leading-none"></i>
      <div class="text-white font-light text-[16px] sm:text-[24px] leading-none *:text-nowrap *:whitespace-nowrap">
        <slot v-if="!props.error"></slot>
        <div v-else>{{ props.errorMsg }}</div>
      </div>
      <RouterLink v-if="props.error"
                  class="leading-none sm:px-4 px-3 sm:py-3 py-2 ring-[1.5px] ring-white/50 rounded-lg hover:ring-white transition-all active:scale-[98%]"
                  to="/"><span
          class="text-white font-light text-[16px] sm:text-[20px] leading-none block">На главную</span>
      </RouterLink>
    </div>
  </div>
</template>