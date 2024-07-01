<template>
  <div class="flex w-full justify-center">
    <input type="text" class="p-2 rounded-l-xl focus:outline-none w-full md:max-w-md placeholder:text-dark-gray" placeholder="Search for any IP address or domain" v-model="textInput">
    <button class="bg-very-dark-gray items-center p-4 rounded-r-xl focus:outline-none hover:bg-dark-gray" @click="searchMyIP(textInput)">
      <Icon class="text-white" icon="ep:arrow-right-bold" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';
import { useSearchIPGeolocation } from '@/composable/SearchIPComposable';

const { searchMyIP, resultRequest } = useSearchIPGeolocation()
const textInput = ref('')
const emit = defineEmits('resultRequest')


</script>

<style></style>