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

onMounted(() => {
  searchMyIP()
  map.value = new mapboxgl.Map({
    container: map.value,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: centerMap.value ? centerMap.value : [-46.6361100, -23.5475000],
    zoom: 9,
  })
})

watch(centerMap, (value) => {
  map.value.flyTo({
    center: value,
    essential: true,
    speed: 0.2,
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