<template>
  <div class="flex w-full justify-center">
    <input
      type="text"
      class="w-full rounded-l-xl p-2 drop-shadow-lg placeholder:text-dark-gray focus:outline-none md:max-w-md"
      placeholder="Search for any IP address or domain"
      v-model="ipInput"
      @keyup.enter="searchMyIP(ipInput), (ipInput = '')"
    />
    <button
      class="items-center rounded-r-xl bg-very-dark-gray p-4 drop-shadow-lg hover:bg-dark-gray focus:outline-none"
      @click="searchMyIP(ipInput), (ipInput = '')"
    >
      <Icon class="text-white" icon="ep:arrow-right-bold" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

import { useSearchIPStore } from '@/stores/SearchIPStore'

const searchIP = useSearchIPStore()
const { searchMyIP } = searchIP

const ipInput = ref('')
</script>

<style></style>
