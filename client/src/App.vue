<template>
  <VueWinBox ref="winboxRef" :options="options" @focus="isOpen = true" @close="isOpen = false">
  </VueWinBox>

  <div class="container">
    <div id="desktop">
      <div class="link-icon" id="home">
        <img src="../public/assets/icon/home__network.png">
        Home
      </div>
      <div class="link-icon" id="contact">
        <img src="../public/assets/icon/contact__msagent.png"/>
        Contact
      </div>
      <div class="link-icon" id="shop">
        <img src="../public/assets/icon/home__network.png">
        Shop
      </div>
      <div class="link-icon" id="organization">
        <img src="../public/assets/icon/home__network.png">
        Organization
      </div>
      <div class="link-icon" id="twitter">
        <img src="../public/assets/icon/home__network.png">
        Twitter
      </div>
      <div class="link-icon" id="instagram">
        Instagram
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueWinBox, useWinBox } from 'vue-winbox'
import Counter from './Counter.vue'

const options = {
  class: 'my-theme',
  x: '0',
  y: '0',
  width: '50%',
  height: '50%',
}
const winboxRef = ref()
const isOpen = ref(true)
const createWinBox = useWinBox()

function initialize() {
  winboxRef.value?.initialize()
}

const visible = ref(false)
import AppGrid from './AppGrid.vue'

</script>


<!--  -->
<!--  -->
<!--  -->


<style>
* {
  margin: 0;
  padding: 0;
  @font-face: 'MS Sans Serif';
  src: url('../public/font/converted/ms_sans_serif.woff');
}

html,
body {
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, "Open Sans", OpenSans, Roboto, Segoe UI, sans-serif;
}
.desktop {
  display: flex;
  margin-top: 1000px;
}
.link-icon {
  display: flex;
  flex-direction: column;
  height: 60px;
  border: solid 1px black;
  margin-left: 50px;
  margin-top: 12px;
  width: 75px;
  align-items: center;
  justify-content: space-evenly;

}
.container {
  height: 100vh;
}
</style>
