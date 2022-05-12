<script setup>
import { ref, computed  } from 'vue'
import { mainStore } from '../store/mainStore.js'

const { plusTotal, minusTotal } = mainStore()

function updateTotal() {
  if(isReady.value) {
    minusTotal(totalPrice.value)
  } else {
    plusTotal(totalPrice.value)
  }
  isReady.value = !isReady.value
}

const props = defineProps({
  data: Object
})

const isReady = ref(false)
const option = ref([])
const selected = ref(0)
const totalPrice = computed(() => {
  const optionValue = ref(option).value.reduce((pv, cv) => {
      pv += cv
      return pv
  }, 0);
    return props.data.price_default + ref(selected).value + optionValue
  })
</script>

<template>
  <div :class="{'card--ready' : !isReady}" class="card">
    <div class="card__header header">
      <h2 class="header__title">{{data.title}}</h2>
      <div class="header__price">{{totalPrice}} ₽</div>
    </div>
    <div class="card__content content">
      <div class="content__description" v-html="data.description"/>
      <form class="form content__form">
        <div :key="index" v-for="(item, index) in data.options" class="form__field checkbox-field">
          <input :disabled="isReady" :value="item.price" v-model="option" class="checkbox-field__checkbox" type="checkbox"/>
          <div class="checkbox-field__title">{{item.title}}</div>
        </div>
        <div :key="index" v-for="(select, index) in data.select"  class="form__field select-field">
          <div class="select-field__description">{{select.title}}</div>
          <select :disabled="isReady" v-model="selected" class="form__field select-field">
            <option :key="index" v-for="(option, index) in select.items" :value="option.price">{{option.title}}</option>
          </select>
        </div>
        <button :class="{'form-btn--ready' : isReady}" @click.prevent="updateTotal" class="form__btn form-btn">{{!isReady ? 'Выбрать' : 'Выбрано'}}</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    background-color: #F8F8F8;
    border-left: 7px solid #CCCCCC;
    border-radius: 6px;
    padding: 15px;
    &__header {
      margin-bottom: 10px;
    }
    &--ready {
      border-left: 7px solid #2FCB5A;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__title {
      margin: 0;
    }
    &__price {
      text-align: right;
      font-size: 24px;
      font-weight: bold;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    &__description {
      color: #5A5855;
      white-space: pre-wrap;
      line-height: 40px;
      margin-right: 20px;
    }
    &__form {
      min-width: 400px;
      width: 400px;
    }
  }
  .form {
    padding: 20px 0 0 20px;
    border-left: 1px solid #B8B8B8;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &__field {
      margin-bottom: 20px;
      padding: 10px 0;
      width: 100%;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__btn {
      width: 100%;
      padding: 10px 0;
    }
  }
  .form-btn {
    background-color: #98ABBA;
    color: #fff;
    border: none;
    border-radius: 4px;
    &--ready {
      background-color: #2FCB5A;
    }
  }
  .checkbox-field {
    display: flex;
    border: 1px solid #B8B8B8;
    border-radius: 4px;
    &__checkbox {
      margin-left: 10px;
    }
    &__title {
      width: 100%;
      text-align: center;
      color: #5A5855;
    }
  }
</style>
