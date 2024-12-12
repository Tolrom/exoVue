<template>
  <div class="container-fluid" >
      <button @click="moins(1)" class="btn btn-danger m-2">-</button>
      <h3 class="m-3 w-10">Le nombre : {{ nb }}</h3>
      <button @click="plus(1)" class="btn btn-success m-2">+</button>
      <p>{{ nameHandle(userName) }}</p>
  </div>
</template>

<script setup lang='js'>

import { ref } from 'vue';

const nb = ref(0);
let userName = '';

function moins(n){
  nb.value -= n;
  if(nb.value%2 == 0){
    userName = 'Jefffff';
  }
  else {
    userName = '';
  }
}
function plus(n){
  nb.value += n;
  if(nb.value%2 == 0){
    userName = 'Jefffff';
  }
  else {
    userName = '';
  }
}

function nameHandle(userName){
  console.log('OUAIS OUAIS OUAAAIIIIS');
  if(userName == ''){
    return 'Y\'a pas de panneau';
  }
  else {
    return 'Masterclass';
  }
}

</script>

<style scoped lang="css">
</style>