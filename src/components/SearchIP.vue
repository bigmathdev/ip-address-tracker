<template>
  <div class="flex w-full justify-center">
    <input type="text" class="p-2 rounded-l-xl focus:outline-none w-full md:max-w-md placeholder:text-dark-gray" placeholder="Search for any IP address or domain">
    <button class="bg-very-dark-gray items-center p-4 rounded-r-xl focus:outline-none hover:bg-dark-gray">
      <Icon class="text-white" icon="ep:arrow-right-bold" />
    </button>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style></style>