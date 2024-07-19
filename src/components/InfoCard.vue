<template>
  <div
    v-if="resultRequest"
    class="z-10 flex w-full flex-col gap-4 rounded-xl bg-white p-6 text-center md:max-w-5xl md:flex-row md:justify-around"
  >
    <div class="md:text-start">
      <span class="text-[0.60rem] font-bold uppercase text-dark-gray">Ip Address</span>
      <p class="font-bold text-very-dark-gray">{{ resultRequest.ip }}</p>
    </div>
    <div class="md:border-l md:pl-4 md:text-start">
      <span class="text-[0.60rem] font-bold uppercase text-dark-gray">Location</span>
      <p class="font-bold text-very-dark-gray">
        {{
          `${resultRequest.location.city},
        ${resultRequest.location.region}, ${resultRequest.location.country}`
        }}
      </p>
    </div>
    <div class="md:border-l md:pl-4 md:text-start">
      <span class="text-[0.60rem] font-bold uppercase text-dark-gray">Timezone</span>
      <p class="font-bold text-very-dark-gray">{{ `UTC ${resultRequest.location.timezone}` }}</p>
    </div>
    <div class="md:border-l md:pl-4 md:text-start">
      <span class="text-[0.60rem] font-bold uppercase text-dark-gray">Isp</span>
      <p class="font-bold text-very-dark-gray">{{ resultRequest.isp }}</p>
    </div>
  </div>
  <div
    v-else
    class="z-10 flex w-full flex-col gap-4 rounded-xl bg-white p-10 text-center drop-shadow-lg md:max-w-5xl md:flex-row md:justify-around"
  >
    <span class="font-bold text-very-dark-gray">Obtendo informações...</span>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSearchIPStore } from '@/stores/SearchIPStore'

const searchIp = useSearchIPStore()
const { resultRequest } = storeToRefs(searchIp)
</script>

<style></style>
