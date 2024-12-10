<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <NavBar></NavBar>  
  <div class="max-vw-100 min-vw-50">
    <router-view></router-view>
  </div>
  <Footer class="min-vw-100"></Footer>
</template>
