<script setup>
import MapContainer from '@/components/MapContainer.vue';
import InfoVisualization from '@/components/InfoVisualization.vue';
</script>

<template>
  <div>
    <InfoVisualization />
    <div class="h-screen w-screen">
      <nav class="h-52 bg-[url('../src/assets/pattern-bg-desktop.png')] bg-cover" />
      <MapContainer />
    </div>
  </div>
</template>
