<template>
  <div>
    <ActiveUser
      :nom="nomData"
      :age="Number(ageData)"
    ></ActiveUser>
    <UserData
      @updateData="updateData"
    ></UserData>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';
import ActiveUser from '../shared/ActiveUser.vue';
import UserData from '../shared/UserData.vue';

const nomData = ref('Jeffff'),
      ageData = ref(78);

function updateData(emit1, emit2) {
  console.log(`
    Ca marche
    Nom :${emit1}
    Age :${emit2}
  `)
  nomData.value = emit1,
  ageData.value = emit2;
}


</script>

<style scoped lang="css">
</style>