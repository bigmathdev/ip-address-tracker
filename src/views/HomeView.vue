<script setup>
import { ref } from 'vue';
import {useSearchIPGeolocation} from '@/composable/SearchIP'

const myIP = ref()
const { searchMyIP } = useSearchIPGeolocation()
</script>

<template>
  <div>
    <label for="">Digite o endereço IP: </label>
    <input class="border" type="text" v-model="myIP">
    <button class="border bg-blue-500 rounded-md p-2 text-white" @click="searchMyIP(myIP)">Enviar solicitação</button>
  </div>
</template>
