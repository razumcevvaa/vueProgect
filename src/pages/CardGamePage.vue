<template>
<h1>Card Game</h1>
<CardGame/>
<!-- <transition-group name="fade" tag="div">
        <div v-if="showModal" class="modal-overlay">
          <div class="modal">
            <h2 class="winner">Победа!</h2>
            <button class="restart" @click="reStartGame">Сыграем ещё?</button>
          </div>
        </div>
      </transition-group> -->
</template>

<script setup lang="ts">
import CardGame from '#root/components/CardGame.vue';
</script>

<style scoped>

</style>