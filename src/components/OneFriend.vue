<template>
  <div>
    <div class="card w-20 d-flex flex-column p-2 m-2 bg-success">
      <h1>{{ name }} <button class="btn btn-danger" @click="premiumiser()"> {{ premiumData ? 'Ami premium' : 'Ami nul' }}</button></h1>
      <!-- <h2>{{ testPremium() }}</h2> -->
      <button class="btn btn-primary"  @click="displayDetails()" >{{ messageDisplayDetails }}</button>
      <div v-if="details">
        <h2>{{ phone }}</h2>
        <h2>{{ mail }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, ref } from 'vue'

const props = defineProps({
    id : {
      required: true,
    },
    name: {
      type : String,
      required : true,
    },
    phone: {
      type : String,
      required : true,
    },
    mail: {
      type : String,
      required : true,
    },
    premium: {
      type : Boolean,
      required : false,
      default : false,
    },
});
const premiumData = ref(props.premium);
const details = ref(false);
const emit = defineEmits(['mon-event-premium']);

function displayDetails(){
  details.value = !details.value;
}

function premiumiser() {
  premiumData.value = !premiumData.value;
  emit('mon-event-premium', props.id);
}


const messageDisplayDetails = computed(()=>{
  return details.value ? 'Masquer les détails' : 'Afficher les détails';
});

</script>

<style scoped lang="css">
</style>