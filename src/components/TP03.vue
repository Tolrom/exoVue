<template>
  <div class="container-fluid">
    <input v-on:keydown="addKey(evt)">
    <p>{{ content }}</p>
    <input type="text">
    <button class="btn btn-primary" @click="alerte()">Alert</button>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

let content = '';

function addKey(evt){
  // content += evt.key;
  console.log(evt)
}

function alerte(){
  alert('EH OH CA VA PAS NON')
}

</script>

<style scoped lang="css">
</style>