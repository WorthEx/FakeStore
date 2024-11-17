<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="fixed inset-0 z-[1000] size-full bg-lilac-light/10 backdrop-blur-xl" @click="$emit('closeModal')">
    <div class="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 bg-dark/70 sm:rounded-2xl rounded-xl
                flex flex-col *:w-full select-none ring-[1.5px] ring-white/20 w-[90%] md:w-fit md:min-w-[600px]"
         @click.stop.prevent>
      <div class="flex justify-between sm:gap-4 gap-2 items-center sm:px-6 px-3 sm:py-4 py-3">
        <span class="sm:text-[28px] text-[20px] font-bold leading-none text-white">{{ props.title }}</span>
        <i class="bi bi-x  text-white sm:text-[36px] text-[28px] leading-none cursor-pointer hover:rotate-[180deg] transition-all"
           @click="$emit('closeModal')"></i>
      </div>
      <div class="h-full sm:p-6 p-3 sm:pt-0 pt-0 text-white">
        <slot></slot>
      </div>
    </div>
  </div>
</template>