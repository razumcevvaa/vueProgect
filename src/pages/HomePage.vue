<template>
  <h1>Home</h1>
  
  <HeaderComp />
  <VueCalc></VueCalc>
  <TodosL />
  <StudentGroup />
  <SomeThing />
  <TabWindow />
  <MyTest />
</template>

<script setup lang="ts">
import VueCalc from '#root/components/DelegatedCalc.vue'
import TodosL from '#root/components/TodoList.vue'
import HeaderComp from '#root/components/HeaderComp.vue'
import StudentGroup from '#root/components/StudentGroup.vue'
import SomeThing from '#root/components/SomeThing.vue'
import TabWindow from '#root/components/TabWindow.vue'
import MyTest from '#root/components/MyTest.vue'
</script>

<style scoped>

</style>