<template>
  <div>
    <InfoVisualization />
    <div class="h-screen w-screen">
      <nav
        class="h-72 bg-[url('../assets/pattern-bg-mobile.png')] bg-cover sm:h-52 sm:bg-[url('../assets/pattern-bg-desktop.png')]"
      />
      <MapContainer />
    </div>
  </div>
</template>

<script setup>
import MapContainer from '@/components/MapContainer.vue'
import InfoVisualization from '@/components/InfoVisualization.vue'
</script>
