<template>
  <div class="container-fluid d-flex flex-column">
    <input v-on:keyup="(evt)=>{addKey(evt)}">
    <p>{{ content }}</p>
    <input type="text" v-on:keyup.esc="(evt)=>{escape(evt)}">
    <p>{{ escapeContent }}</p>
    <button class="btn btn-primary" @click="alerte()">Alert</button>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

const content = ref('');

const escapeContent = ref('');

function addKey(evt){
  content.value = evt.target.value;
}

function escape(evt){
  escapeContent.value = evt.target.value;
}

function alerte(){
  alert('EH OH CA VA PAS NON')
}

</script>

<style scoped lang="css">
</style>