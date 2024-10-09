<template>
  <h1>Card Game</h1>
  <transition name="fade" mode="out-in">
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h2 class="winner">Победа!</h2>
        <button class="restart" @click="reStartGame">Сыграем ещё?</button>
      </div>
    </div>
    <CardGame v-else v-model="showModal" />
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CardGame from '#root/components/CardGame.vue';

const showModal = ref(false)
const restartGame = ref(false)
const reStartGame = () => {
  showModal.value = false
  restartGame.value = true
}

</script>

<style scoped>

</style>