import { defineStore } from "pinia";
import { ref, onMounted, reactive } from "vue";
import axios from "axios";

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias = ref([]);
  const busqueda = reactive({
    nombre: '',
    categoria: ''
  })

  onMounted(async function () {
    const { data: { drinks } } = await axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    categorias.value = drinks;
  })

  function buscarReceta() {
    console.log("Buscando receta API...");
  }

  return {
    categorias,
    busqueda,
    buscarReceta
  }
});
