import { getCityAll } from '@/services'
import { defineStore } from 'pinia'

const useCityStore = defineStore('city', {
  state: () => ({
    allCity: {}
  }),
  actions: {
    async fetchAllCityAction() {
      const res = await getCityAll()
      this.allCity = res.data
    }
  }
})

export default useCityStore