<template>
  <h1>{{ text }}</h1>

  <p>{{ message }}</p>
  <input v-model="message" type="text">

  <ol style="width: 200px;">
    <li v-for="todo in todos"> {{ todo.text }} level {{ todo.level }}
    </li>
  </ol>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('Learne vue please')

const message = ref('здесь будет ваш текст')

const todos = ref([
  { text: 'HTML/CSS', level: 9 },
  { text: 'JS', level: 7 },
  { text: 'Vue', level: 3 },
])
</script>