import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useSearchIPStore = defineStore('SearchIPStore', () => {
  const ipifyKey = import.meta.env.VITE_IPIFY_KEY

  const resultRequest = ref()
  const centerMap = ref()

  const searchMyIP = async (ip) => {
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${ipifyKey}${ip ? `&ipAddress=${ip}` : ''}`
      )
      resultRequest.value = await response.data
      centerMap.value = [resultRequest.value.location.lng, resultRequest.value.location.lat]
    } catch (error) {
      console.log(error)
    }
  }

  return { resultRequest, centerMap, searchMyIP }
})