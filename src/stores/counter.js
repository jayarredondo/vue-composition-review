import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  // holds all data properties
  state: () => ({
    counter: 0
  }),
  // methods that can grab data from the state and change it.
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  // store methods which can access data in the state
  actions: {
    increment() {
      this.counter++
    }
  }
})
