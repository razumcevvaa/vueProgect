<template>
  <div class="test-box">
    <div class="all-que">
      <h4>All questions:</h4>
      <ul>
        <li v-for="question in questions">{{ question }}</li>
        <li>Correct answer: {{ Canser }}</li>
        <li>Wrong answer: {{ Wanswer }}</li>
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
      <p>Wrong answer:</p>
      <input v-model="Wanswer" type="text" name="w-answer" id="w-answer">
    </div>
    <button @click="addQuestion" type="submit">ADD</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const questions = ref([])
const Canser = ref('')
const Wanswer = ref('')
const newQuestion = ref('')

// const addQuestion() => {
//   if (!newQuestion.value) return
//   questions.value.push(newQuestion.value)
//   newQuestion.value = ''
// }


</script>

<style>
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
</style>