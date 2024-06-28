<template>
  <div class="bg-white text-center p-6 rounded-xl w-full flex flex-col gap-4 md:flex-row md:max-w-5xl md:justify-around">
    <div class="md:text-start">
      <span>IP ADDRESS</span>
      <p>{{ info.ipAdrress }}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span>LOCATION</span>
      <p>{{ info.Location }}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span>TIMEZONE</span>
      <p>{{ info.Timezone }}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span>ISP</span>
      <p>{{ info.ISP }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const info = ref({
  ipAdrress: '127.0.0.1',
  Location: 'Brooklyn, NY, USA',
  Timezone: 'UTC+00:00',
  ISP: 'Google LLC',
})
</script>

<style></style>