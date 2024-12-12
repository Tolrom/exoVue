<template>
  <div>
    <ActiveUser
      :input1="input1"
      :input2="input2"
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

const input1 = ref('Jeffff'),
      input2 = ref('Seagal');

function updateData(emit1, emit2) {
  console.log(`
    Ca marche
    1 :${emit1}
    2 :${emit2}
  `)
  input1.value = emit1,
  input2.value = emit2;
}


</script>

<style scoped lang="css">
</style>