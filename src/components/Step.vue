<script setup>
import { ref } from 'vue'
import Card from './Card.vue'

defineProps({
  data: Object
})

const step = ref(0)
</script>

<template>
  <div class="step">
    <h1 class="step__title">{{data.title}}</h1>
    <Card :ref="'card_' + index" class="step__card" :data="item" :key="index" v-for="(item, index) in data.variants"/>
  </div>
</template>

<style lang="scss" scoped>
  .step {
    border-top: 2px solid #CCCCCC;
    &__title {
      margin: 20px 0;
      font-size: 20px;
    }
    &__card {
      margin-bottom: 20px;
    }
  }
</style>