<template>
  <div class="container">
    <div class="tab-nav">
      <button class="btn-tab" v-for="(tab) in tabs" @click="activeTab = tab">{{ tab }}</button>
    </div>

    <Transition mode="out-in">

      <div class="contant" key="1" v-if="activeTab == 'BMW'">

        <div class="df-box">
          <img src="/bmw.jpeg" alt="bmw">
          <p>The BMW M5 is a high-performance variant of the BMW 5 Series marketed under the BMW M sub-brand. It is
            considered an iconic vehicle in the sports sedan category. The M5 has always been produced in the sedan
            (saloon)
            body style, but in some countries the M5 has also been available as a wagon (estate) from 1992 to 1995, from
            2006 to 2010, and since 2024.</p>
        </div>
      </div>
      <div class="contant" key="2" v-else-if="activeTab == 'MCL'">
        <div class="df-box">
          <img src="/mcl.jpeg" alt="mcl">
          <p>The McLaren 720S is a sports car designed and manufactured by British automobile manufacturer McLaren
            Automotive. It is the second all-new car in the McLaren Super Series, replacing the 650S beginning in May
            2017.
            The 720S was launched at the Geneva Motor Show on 7 March 2017 and is built on a modified carbon monocoque,
            which is lighter and stiffer than the previous model, the 650S.</p>
        </div>

      </div>
      <div class="contant" key="3" v-else-if="activeTab == 'PORSHE'">
        <div class="df-box">
          <img src="/porshe.jpeg" alt="porshe">
          <p>Dr. Ing. h.c. F. Porsche AG, usually shortened to Porsche (German pronunciation see below), is a German
            automobile manufacturer specializing in luxury, high-performance sports cars, SUVs and sedans, headquartered
            in
            Stuttgart, Baden-Württemberg, Germany. The company is owned by Volkswagen AG, a controlling stake of which is
            owned by Porsche Automobil Holding SE. Porsche's current lineup includes the 718, 911, Panamera, Macan,
            Cayenne
            and Taycan.</p>
        </div>
      </div>
      <div class="contant" key="4" v-else-if="activeTab == 'SILVIA'">
        <div class="df-box">
          <img src="/silvia.jpeg" alt="silvia">
          <p>The Nissan Silvia (Japanese: 日産・シルビア, Hepburn: Nissan Shirubia) is the series of small sports cars produced
            by
            Nissan. Versions of the Silvia have been marketed as the 200SX or 240SX for export, with some export versions
            being sold under the Datsun brand.
            The name "Silvia" is derived from Sylvia, the name of the nymph who served Diana, the Roman goddess of the
            hunt.
            The name also means "forest" in Latin</p>
        </div>
      </div>
      <div class="contant" key="5" v-else-if="activeTab == 'SKY'">
        <div class="df-box">
          <img src="/sky.jpeg" alt="sky">
          <p>The Nissan Skyline (Japanese: 日産・スカイライン, Hepburn: Nissan Sukairain) is a brand of automobile originally
            produced by the Prince Motor Company starting in 1957, and then by Nissan after the two companies merged in
            1967. After the merger, the Skyline and its larger counterpart, the Nissan Gloria, were sold in Japan at
            dealership sales channels called Nissan Prince Shop.</p>
        </div>
      </div>
      <div class="contant" key="6" v-else-if="activeTab == 'URUS'">
        <div class="df-box">
          <img src="/urus.jpeg" alt="urus">
          <p class="text-car">The Lamborghini Urus is a luxury SUV manufactured by Italian automobile manufacturer
            Lamborghini. It was introduced in December 2017 as a 2018 model year production vehicle.[4] The Urus is the
            first Lamborghini SUV and five-door vehicle in the modern era (under the ownership of Volkswagen Group), and
            the
            second SUV in the brand's history after the LM002, which was produced between 1986 and 1993.</p>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const activeTab = ref('BMW')

const tabs = ref(['BMW', 'MCL', 'PORSHE', 'SILVIA', 'SKY', 'URUS'])

</script>

<style scoped>
.container {
  width: 1000px;
}

.contant img {
  width: 300px;
  height: 300px;
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


.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>