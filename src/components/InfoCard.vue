<template>
  <div class="bg-white text-center p-6 rounded-xl w-full flex flex-col gap-4 md:flex-row md:max-w-5xl md:justify-around">
    <div class="md:text-start">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Ip Address</span>
      <p class="font-bold text-very-dark-gray">{{ resultRequest ? resultRequest.ip : ''}}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Location</span>
      <p class="font-bold text-very-dark-gray">{{ info.Location }}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Timezone</span>
      <p class="font-bold text-very-dark-gray">{{ info.Timezone }}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Isp</span>
      <p class="font-bold text-very-dark-gray">{{ info.ISP }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchIPGeolocation } from '@/composable/SearchIPComposable';

const { resultRequest } = useSearchIPGeolocation()

console.log(resultRequest)

const info = ref({
  ipAdrress: '127.0.0.1',
  Location: 'Brooklyn, NY, USA',
  Timezone: 'UTC+00:00',
  ISP: 'Google LLC',
})
</script>

<style></style>