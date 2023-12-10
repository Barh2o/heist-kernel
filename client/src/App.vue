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

function setTitle(count: number) {
  winboxRef.value?.winbox?.setTitle(`Count: ${count}`)
}

function initialize() {
  winboxRef.value?.initialize()
}
    
function openUrl() {
  const randomId = Math.floor(Math.random() * 20) + 1
  createWinBox({
    title: `Fox #${randomId}`,
    url: `https://randomfox.ca/images/${randomId}.jpg`,
    class: 'my-theme',
  })
}
const visible = ref(false)
</script>

<template>
  <VueWinBox
    ref="winboxRef"
    :options="options"
    @focus="isOpen = true"
    @close="isOpen = false"
  >
    <Counter @update:count="setTitle" />
  </VueWinBox>

  <div v-if="visible">
    <VueWinBox
      :options="{
        title: `Fox #1`,
        url: `https://randomfox.ca/images/1.jpg`,
        class: 'my-theme',
      }" open-on-mount @close="visible = false"
    />
  </div>

  <div class="container">
    <div v-show="!isOpen" class="button" @click="initialize">
      Open Vue component
    </div>
    <div class="button" @click="openUrl">
      Open Random URL
    </div>

    <div v-show="!visible" class="button" @click="() => visible = true">
      Parent Dom Visible
    </div>
    <div v-show="visible" class="button" @click="() => visible = false">
      Parent Dom Hidden
    </div>
    <div>
      Hello
    </div>
  </div>
</template>

<style>

/* 
@font-family: {
  font-family: 'MS Sans Serif';
} */

* {
  margin: 0;
  padding: 0;
  @font-face: 'MS Sans Serif';
  src: url('../public/font/converted/ms_sans_serif.woff');
}

html, body {
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, "Open Sans", OpenSans, Roboto, Segoe UI, sans-serif;
  background: #000;
  background-image: 'bg-test.png';
}

/*  */
/*  */
.winbox.my-theme{
  color: #000;
}
.winbox.my-theme .wb-title {
  background: gray;
}
.winbox.my-theme .wb-title {
    color: silver;
}

.winbox.my-theme .wb-body {
    background: #4d535a;
}

.winbox.my-theme .wb-control {
  background-color:  gray;  
}

.winbox.my-theme .wb-header {
  @font-face: 'MS Sans Serif';
  src: url('../public/font/converted/ms_sans_serif.woff');
  
}

.winbox.my-theme .wb-full {
  display: none;
}

.wb-min {
  background-image: url('../public/icon/minimize.svg');
  
}
.wb-max {
  background-image: url('../public/icon/maximize.svg');

}
.wb-close {
  background-image: url('../public/icon/close.svg');
}

/*  */

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

.button {
  display: flex;
  border: solid 1px red;
  padding: 5px 10px;
  margin-bottom: 5px;
  color: #fff;
  width: auto;
  padding: 15px 25px;
  cursor: pointer;
}
</style>
