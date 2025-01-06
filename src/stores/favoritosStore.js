import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidasStore";
import { ref, watch, onMounted } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

  const favoritos = ref([]);
  const bebidasStore = useBebidasStore();

  onMounted(() => {
    cargarLocalStorage();
  })

  watch(favoritos, () => {
    sincronizarLocalStorage()
  }, { deep: true })

  const cargarLocalStorage = () => {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos')) || [];
  }

  const sincronizarLocalStorage = () => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
  }

  const handleClickFavorito = () => {
    favoritos.value.push(bebidasStore.receta);
    console.log(favoritos.value);
  }

  return {
    handleClickFavorito,
    favoritos
  }
})
