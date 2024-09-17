<template>
  <h1>Home</h1>

  <HeaderComp />
  <VueCalc></VueCalc>
  <TodosL />
  <StudentGroup />
  <SomeThing />
  <TabWindow />
  <MyTest v-if="makeTest"/>
  <button @click="makeTest=!makeTest">{{!makeTest?'Сделать тест':'Hide'}}</button>
  <button @click="showTest=!showTest">Start test</button>
  <TestDone v-if="showTest"/>
</template>

<script setup lang="ts"> 
import { ref } from 'vue'
import VueCalc from '#root/components/DelegatedCalc.vue'
import TodosL from '#root/components/TodoList.vue'
import HeaderComp from '#root/components/HeaderComp.vue'
import StudentGroup from '#root/components/StudentGroup.vue'
import SomeThing from '#root/components/SomeThing.vue'
import TabWindow from '#root/components/TabWindow.vue'
import MyTest from '#root/components/MyTest.vue'
import TestDone from '#root/components/TestDone.vue'
const showTest = ref(false)
const makeTest = ref(false)

</script>

<style scoped></style>