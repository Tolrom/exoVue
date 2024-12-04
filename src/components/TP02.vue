<template>
  <div class="container-fluid">
    <div class="d-flex flex-row p-1 justify-content-center m-5" style="width:100%;">
      <button @click="moins(33)" class="btn btn-danger m-2">---</button>
      <button @click="moins(10)" class="btn btn-danger m-2">--</button>
      <button @click="moins(1)" class="btn btn-danger m-2">-</button>
      <h3 class="m-3 w-10">Le nombre : {{ nb }}</h3>
      <button @click="plus(1)" class="btn btn-success m-2">+</button>
      <button @click="plus(10)" class="btn btn-success m-2">++</button>
      <button @click="plus(33)" class="btn btn-success m-2">+++</button>
    </div>
  </div>
</template>

<script setup lang='js'>

import { ref } from 'vue';

const nb = ref(0);

function moins(n){
  nb.value -= n;
}
function plus(n){
  nb.value += n;
}

</script>

<style scoped lang="css">
</style>