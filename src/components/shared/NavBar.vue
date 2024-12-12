<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tolrom.js</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/evaluation" class="nav-link active">Evaluation</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exercices
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/text-interpolation">Exemples Interpolation</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-01">TP-01 (data interpolation)</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-02">TP-02 (onclick)</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-03">TP-03 (keyup)</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-04">TP-04 (functions)</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-05">TP-05 (binding recap)</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-06">TP-06 (style binding)</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-07">TP-07 (class binding)</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-08">TP-08 (v-for)</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-09">TP-09 (v-if / v-for)</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-10">TP-10 (props)</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-11">TP-11 (lifecycle)</router-link></li>
            <li><router-link class="dropdown-item" to="/tp-12">TP-12 (items routing)</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">C'est déjà pas mal</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Chercher" aria-label="Chercher">
        <button class="btn btn-outline-success" type="submit">Chercher</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>