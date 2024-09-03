<template>
  <div class="container">
    <div class="tab-nav">
      <button class="btn-tab" @click="activeTab == '1'">BMW</button>
      <button class="btn-tab" @click="activeTab == '2'">MCL</button>
      <button class="btn-tab" @click="activeTab == '3'">PORSHE</button>
      <button class="btn-tab" @click="activeTab == '4'">SILVIA</button>
      <button class="btn-tab" @click="activeTab == '5'">SKY</button>
      <button class="btn-tab" @click="activeTab == '6'">URUS</button>
    </div>

    <div class="contant" id="1" v-if="activeTab == '1'">
      <div class="df-box">
        <img src="/bmw.jpeg" alt="bmw">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere laboriosam repellendus officia nihil
          deserunt quo laudantium suscipit labore, minus dolore dolorum vero porro harum, inventore debitis perferendis
          blanditiis non dolorem velit accusantium cupiditate ducimus at? Quae unde ex debitis sequi, asperiores
          doloremque est iste esse soluta! Aspernatur aut nobis consequatur, adipisci, perferendis quam a, expedita totam
          quidem doloremque eos hic eius in suscipit. Sunt nemo corrupti pariatur in esse molestiae aliquam maxime minima
          cupiditate quo! Quae, tempora. Unde, quasi excepturi. Veniam expedita sunt tempora excepturi, voluptas fuga
          provident molestiae inventore sint possimus cumque nemo, voluptates quis neque quisquam sapiente.</p>
      </div>
    </div>
    <div class="contant" id="2"  v-if="activeTab == '2'">
      <div class="df-box">
        <img src="/mcl.jpeg" alt="mcl">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere laboriosam repellendus officia nihil
          deserunt quo laudantium suscipit labore, minus dolore dolorum vero porro harum, inventore debitis perferendis
          blanditiis non dolorem velit accusantium cupiditate ducimus at? Quae unde ex debitis sequi, asperiores
          doloremque est iste esse soluta! Aspernatur aut nobis consequatur, adipisci, perferendis quam a, expedita totam
          quidem doloremque eos hic eius in suscipit. Sunt nemo corrupti pariatur in esse molestiae aliquam maxime minima
          cupiditate quo! Quae, tempora. Unde, quasi excepturi. Veniam expedita sunt tempora excepturi, voluptas fuga
          provident molestiae inventore sint possimus cumque nemo, voluptates quis neque quisquam sapiente.</p>
      </div>

    </div>
    <div class="contant" id="3"  v-show="activeTab == '3'">
      <div class="df-box">
        <img src="/porshe.jpeg" alt="porshe">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere laboriosam repellendus officia nihil
          deserunt quo laudantium suscipit labore, minus dolore dolorum vero porro harum, inventore debitis perferendis
          blanditiis non dolorem velit accusantium cupiditate ducimus at? Quae unde ex debitis sequi, asperiores
          doloremque est iste esse soluta! Aspernatur aut nobis consequatur, adipisci, perferendis quam a, expedita totam
          quidem doloremque eos hic eius in suscipit. Sunt nemo corrupti pariatur in esse molestiae aliquam maxime minima
          cupiditate quo! Quae, tempora. Unde, quasi excepturi. Veniam expedita sunt tempora excepturi, voluptas fuga
          provident molestiae inventore sint possimus cumque nemo, voluptates quis neque quisquam sapiente.</p>
      </div>
    </div>
    <div class="contant" id="4"  v-show="activeTab == '4'">
      <div class="df-box">
        <img src="/silvia.jpeg" alt="silvia">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere laboriosam repellendus officia nihil
          deserunt quo laudantium suscipit labore, minus dolore dolorum vero porro harum, inventore debitis perferendis
          blanditiis non dolorem velit accusantium cupiditate ducimus at? Quae unde ex debitis sequi, asperiores
          doloremque est iste esse soluta! Aspernatur aut nobis consequatur, adipisci, perferendis quam a, expedita totam
          quidem doloremque eos hic eius in suscipit. Sunt nemo corrupti pariatur in esse molestiae aliquam maxime minima
          cupiditate quo! Quae, tempora. Unde, quasi excepturi. Veniam expedita sunt tempora excepturi, voluptas fuga
          provident molestiae inventore sint possimus cumque nemo, voluptates quis neque quisquam sapiente.</p>
      </div>
    </div>
    <div class="contant" id="5"  v-show="activeTab == '5'" >
      <div class="df-box">
        <img src="/sky.jpeg" alt="sky">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere laboriosam repellendus officia nihil
          deserunt quo laudantium suscipit labore, minus dolore dolorum vero porro harum, inventore debitis perferendis
          blanditiis non dolorem velit accusantium cupiditate ducimus at? Quae unde ex debitis sequi, asperiores
          doloremque est iste esse soluta! Aspernatur aut nobis consequatur, adipisci, perferendis quam a, expedita totam
          quidem doloremque eos hic eius in suscipit. Sunt nemo corrupti pariatur in esse molestiae aliquam maxime minima
          cupiditate quo! Quae, tempora. Unde, quasi excepturi. Veniam expedita sunt tempora excepturi, voluptas fuga
          provident molestiae inventore sint possimus cumque nemo, voluptates quis neque quisquam sapiente.</p>
      </div>
    </div>
    <div class="contant"  v-show="activeTab == '6'">
      <div class="df-box">
        <img src="/urus.jpeg" alt="urus">
        <p class="text-car">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere laboriosam
          repellendus officia nihil deserunt quo laudantium suscipit labore, minus dolore dolorum vero porro harum,
          inventore debitis perferendis blanditiis non dolorem velit accusantium cupiditate ducimus at? Quae unde ex
          debitis sequi, asperiores doloremque est iste esse soluta! Aspernatur aut nobis consequatur, adipisci,
          perferendis quam a, expedita totam quidem doloremque eos hic eius in suscipit. Sunt nemo corrupti pariatur in
          esse molestiae aliquam maxime minima cupiditate quo! Quae, tempora. Unde, quasi excepturi. Veniam expedita sunt
          tempora excepturi, voluptas fuga provident molestiae inventore sint possimus cumque nemo, voluptates quis neque
          quisquam sapiente.</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const activeTab = ref('1')


</script>

<style scoped>
.container {
  width: 1000px;
}

.contant img {
  width: 300px;
  margin: 30px;
}

.df-box {
  display: flex;
  align-items: center;
  gap: 10px;
}

.text-car {
  text-align: justify;
}

.tab-nav {
  display: flex;
}
.btn-tab {
  width: 170px;
}
</style>