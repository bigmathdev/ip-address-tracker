<template>
  <div class="absolute flex w-full flex-col items-center gap-8 p-4">
    <h1 class="text-2xl font-medium text-white drop-shadow-lg">IP Address Tracker</h1>
    <SearchIP />
    <InfoCard />
  </div>
</template>

<script setup>
import SearchIP from '@/components/SearchIP.vue'
import InfoCard from '@/components/InfoCard.vue'
</script>

<style></style>
