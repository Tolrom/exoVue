<template>
  <div>
    <h1 class="m-4">Liste conditionnelle</h1>
    <div class="container-fluid d-flex flex-column m-2 w-50">
      <h2 class="m-2" >Watchlist</h2>
      <input type="text" v-model="selection" class="m-2" placeholder="Film à ajouter" >
      <button class="btn btn-primary m-2" @click="addFilm()" >Ajouter à la liste</button>
      <h3 v-if="!films[0]" >Eh bah alors on regarde rien?</h3>
      <ul v-if="show">
        <li v-for="(film, index) in films" class="m-1" >
          {{ index }} - {{ film }}
          <button class="btn btn-danger" @click="delFilm(index)" >Supprimer</button>
        </li>
      </ul>
      <button class="btn btn-warning m-2" @click="show = !show" v-if="show">Masquer la liste</button>
      <button class="btn btn-warning m-2" @click="show = !show" v-if="!show">Afficher la liste</button>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

const films = ref([]),
      selection = ref(''),
      show = ref(true);

function addFilm() {
  films.value.push(selection.value);
  selection.value = ''
}
function delFilm(index){
  films.value.splice(index, 1)
}



</script>

<style scoped lang="css">
</style>