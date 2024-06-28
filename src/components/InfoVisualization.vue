<template>
  <div class="absolute p-4 flex flex-col w-full items-center gap-8">
    <h1 class="font-bold text-white">IP Address Tracker</h1>
    <SearchIP/>
    <InfoCard/>
  </div>
</template>

<script setup>
import SearchIP from '@/components/SearchIP.vue'
import InfoCard from '@/components/InfoCard.vue'
</script>

<style></style>
