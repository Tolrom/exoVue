<template>
  <div>
    <div class="px-2" >
  <div class="form-group">
    <h1>Ajouter un ami</h1>
    <label for="inputId">ID</label>
    <input type="text" class="form-control" id="inputId" aria-describedby="emailHelp" placeholder="Identifiant"v-model="formData.id" >
  </div>
  <div class="form-group">
    <label for="inputName">Nom</label>
    <input type="text" class="form-control" id="inputName" placeholder="Nom" v-model="formData.name">
  </div>
  <div class="form-group">
    <label for="inputPhone">Telephone</label>
    <input type="text" class="form-control" id="inputPhone" placeholder="Telephone" v-model="formData.phone">
  </div>
  <div class="form-group">
    <label for="inputEmail">Email</label>
    <input type="email" class="form-control" id="inputEmail" placeholder="Email"v-model="formData.email">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="checkPremium" v-model="formData.premium">
    <label class="form-check-label" for="checkPremium">Premium ?</label>
  </div>
  <button class="btn btn-primary" @click="addFriend(formData)" >Ajouter</button>
</div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const formData = ref({
  id: '',
  name: '',
  phone: '',
  email: '',
  premium: null,
})

const emit = defineEmits({
  'add-friend-emit': (formData) =>
  {
    for(let entry in formData){
      if( formData[entry] === ''){
        console.error('Tous les champs ne sont pas remplis!')
        return false;
      }
    }
    console.log('Ami ajouté à la liste')
    return true;
  }
});

function addFriend(formData) {
  emit('add-friend-emit', formData)
}

</script>

<style scoped lang="css">
</style>