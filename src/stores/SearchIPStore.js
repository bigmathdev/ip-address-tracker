import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useSearchIPStore = defineStore('SearchIPStore', () => {
  const geolocationKey = import.meta.env.VITE_GEOLOCATION_KEY
  // const geolocationKey = '94128ab310d0b94ccd72d6a1db7f29b0c4f71499'

  const resultRequest = ref()
  const centerMap = ref()

  const searchMyIP = async (ip) => {
    try {
      const response = await axios.get(
        `https://api.getgeoapi.com/v2/ip/${ip ? ip : 'check'}?api_key=${geolocationKey}`
      )
      resultRequest.value = response.data
      centerMap.value = [resultRequest.value.location.longitude, resultRequest.value.location.latitude]
    } catch (error) {
      console.log(error)
    }
  }

  return { resultRequest, centerMap, searchMyIP }
})
