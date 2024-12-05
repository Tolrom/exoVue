<template>
  <div class="container-fluid card p-2 m-3">
    <input type="text" v-model="cssClass">
    <h1 :class="{hello: hello, world: world}" :style="{display : display}">Bonjour le monde de classes</h1>
    <input type="text"v-model="color">
    <h1 :style="'background-color :'+color"  >Bonjour le monde de couleurs</h1>
    <button class="btn btn-primary" @click="displayTitle()" >Afficher le 1er titre</button>
  </div>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue'

const display = ref('block'),
      cssClass = defineModel('cssClass'),
      color = defineModel('color'),
      world = ref(false),
      hello = ref(false);

watch(cssClass, async  (newValue, oldValue) => {
  if(newValue === 'hello'){
    console.log('HELLO');
    hello.value = true;
  }
  if(newValue === 'world'){
    console.log('WORLD');
    world.value = true;
  }
});

watch(color,async (newValue, oldValue) => {
  
})

function displayTitle(){
  console.log('Au moins ça marche')
  if(display.value === 'block'){
    display.value = 'none';
  }
  else {
    display.value = 'block';
  }
}



</script>

<style scoped lang="css">

.hello {
  font-family: Impact;
  background-color: chartreuse;
}
.world {
  font-family: 'Comic Sans MS';
  background-color: olivedrab;
}
</style>