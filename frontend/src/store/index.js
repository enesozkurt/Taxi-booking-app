import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default createStore({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    [Mutations.INCREMENT] (state) {
      state.count++
    },
    [Mutations.DECREMENT] (state) {
      if (state.count === 0) return

      state.count--
    }
  },
  actions: {
    increment ({ commit }) {
      commit(Mutations.INCREMENT)
    },
    decrement ({ commit }) {
      commit(Mutations.DECREMENT)
    },
    async fetchPassengers () {
      const request = await axios.get('/passengers')
      return request.data
    },
    async fetchPassenger (ctx, passengerId) {
      const request = await axios.get(`/passengers/${passengerId}`)
      return request.data
    },
    async fetchDrivers () {
      const request = await axios.get('/drivers')
      return request.data
    },
    async bookDriver ({ dispatch }, { passengerId, driverId, origin, destination }) {
      const request = await axios.post(`/passengers/${passengerId}/bookings`, ({
        driverId, origin, destination
      }))
      return request.data
    }
  },
  modules: {
  }
})
