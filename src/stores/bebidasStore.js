import { defineStore } from "pinia";
import { ref, onMounted, reactive } from "vue";
import APIservice from "@/services/APIservice";

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

  return {
    categorias,
    busqueda,
    obtenerRecetas,
    recetas
  }
});
