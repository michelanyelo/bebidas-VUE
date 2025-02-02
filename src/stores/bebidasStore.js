import { defineStore } from "pinia";
import { ref, onMounted, reactive, computed } from "vue";
import APIservice from "@/services/APIService.js";
import { useModalStore } from "./modalStore";

export const useBebidasStore = defineStore('bebidas', () => {
  const modalStore = useModalStore();
  const categorias = ref([]);
  const busqueda = reactive({
    nombre: '',
    categoria: ''
  })
  const recetas = ref([]);
  const receta = ref({});

  onMounted(async function () {
    const { data: { drinks } } = await APIservice.obtenerCategorias();
    categorias.value = drinks;
  })

  async function obtenerRecetas() {
    const { data: { drinks } } = await APIservice.buscarRecetas(busqueda);
    recetas.value = drinks;
  }

  async function seleccionarReceta(id) {
    const { data: { drinks } } = await APIservice.buscarReceta(id);
    receta.value = drinks[0];

    modalStore.handleClickModal();
  }

  const noBebidas = computed(() => recetas.value.length === 0);

  return {
    categorias,
    busqueda,
    obtenerRecetas,
    recetas,
    seleccionarReceta,
    receta,
    noBebidas
  }
});
