<template>
  <h1 class="text-center my-4">Bar Chart</h1>
  <div class="d-flex justify-content-center">
    <Bar
    class="w-50"
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Les filles',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    },
    {
      label: 'Les garçons',
      backgroundColor: '#7979f8',
      data: [15, 75, 56, 15, 5, 44, 12, 55, 23, 76, 3, 46]
    },
  ]
})

const chartOptions = ref({
  responsive: true,
  y: {max: 100},
  maintainAspectRatio: true
})
</script>