<template>
<div class="d-flex flex-column justify-content-center">
  <div class="card" style="width : 18rem; margin:auto">
    <img :src=image alt="">
    <div class="card-body">
      <h5 class="card-title">{{ nom }}</h5>
      <input class="card-text" type="text" :value="nom"></input>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ age }} ans</li>
      <li class="list-group-item">age + 10 : {{ add(age,10) }}</li>
      <li class="list-group-item">NB Fétiche : {{ fetishNum() }}</li>
    </ul>
  </div>
</div>
</template>

<script setup lang='js'>

const image = '/src/assets/roma.png',
      nom = 'Romaricson',
      age = 64;

function add(n,s){
  return n+s;
}

function fetishNum(){
  return Math.random();
}





</script>

<style scoped lang="css">
</style>