<template>
  <div>
    <BarChart></BarChart>
    <hr class="bg-primary border-2 border-top border-primary my-5" />
    <DoughnutChart></DoughnutChart>
    <hr class="bg-primary border-2 border-top border-primary my-5" />
    <PolarChart></PolarChart>
    <hr class="bg-primary border-2 border-top border-primary my-5" />
    <RadarChart></RadarChart>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import BarChart from '../charts/BarChart.vue';
import DoughnutChart from '../charts/DoughnutChart.vue';
import PolarChart from '../charts/PolarChart.vue';
import RadarChart from '../charts/RadarChart.vue';

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

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