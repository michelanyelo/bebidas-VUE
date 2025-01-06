<script setup>
import { useBebidasStore } from '@/stores/bebidasStore';

const bebidaStore = useBebidasStore();

defineProps({
  receta: {
    type: Object,
  }
})
</script>

<template>
  <div class="border shadow-lg">
    <div class="overflow-hidden">
      <img :src="receta.strDrinkThumb" :alt="receta.strDrink"
        class="rounded-t-lg w-full hover:scale-125 transition-transform duration-500 hover:rotate-2" />
    </div>
    <div class="p-5">
      <h2 class="text-2xl font-extrabold truncate">{{ receta.strDrink }}</h2>
      <button type="button"
        class="bg-orange-800 hover:bg-orange-900 mt-5 w-full p-3 font-bold text-white text-sm uppercase rounded-lg"
        @click="bebidaStore.obtenerReceta(receta.idDrink)">Ver
        receta</button>
    </div>
  </div>
</template>

<style scoped></style>
