<script setup>
import { useBebidasStore } from '@/stores/bebidasStore.js';
import RecetaComp from '@/components/RecetaComp.vue';

const bebidaStore = useBebidasStore();
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <RecetaComp v-for="receta in bebidaStore.recetas" :key="receta.idDrink" :receta="receta" />
  </div>
</template>

<style scoped></style>
