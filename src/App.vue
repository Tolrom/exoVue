<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <NavBar></NavBar>  
  <div class="min-vw-100">
    <router-view msg="SALUT LA TCHEAM"></router-view>
  </div>
  <Footer class="min-vw-100"></Footer>
</template>
