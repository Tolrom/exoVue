<template>
  <div class="bg-primary m-0 text-center p-4">
    <h1 class="m-0">Le user</h1>
    <h2>{{ nom }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script setup lang='js'>

const props = defineProps({
  nom : {
    type: String,
    required: true
  },
  age : {
    type: Number,
    required: true
  }
});

</script>

<style scoped lang="css">
</style>