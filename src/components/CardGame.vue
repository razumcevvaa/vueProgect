<template>
  <div class="wrap">
    <div class="game">
      <div v-for="card in cards" :key="card.id" @click="flip(card)" class="card">
        <img :src="card.img" class="back-face" />
        <img src="/imgBack.jpeg" class="front-face" />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
let flipped = ''

const flip = (card:any) => {
  if (!flipped) {
    flipped = card.img
    card.isOpened = true
  } else {
    card.isOpened = true
    if (flipped == card.img) {
      flipped = ''
      // vse verno nichego ne delaem
      console.log('ok')
    } else {
      console.log('not ok')
      flipped = ''
      setTimeout(() => {
        for (let card of cards.value) {
          if (card.isOpened) card.isOpened = !card.isOpened
        }
      }, 1000)
    }
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
])

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
.front-face {
        transform: rotate3d(0, 1, 0, 0deg);
        transition: 1s 1s;
    }
.back-face {
        transform: rotate3d(0, 1, 0, 90deg);
        transition: 1s ;
    }
.front-face {
  /* position: absolute; */
  border-radius: 5px;
  transform: rotate3d(0, 1, 0, 0deg);
  transition: 1s 1s;
}

.back-face {
  position: absolute;
  border-radius: 5px;
  transform: rotate3d(0, 1, 0, 90deg);
  transition: 1s;
}
</style>