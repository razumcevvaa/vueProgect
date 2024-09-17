<template>
  <div class="test-box">
    <div class="all-que">
      <h4>All questions:</h4>
      <ul v-for="el in questions" class="box-qwe">
        <li style="font-weight: 800;">{{ el.q }}</li>
        <li style="color: green;">Correct answer: {{ el.c }}</li>
        <li>Answer variants: {{ el.variants }}</li>
      </ul>
    </div>
    <hr>
    <h4>Add new questions:</h4>
    <form @submit.prevent="addQuestion">
      <div class="df">
        <p>Question:</p>
        <input v-model="newQuestion" type="text" name="question" id="question">
      </div>
      <div class="df">
        <p>Correct answer:</p>
        <input v-model="Canser" type="text" name="c-answer" id="c-answer">
      </div>
      <div class="df">
        <p>Answer variants:</p>
        <input v-model="Wanswer1" type="text" name="w-answer" id="w-answer">
        <input v-model="Wanswer2" type="text" name="w-answer" id="w-answer">
        <input v-model="Wanswer3" type="text" name="w-answer" id="w-answer">
        <input v-model="Wanswer4" type="text" name="w-answer" id="w-answer">
      </div>
      <p style="color:red" v-if="error">{{ error }}</p>
      <button type="submit">ADD</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const locQuestions = localStorage.questions ? JSON.parse(localStorage.questions) : [] as any

const questions = ref(locQuestions)
const error = ref('')
const Canser = ref('')
const Wanswer1 = ref('')
const Wanswer2 = ref('')
const Wanswer3 = ref('')
const Wanswer4 = ref('')
const newQuestion = ref('')

const addQuestion = () => {
  const variants = [] as string[]
  if (Wanswer1.value) variants.push(Wanswer1.value)
  if (Wanswer2.value) variants.push(Wanswer2.value)
  if (Wanswer3.value) variants.push(Wanswer3.value)
  if (Wanswer4.value) variants.push(Wanswer4.value)
  if (!newQuestion.value) {
    error.value = 'no question'
    return
  }
  if (!Canser.value) {
    error.value = 'no correct answ'
    return
  }
  if (variants.length < 2) {
    error.value = 'variants less then 2'
    return
  }
  if (!variants.includes(Canser.value)) {
    error.value = 'variants not include correct answ'
    return
  }
  questions.value.push({ q: newQuestion.value, c: Canser.value, variants })
  newQuestion.value = ''
  Canser.value = ''
  error.value = ''
  Wanswer1.value = ''
  Wanswer2.value = ''
  Wanswer3.value = ''
  Wanswer4.value = ''
  localStorage.questions = JSON.stringify(questions.value)
}


</script>

<style scoped>
.box-qwe{
  width: 500px;
  text-align: justify;
  border: 1px solid black;
}
.startT{
  margin: 10px 0;
}
.test-box {
  width: 500px;
}

.df {
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
}

h4 {
  text-align: left;
  margin: 5px 0;
}

button {
  width: 500px;
}

.all-que {
  text-align: left;
}

li {
  list-style: none;
}

#w-answer {
  width: 65px;
}
</style>