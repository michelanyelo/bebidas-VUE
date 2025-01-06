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

  const cargarLocalStorage = () => favoritos.value = JSON.parse(localStorage.getItem('favoritos')) || [];

  const sincronizarLocalStorage = () => localStorage.setItem('favoritos', JSON.stringify(favoritos.value));

  const existeFavorito = (id) => {
    const favoritosLocalStorage = cargarLocalStorage();
    return favoritosLocalStorage.some(favorito => favorito.idDrink === id);
  }

  const handleClickFavorito = () => {
    if (existeFavorito(bebidasStore.receta.idDrink)) {
      favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidasStore.receta.idDrink);
      // console.log('Ya existe en favoritos');
    } else {
      favoritos.value.push(bebidasStore.receta);
    }
  }

  return {
    handleClickFavorito,
    favoritos,
    existeFavorito
  }
})
