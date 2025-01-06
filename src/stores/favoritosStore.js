import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidasStore";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

  const favoritos = ref([]);
  const { receta } = useBebidasStore();

  const handleClickFavorito = () => {
    favoritos.value.push(receta);
    console.log(favoritos.value);
  }

  return {
    handleClickFavorito,
    favoritos
  }
})
