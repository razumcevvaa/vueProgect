<template>
  <div class="wrap">
    <div class="game">
      <div v-for="card in cards" :key="card.id" @click="flip(card)" class="card" :class="card.isOpened ? 'flipped' : ''">
        <img :src="card.img" class="front-face" />
        <img src="/imgBack.jpeg" class="back-face" />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
let flipped = {} as any

let isActive = false

const flip = (card:any) => {
  if (!isActive) {
    if (!flipped.img) {
      card.isOpened = true
      flipped = card
    } else {
      card.isOpened = true
      if (flipped.img == card.img) {
        card.matched = true
        flipped.matched = true
        flipped = {}
        // vse vern nichego ne delaem
        console.log('ok')
      } else {
        isActive = true
        console.log('not ok')
        flipped = ''
        setTimeout(() => {
          for (let card of cards.value) {
            if (card.matched) continue
            if (card.isOpened) card.isOpened = !card.isOpened
          }
          isActive = false
        }, 3000)
      }
    }
  }
}

const shuffleArray = (array:any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
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
    id: 6,
  },
  {
    img: "./card5.jpeg",
    isOpened: false,
    id: 7,
  },
  {
    img: "./card2.jpeg",
    isOpened: false,
    id: 8,
  },
  {
    img: "./card1.jpeg",
    isOpened: false,
    id: 9,
  },
  {
    img: "./card3.jpeg",
    isOpened: false,
    id: 10,
  },
] as any[])

shuffleArray(cards.value)

</script>
<style scoped>
.game {
  /* display: flex;
  flex-wrap: wrap; */
  width: 1200px;
    display: grid;
    grid-template-columns: 250px 250px 250px 250px 250px;
    grid-template-rows: 250px 250px;
    gap: 20px;
}

.wrap {
  padding: 0;
  width: 1400px;
}

img {
  width: 250px;
  height: 250px;
}

.card {
  position: relative;
}
.flipped .front-face {
  transform: rotate3d(0, 1, 0, 0deg);
        transition: 1s 1s
}
.flipped .back-face {
  transform: rotate3d(0, 1, 0, 90deg);
        transition: 1s ;
}
.front-face {
  top: 0;
  left: 0;
  width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 5px;
    transform: rotate3d(0, 1, 0, 90deg);
    transition: 1s ;
}

.back-face {
  top: 0;
  left: 0;
  width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 5px;
        transform: rotate3d(0, 1, 0, 0deg);
        transition: 1s 1s;
}
</style>