import { defineStore } from "pinia";

export const mainStore = defineStore('main', {
  state: () => ({
    totalPrice: 0
  }),
  actions: {
    plusTotal(newValue) {
      this.totalPrice += newValue
    },
    minusTotal(newValue) {
      this.totalPrice -= newValue
    },
  }
})