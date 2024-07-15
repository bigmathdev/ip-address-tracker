<template>
  <div ref="map" id="map" />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import mapboxgl from 'mapbox-gl';

const mapKey = import.meta.env.VITE_MAPBOX_KEY
const map = ref(null)
mapboxgl.accessToken = mapKey

const props = defineProps({
  centerMap: Array
})

onMounted(()=> {
  map.value = new mapboxgl.Map({
    container: map.value,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: props.centerMap ? props.centerMap : [-46.6361100, -23.5475000],
    zoom: 9,
  })
  
  // new mapboxgl.Marker({anchor: 'center', color: 'black'})
  // .setLngLat([-46.6361100, -23.5475000])
  // .addTo(map.value)
})

watch(() => props.centerMap, (value) => {
  map.value.flyTo({ 
    center: value ,
    essential: true,
    speed: 0.2,
    zoom: 9,
  })

  // map.value = new mapboxgl.Marker({color: 'black'})
  // .setLngLat(value)
  // .addTo(map.value);
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