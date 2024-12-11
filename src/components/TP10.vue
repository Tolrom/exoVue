<template>
  <div>
    <NewFriend 
      class="p-5 w-50"
      @add-friend-emit="addFriend">
    </NewFriend>
    
    <OneFriend
      v-for="ami in lesAmis" 
      :id="ami.id" 
      :name="ami.name" 
      :phone="ami.phone" 
      :mail="ami.email" 
      :premium="ami.premium" 
      @mon-event-premium="reactionStatus"
    >
    </OneFriend>
  </div>
</template>

<script setup lang='js'>
import NewFriend from './NewFriend.vue';
import OneFriend from './OneFriend.vue';
import { ref } from 'vue';

const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    }
]);

function reactionStatus(leId, premiumData){
  let result = lesAmis.value.find((e)=> e.id == leId) 
  console.log(`
    Ami identifié : 
    ID :  ${result.id}
    Name :  ${result.name}
    Phone :  ${result.phone}
    Email :  ${result.email}
    Il est  ${premiumData ? 'trop cool' : 'grave nul'}\n
  `);
}
function addFriend(formData){
  console.log(formData);
  let ami = 
    {
        id: formData.id,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        premium: formData.premium
    }
    console.log(ami);
  lesAmis.value.push(ami);
}

</script>

<style scoped lang="css">
</style>