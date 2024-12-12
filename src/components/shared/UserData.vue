<template>
  <div>
    <div class="px-2 bg-warning" >
      <div class="form-group">
        <h1>Formulaire d'édition</h1>
        <label for="inputId">Nom</label>
        <input type="text" class="form-control" id="input1" placeholder="Steven Seagal" v-model="nom" >
      </div>
      <div class="form-group">
        <label for="inputName">Age</label>
        <input type="text" class="form-control" id="input2" placeholder="666" v-model="age">
      </div>
      <button class="btn btn-warning m-3 border-black" @click="emit('updateData', nom, age)" >MAJ des data</button>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const nom = ref(''),
      age = ref('');

const emit = defineEmits({
  // v-model event with validation
  'updateData': (value) => value !== null,
});

</script>

<style scoped lang="css">
</style>