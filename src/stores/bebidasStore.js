import { defineStore } from "pinia";
import { ref, onMounted, reactive } from "vue";
import APIservice from "@/services/APIService.js";

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias = ref([]);
  const busqueda = reactive({
    nombre: '',
    categoria: ''
  })
  const recetas = ref([]);

  onMounted(async function () {
    const { data: { drinks } } = await APIservice.obtenerCategorias();
    categorias.value = drinks;
  })

  async function obtenerRecetas() {
    const { data: { drinks } } = await APIservice.buscarRecetas(busqueda);
    recetas.value = drinks;
  }

  async function obtenerReceta(id) {
    const { data: { drinks } } = await APIservice.buscarReceta(id);
    console.log(drinks[0]);
  }

  return {
    categorias,
    busqueda,
    obtenerRecetas,
    recetas,
    obtenerReceta
  }
});
