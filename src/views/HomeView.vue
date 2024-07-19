<template>
  <div>
    <InfoVisualization />
    <div class="h-screen w-screen">
      <nav class="sm:h-52 h-72 sm:bg-[url('../src/assets/pattern-bg-desktop.png')] bg-[url('../src/assets/pattern-bg-mobile.png')] bg-cover" />
      <MapContainer />
    </div>
  </div>
</template>

<script setup>
import MapContainer from '@/components/MapContainer.vue';
import InfoVisualization from '@/components/InfoVisualization.vue';
</script>
