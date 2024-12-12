<template>
  <div class="bg-primary m-0 text-center p-4">
    <h1 class="m-0">Le user</h1>
    <h2>{{ input1 }}</h2>
    <h2>{{ input2 }}</h2>
  </div>
</template>

<script setup lang='js'>

const props = defineProps({
  input1 : {
    type: String,
    required: true
  },
  input2 : {
    type: String,
    required: true
  }
});

</script>

<style scoped lang="css">
</style>