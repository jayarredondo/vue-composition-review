import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  // holds all data properties
  state: () => ({
    count: 0,
    title: 'My Counter Title'
  }),
  // methods that can grab data from the state and change it. equivalent to computed props
  // only updates when dependencies change
  getters: {
    oddOrEven () {
      // must return a value
      return this.count % 2 === 0 ? 'even' : 'odd'
    }
  },
  // store methods which can access data in the state
  actions: {
    increaseCounter(amount) {
      this.count += amount
    },
    decreaseCounter(amount) {
      this.count -= amount;
    }
  }
})