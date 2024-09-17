<template>
  <div v-if="questions.length" class="box">
    <div class="num-que">
      <h3>{{num+1}}/{{ questions.length }}</h3>
      <h3>{{ questions[num].q }}</h3>
    </div>
    <div class="variants-ans">
      <div>
        <input type="radio" name="1-ans" :value="questions[num].variants[0]" v-model="ans">
        <p>{{ questions[num].variants[0] }}</p>
      </div>
      <div>
        <input type="radio" name="2-ans" :value="questions[num].variants[1]" v-model="ans">
        <p>{{ questions[num].variants[1] }}</p>
      </div>
      <div v-if="questions[num].variants[2]">
        <input type="radio" name="3-ans" :value="questions[num].variants[2]" v-model="ans">
        <p>{{ questions[num].variants[2] }}</p>
      </div>
      <div v-if="questions[num].variants[3]">
        <input type="radio" name="4-ans" :value="questions[num].variants[3]" v-model="ans">
        <p>{{ questions[num].variants[3] }}</p>
      </div>
    </div>
    <button @click="next">Ответить</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const num = ref(0)
const ans = ref('')
const questions = localStorage.questions ? JSON.parse(localStorage.questions) : [] as any
const next = ()=>{
  if (num.value+1<questions.length) {
    if (questions[num.value].c==ans.value) {

    }
    num.value++
  } else {
    
  }
}

</script>