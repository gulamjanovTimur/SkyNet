<script setup>

import data from './assets/data.json'
import Step from './components/Step.vue'
import { mainStore } from './store/mainStore.js'
import { storeToRefs } from 'pinia'

const store = mainStore()
const { totalPrice } = storeToRefs(store)
</script>

<template>
  <div class="app">
    <Step :data="step" :key="index" v-for="(step, index) in data"/>
    <div class="app__result result">
      <span class="result__text">ИТОГО К ОПЛАТЕ</span>asd
      <span>{{totalPrice}} ₽</span>
    </div>
  </div>
    
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  width: 1200px;
  margin: 0 auto;
}
.result {
  background-color: #2FCB5A;
  border-radius: 4px;
  color: #fff;
  padding: 15px 15px 15px 20px;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  &__text {
    font-weight: bold;
  }
}
</style>
