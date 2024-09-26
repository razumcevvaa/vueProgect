<template>
  <div class="wrap">
    <div class="game">
      <div v-for="card in cards" :key="card.id" @click="onCardClicked($event, card)" class="card" :data-id="card.id">
        <div class="inside">
          <div class="front">
            <img :src="card.img" />
          </div>
          <div class="back">
            <img src="/imgBack.jpeg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
const onCardClicked = (event: any) => {
  let cardId = event.target.getAttribute('data-id')
  if (!event.cards.includes(cardId)) {
    
  }
}

const cards = ref([
  {
    img: "./card1.jpeg",
    isOpened: false,
    id: 1,
  },
  {
    img: "./card2.jpeg",
    isOpened: false,
    id: 2,
  },
  {
    img: "./card3.jpeg",
    isOpened: false,
    id: 3,
  },
  {
    img: "./card4.jpeg",
    isOpened: false,
    id: 4,
  },
  {
    img: "./card5.jpeg",
    isOpened: false,
    id: 5,
  },
  {
    img: "./card4.jpeg",
    isOpened: false,
    id: 4,
  },
  {
    img: "./card5.jpeg",
    isOpened: false,
    id: 5,
  },
  {
    img: "./card2.jpeg",
    isOpened: false,
    id: 2,
  },
  {
    img: "./card1.jpeg",
    isOpened: false,
    id: 1,
  },
  {
    img: "./card3.jpeg",
    isOpened: false,
    id: 3,
  },
])
</script>
<style scoped>

.game {
  display: flex;
  flex-wrap: wrap;
}

.wrap {
  position: relative;
  padding: 0;
  width: 1400px;
}

img {
  width: 250px;
}

.card {
  padding: 10px;
}
.card .inside {
  width: 100%;
  height: 100%;
  display: block;
  transform-style: preserve-3d;
  transition: 0.4s ease-in-out;
  background: white;
}
.card .front{
  display: none;
}
</style>