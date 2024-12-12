<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg bg-primary-subtle">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Items :</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="item in items">
                <router-link 
                  class="nav-link" 
                  :name="item.name"
                  :to="{ name: 'item', params: { id: item.id }, query: { name: item.name } }"
                  >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav>
        
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const props = defineProps({
});

const items = [
  {
    id: 1,
    name: 'Table'
  },
  {
    id: 2,
    name: 'Chaise'
  },
  {
    id: 3,
    name: 'Balancoire'
  },
  {
    id: 4,
    name: 'Porte'
  },
  {
    id: 5,
    name: 'Fenetre'
  },
  
]





const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>