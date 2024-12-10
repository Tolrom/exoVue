<template>
  <div class="container-fluid d-flex" >

    <ul class="bg-warning-subtle p-2 w-50 h-100">
      <li v-for="poke in pokeList">
        {{ poke.name }}
      </li>
    </ul>

    <div class="bg-primary-subtle p-2 w-50 h-100" >
      <p>{{ meteo.city_info.name }}</p>
      <p>{{ meteo.city_info.country }}</p>
      <p>{{ meteo.current_condition.date }}</p>
      <p>{{ meteo.current_condition.hour }}h</p>
      <p>{{ meteo.current_condition.tmp }}°C</p>
    </div>

  </div>
</template>

<script setup lang='js'>
import { ref, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const pokeList = ref({}),
      meteo = ref({});

onMounted(async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    pokeList.value = json.results;
    console.log('PokeAPI Response:');
    console.log(json);
  } catch (error) {
    console.error('Error fetching Pokemon data:', error.message);
  }

  try {
    const response = await fetch('https://prevision-meteo.ch/services/json/toulouse');
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    meteo.value = json;
    console.log('Weather API Response:');
    console.log(json);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
});


onUpdated(() => {
});

onBeforeUnmount(() => {
  console.log("Le composant est sur le point d'être démonté.");
});

</script>

<style scoped lang="css">
</style>