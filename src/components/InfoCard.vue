<template>
  <div
    class="bg-white text-center z-10 p-6 rounded-xl w-full flex flex-col gap-4 md:flex-row md:max-w-5xl md:justify-around">
    <div class="md:text-start">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Ip Address</span>
      <p class="font-bold text-very-dark-gray">{{ resultRequest ? resultRequest.ip : '' }}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Location</span>
      <p class="font-bold text-very-dark-gray">{{ resultRequest ? `${resultRequest.location.city},
        ${resultRequest.location.region}, ${resultRequest.location.country}` : '' }}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Timezone</span>
      <p class="font-bold text-very-dark-gray">{{ resultRequest ? `UTC ${resultRequest.location.timezone}` : '' }}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Isp</span>
      <p class="font-bold text-very-dark-gray">{{ resultRequest ? resultRequest.isp : '' }}</p>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useSearchIPStore } from '@/stores/SearchIPStore';

const searchIp = useSearchIPStore()
const { resultRequest } = storeToRefs(searchIp)

</script>

<style></style>