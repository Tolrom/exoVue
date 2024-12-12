<template>
  <div class="bg-warning-subtle">
    <h5>Text Interpolation Mode : Composition</h5>
    <p class="text-center">{{ randomizer() }} est le meilleur formateur de l'Adrar</p>
    <p class="text-center">{{unLivre}}</p>
    <p class="text-center">{{isOnline}}</p>
    <p class="text-center">{{unNombre}}</p>
    <p class="text-center">{{unTableau}}</p>
    <p class="text-center">{{unTableau[0]}}</p>
    <p class="text-center">{{unObjet}}</p>
    <p class="text-center">{{unObjet.name}}</p>
    <p class="text-center">{{unObjet['name']}}</p>
    <p class="text-center">{{unObjet.cool}}</p>
  </div>
</template>

<script lang='js' setup>
import { ref } from 'vue'

const unLivre = ref('Les mémoires de Steven Seagal');
const unTableau = ref(['du texte', 99]);
const unNombre = ref(1234567890);
const isOnline=ref(false);
const unObjet = ref({
  name: 'COOL',
  tel: '060503030',
});

function randomizer(){
  let r = Math.random();
  if (r > 0.5) {
    return 'Jeff';
  }
  else {
    return 'Yann';
  }
}

</script>

<style scoped lang="css">
</style>