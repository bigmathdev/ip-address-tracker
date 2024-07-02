<template>
  <div class="absolute p-4 flex flex-col w-full items-center gap-8">
    <h1 class="text-white text-2xl font-medium">IP Address Tracker</h1>
    <SearchIP @resultRequest="(value) => result = value"/>
    <InfoCard  :result="result"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchIP from '@/components/SearchIP.vue'
import InfoCard from '@/components/InfoCard.vue'

const result = ref()
</script>

<style></style>
