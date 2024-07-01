import { ref } from "vue";
import axios from 'axios'

export const useSearchIPGeolocation = () => {
  const ipifyKey = import.meta.env.VITE_IPIFY_KEY

  const resultRequest = ref()

  const searchMyIP = (ip) => {
    axios
    .get(`https://geo.ipify.org/api/v2/country?apiKey=${ipifyKey}&ipAddress=${ip}`)
    .then((response) => {
      resultRequest.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return {
    searchMyIP,
    resultRequest
  }
}