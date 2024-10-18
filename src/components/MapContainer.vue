<template>
  <div ref="map" id="map" />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import mapboxgl from 'mapbox-gl'

import { useSearchIPStore } from '@/stores/SearchIPStore'

const IpStore = useSearchIPStore()
const { centerMap } = storeToRefs(IpStore)

const mapKey = import.meta.env.VITE_MAPBOX_KEY
const map = ref(null)

mapboxgl.accessToken = mapKey

onMounted(() => {
  map.value = new mapboxgl.Map({
    container: map.value,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-46.6333094, -23.5505199],
    zoom: 9
  })
})

watch(centerMap, (value) => {
  map.value.flyTo({
    center: value,
    essential: true,
    speed: 0.2,
    zoom: 9
  })
  
  new mapboxgl.Marker({ color: 'black' }).setLngLat(value).addTo(map.value)
})
</script>

<style>
.mapboxgl-control-container {
  @apply hidden;
}

#map {
  height: calc(100% - 18rem);
  width: 100%;
}

@media only screen and (min-width: 768px) {
  #map {
    height: calc(100% - 13rem);
  }
}
</style>
