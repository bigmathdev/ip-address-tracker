<script setup>
import { ref } from 'vue';
import MapContainer from '@/components/MapContainer.vue';
import InfoVisualization from '@/components/InfoVisualization.vue';

const centerMap = ref()
</script>

<template>
  <div>
    <InfoVisualization @centerMap="(value) => centerMap = value"/>
    <div class="h-screen w-screen font-rubik">
      <nav class="h-52 bg-[url('../src/assets/pattern-bg-desktop.png')] bg-cover" />
      <MapContainer :centerMap="centerMap"/>
    </div>
  </div>
</template>
