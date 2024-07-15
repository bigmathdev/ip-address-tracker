<template>
  <div class="bg-white text-center p-6 rounded-xl w-full flex flex-col gap-4 md:flex-row md:max-w-5xl md:justify-around">
    <div class="md:text-start">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Ip Address</span>
      <p class="font-bold text-very-dark-gray">{{ props.result ? props.result.ip : ''}}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Location</span>
      <p class="font-bold text-very-dark-gray">{{ props.result ? `${props.result.location.city}, ${props.result.location.region}, ${props.result.location.country}` : '' }}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Timezone</span>
      <p class="font-bold text-very-dark-gray">{{ props.result ? `UTC ${props.result.location.timezone}` : '' }}</p>
    </div>
    <div class="md:text-start md:border-l md:pl-4">
      <span class="uppercase text-[0.60rem] font-bold text-dark-gray ">Isp</span>
      <p class="font-bold text-very-dark-gray">{{ props.result ? props.result.isp : '' }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['result'])
</script>

<style></style>