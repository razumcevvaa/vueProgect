<template>
  <div v-if="questions.length && !done" class="box">
    <div class="num-que">
      <h3>{{ num + 1 }}/{{ questions.length }}</h3>
      <h3>{{ questions[num].q }}</h3>
    </div>
    <div class="variants-ans">
      <div>
        <input type="radio" name="1-ans" :value="questions[num].variants[0]" v-model="ans">
        <label for="1-ans">{{ questions[num].variants[0] }}</label>
      </div>
      <div>
        <input type="radio" name="2-ans" :value="questions[num].variants[1]" v-model="ans">
        <label for="2-ans">{{ questions[num].variants[1] }}</label>
      </div>
      <div v-if="questions[num].variants[2]">
        <input type="radio" name="3-ans" :value="questions[num].variants[2]" v-model="ans">
        <label for="3-ans">{{ questions[num].variants[2] }}</label>
      </div>
      <div v-if="questions[num].variants[3]">
        <input type="radio" name="4-ans" :value="questions[num].variants[3]" v-model="ans">
        <label for="4-ans">{{ questions[num].variants[3] }}</label>
      </div>
    </div>
    <p style="color:red" v-if="error">{{ error }}</p>
    <button @click="next">Ответить</button>
  </div>
  <template v-else>
    <h3>Количество правильных ответов{{ rightAns }}</h3>
    <button @click="num = 0; rightAns=0; done=false"> Пройти еще раз</button>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const num = ref(0)
const ans = ref('')
const questions = localStorage.questions ? JSON.parse(localStorage.questions) : [] as any
const rightAns = ref(0)
const error = ref('')
const done = ref(false)
const next = () => {
  if (!ans.value) {
    error.value = 'Выберите правильный ответ'
    return
  }
  if (num.value + 1 < questions.length) {
    error.value = ''
    if (questions[num.value].c == ans.value) {
      rightAns.value++
    }
    ans.value = ''
    num.value++
  } else {
    done.value = true
  }
}

</script>

<style scoped>
.box {
  width: 500px;
}

.variants-ans {
  width: 500px;
}

.variants-ans div {}
</style>