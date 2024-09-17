<template>
  <div class="container">
    <form @submit.prevent="add">
      <input v-model="message" type="text" placeholder="ToDo">
    </form>
    <input v-model="text" type="text" placeholder="find">
    <select id="todo" v-model="select">
      <option value="All">Все</option>
      <option value="1">done</option>
      <option value="2">Отмененные</option>
      <option value="3">Удаленные</option>
    </select>
    <ul>
      <li :data-check="el.check" v-for="el of compArr" :key="el.id">{{ el.text }}
        <span v-if="el.check == 0">
          <button @click="check(el.id, 1)">done</button>
          <button @click="check(el.id, 2)">cancel</button>
          <button @click="check(el.id, 3)">remove</button>
        </span>
      </li>
    </ul>
    <button @click="clean">clear</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const select = ref('All')
const message = ref('')
const text = ref('')
const localArr = localStorage.arr ? JSON.parse(localStorage.arr) : []
const arr = ref(localArr as any[])

const add = () => {
  arr.value.push(
    { text: message.value, id: arr.value.length, check: 0 }
  )
  localStorage.arr = JSON.stringify(arr.value)
  message.value = ''
}

const clean = () => {
  arr.value = []
  delete localStorage.arr
  //и сделать автомат перезагрузку
}

const check = (id: number, check: number) => {
  const el = arr.value.find(el => el.id == id)
  el.check = check
  localStorage.arr = JSON.stringify(arr.value)
}

const compArr = computed(() => {
  if (select.value == 'All') {
    if (text.value) {
      return arr.value.filter((el) => el.text.includes(text.value))
    }
    return arr.value
  } else {
    if (text.value) {
      return arr.value.filter((el) => el.text.includes(text.value) && el.check==parseInt(select.value))
    }
    return arr.value.filter((el) => el.check==parseInt(select.value))
  }
})
</script>


<style scoped>
[data-check="1"] {
  text-decoration: line-through;
}

[data-check="2"] {
  background-color: red;
}

[data-check="3"] {
  background-color: green;
}

.container {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 50px 0;
}

input {
  width: 350px;
  height: 20px;
}

ul {
  width: 300px;
}
select{
  width: 100px;
}
</style>