<template>
  <div class="container-fluid" >
    <div class="w-50 m-auto d-flex flex-column justify-content-center" >
      <button @click="plus(1)" class="btn btn-danger m-2">+1</button>
      <button @click="plus(5)" class="btn btn-success m-2">+5</button>
      <h3 class="m-3 w-10" :style=color>Le nombre : {{ nb }}</h3>
      <h3>Score : {{ score }}</h3>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { watch, ref, computed } from 'vue'

const nb = ref(0);
const message = ref('Essaie encore!')
const objective = ref(10+Math.floor(Math.random()*21));
const score = ref(0);

function plus(n){
  score.value++;
  nb.value += n;
}

const color = computed(() =>{
        let r = 255;
        let g = 0;
        if(nb.value > 0){
            r = 255 - nb.value/objective.value*255;
            g = nb.value/objective.value*255;
        }
        return 'color: rgb('+r+','+g+',0);';
    });

const stopWatch = watch(
  () => nb.value, async (_newValue, _oldValue) => {
    if(_newValue === objective.value){
      message.value = 'Bravo!';
      setTimeout(function(){
        nb.value = 0;
        score.value = 0;
      }, 3000);
    }
    if(_newValue > objective.value){
      message.value = 'Tu es un raté, et tu as échoué.';
      setTimeout(function(){
        nb.value = 0;
        score.value = 0;
      }, 3000);
    }
  },
  {
    immediate: true
  }
);


</script>

<style scoped lang="css">
</style>