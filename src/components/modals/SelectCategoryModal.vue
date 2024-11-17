<script setup>
import Modal from "@/components/modals/Modal.vue";

const props = defineProps({
  categories: Array
})

const emit = defineEmits(['selectCategory'])
</script>

<template>
  <Modal title="Выберите категорию">
    <div class="flex flex-col gap-[1.2rem]">
      <div class="w-full ring-2 ring-lilac rounded-[.5rem]
      px-[1rem] py-[.5rem] cursor-pointer sm:text-[1.3rem] transition-all hover:bg-lilac hover:text-dark"
           @click="$emit('selectCategory', 'All')">
        All
      </div>
      <div v-for="category in props.categories" class="w-full ring-2 ring-lilac rounded-[.5rem]
      px-[1rem] py-[.5rem] cursor-pointer sm:text-[1.3rem] transition-all hover:bg-lilac hover:text-dark"
           @click="$emit('selectCategory', category)">
        {{ category[0].toUpperCase() + category.slice(1) }}
      </div>
    </div>
  </Modal>
</template>

<style scoped>

</style>