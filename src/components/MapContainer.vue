<template>
  <div ref="map" id="map" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import mapboxgl from 'mapbox-gl';

const mapKey = import.meta.env.VITE_MAPBOX_KEY
const map = ref(null)

mapboxgl.accessToken = mapKey

onMounted(()=> {
  map.value = new mapboxgl.Map({
    container: map.value,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [0, 0],
    zoom: 9,
  })
})
</script>

<style>
.mapboxgl-control-container {
  @apply hidden
}

#map {
  height: calc(100% - 13rem);
  width: 100%;
}

</style>