<template>
 <Splash></Splash>
</template>

<script setup lang="ts">
import Splash from './Splash.vue';
</script>

<!--  -->
<!--  -->
<!--  -->


<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100vh;
  font-family: 'MS Sans Serif';
  overflow-y: hidden;
}

a {
  text-decoration: none;
  color: #fff;
  text-shadow: chartreuse;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  flex-direction: column;
}

@font-face {
  font-family: 'MS Sans Serif', monospace;
  src: url('/font/converted/ms_sans_serif.woff');
}


</style>
