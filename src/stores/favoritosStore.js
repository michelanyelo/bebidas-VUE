import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidasStore";
import { ref, watch, onMounted } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

  const favoritos = ref([]);
  const bebidasStore = useBebidasStore();

  watch(favoritos, () => {
    sincronizarLocalStorage()
  }, { deep: true })

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
