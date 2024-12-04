<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <NavBar></NavBar>  
  <router-view class="min-vw-100"></router-view>
  <Footer class="min-vw-100"></Footer>
</template>
