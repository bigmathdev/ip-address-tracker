<template>
  <div ref="map" id="map" />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import mapboxgl from 'mapbox-gl';

import { useSearchIPStore } from '@/stores/SearchIPStore';

const IpStore = useSearchIPStore()
const { searchMyIP } = IpStore
const { centerMap } = storeToRefs(IpStore)

const mapKey = import.meta.env.VITE_MAPBOX_KEY
const map = ref(null)

mapboxgl.accessToken = mapKey

onMounted(async () => {
  await searchMyIP()
  map.value = new mapboxgl.Map({
    container: map.value,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: centerMap.value,
    zoom: 9,
  })
  new mapboxgl.Marker({ color: 'black' }).setLngLat(centerMap.value).addTo(map.value)
})

watch(centerMap, (value) => {
  map.value.flyTo({
    center: value,
    essential: true,
    speed: 0.2,
    zoom: 9,
  })
  new mapboxgl.Marker({ color: 'black' }).setLngLat(value).addTo(map.value)
})

</script>

<style>
.mapboxgl-control-container {
  @apply hidden;
}

#map {
  height: 100%;
  width: 100%;
}
</style>