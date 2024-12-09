<template>
  <div>
    <div class="card w-20 d-flex flex-column p-2 m-2 bg-success" >
      <h1>{{ name }}</h1>
      <button class="btn btn-primary"  @click="displayDetails()" >{{ messageDisplayDetails }}</button>
      <div>
        <h2 v-if="details">{{ phone }}</h2>
        <h2 v-if="details">{{ mail }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, ref } from 'vue'

const props = defineProps({
    name: String,
    phone: String,
    mail: String
});

function displayDetails(){
  details.value = !details.value;
}

const details = ref(false);

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const messageDisplayDetails = computed(()=>{
  return details.value ? 'Masquer les détails' : 'Afficher les détails';
});

</script>

<style scoped lang="css">
</style>