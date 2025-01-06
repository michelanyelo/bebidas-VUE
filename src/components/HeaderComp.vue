<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';
import { useBebidasStore } from '../stores/bebidasStore.js';

const route = useRoute();
const paginaInicio = computed(() => route.name === 'inicio');
const bebidaStore = useBebidasStore();
console.log(bebidaStore.categorias);

</script>

<template>
  <header class="bg-slate-800" :class="{ 'header': paginaInicio }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'inicio' }"><img class="w-32" src="/img/logo.svg" alt=""></RouterLink>
        </div>
        <nav class="flex gap-4">
          <RouterLink :to="{ name: 'inicio' }" class="text-white uppercase font-bold" active-class="text-orange-500">
            Inicio
          </RouterLink>
          <RouterLink :to="{ name: 'favoritos' }" class="text-white uppercase font-bold" active-class="text-orange-500">
            Favoritos
          </RouterLink>
        </nav>
      </div>

      <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6" v-if="paginaInicio">
        <!-- Ingrediente -->
        <div class="space-y-4">
          <label for="ingrediente" class="block text-white uppercase font-extrabold text-lg">Nombre o
            Ingredientes</label>
          <input type="text" id="ingrediente" name="ingrediente" class="w-full p-3 rounded-lg focus:outline-none"
            placeholder="Buscar por nombre o ingredientes" />
        </div>

        <!-- Categoria -->
        <div class="space-y-4">
          <label for="categoria" class="block text-white uppercase font-extrabold text-lg">Categoría</label>
          <select id="categoria" name="categoria" class="w-full p-3 rounded-lg focus:outline-none">
            <option value="">-- Seleccione: --</option>
          </select>
        </div>

        <!-- submit -->
        <button type="submit"
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase focus:outline-none">Buscar</button>
      </form>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-image: url('/img/bg.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
