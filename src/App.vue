<template>
  <RouterLink class="link" to="/vueProgect/">На главную</RouterLink>
  <RouterLink class="link" to="/vueProgect/cardGame">Card Game</RouterLink>
  <RouterLink class="link" to="/vueProgect/new">New</RouterLink>
  <RouterView></RouterView>
</template>

<script setup lang="ts">


</script>

<style scoped>
.link {
  margin: 20px;
  color: pink;
}
</style>