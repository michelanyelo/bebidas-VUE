<script setup>
import { useFavoritosStore } from '@/stores/favoritosStore';
import RecetaComp from '@/components/RecetaComp.vue';

const favoritosStore = useFavoritosStore();
</script>

<template>
  <h1 class="text-6xl font-extrabold">Favoritos</h1>

  <p v-if="favoritosStore.noFavoritos" class="my-10 text-center text-2xl">No hay existencias en favoritos</p>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <RecetaComp v-for="favorito in favoritosStore.favoritos" :key="favorito.idDrink" :receta="favorito" />
  </div>
</template>

<style scoped></style>
