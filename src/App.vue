<template>
  <h1 :style="'color:#'+color" @click="str += '!', colorFun">{{ str }}</h1>
  <VueCalc></VueCalc>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueCalc from './components/DelegatedCalc.vue'
const str = ref('Learn vue')
const color = ref(77777)
color.value = 77777
const colorFun = () => {
  color.value += 150000
}

</script>

<style scoped>
h1 {
  user-select: none;
}
</style>