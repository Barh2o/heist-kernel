<script setup lang="ts">
import { ref } from 'vue'
import { VueWinBox, useWinBox } from 'vue-winbox'
import Counter from './Counter.vue'

const options = {
  title: 'Work',
  class: 'my-theme',
  x: 'center',
  y: 'center',
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
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, "Open Sans", OpenSans, Roboto, Segoe UI, sans-serif;
  background: linear-gradient(135deg, #000000, #282a2d);
}

/* Controls  */
.winbox.my-theme{
    background: #fff;
}
.winbox.my-theme .wb-body {
    color: #fff;
    background: #131820;
}
.winbox.my-theme .wb-title {
    color: #000;
}
.winbox.my-theme .wb-control {
  background-color: blue;
}
.winbox.my-theme .wb-full {
  background-color: red;
  display: none;
}
.winbox.my-theme .wb-header {
  font-family: Pixelated MS Sans Serif;
}
/*  */

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
