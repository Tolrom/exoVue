<template>
  <h1 class="w-100 text-center m-5">CHANGEMENT DE COULEUR</h1>
  <div class="container-fluid d-flex justify-content-around m-5">
    <div class="btn p-4" :style=bGcolor @click="click = !click;" >Bachibouzouk</div>
    <div class="btn p-4" :style=bGcolor2 @click="click2 = !click2;" >Ectoplasme à roulettes</div>
    <div class="btn p-4" :class="{ marron : click3, bleu : !click3}" @click="click3 = !click3;" >Jefffffff</div>
    <div class="btn p-4" :class="{ vert : click4, orange : !click4 }" @click="click4 = !click4;" >Yannnnnnn</div>
  </div>
</template>

<script setup lang='js'>

import { computed, ref } from 'vue';


const click = ref(false),
      click2 = ref(false),
      click3 = ref(false),
      click4 = ref(false);


const bGcolor = computed(() =>{
  console.log(click.value,click.value ? 'pink' : 'aqua');
  return `background-color : ${ click.value ? 'chartreuse' : 'red'};` ;
});

const bGcolor2 = computed(() =>{
  console.log(click2.value,click2.value ? 'chartreuse' : 'red');
  return `background-color : ${ click2.value ? 'pink' : 'aqua'};` ;
});



</script>

<style scoped lang="css">
.vert {
  background-color: greenyellow;
}
.marron {
  background-color: brown;
}
.bleu {
  background-color: cyan;
}
.orange {
  background-color: orange;
}
</style>