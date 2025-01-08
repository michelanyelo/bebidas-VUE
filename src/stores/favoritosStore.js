import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidasStore";
import { useModalStore } from "./modalStore";
import { ref, watch, onMounted } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

  const favoritos = ref([]);
  const bebidasStore = useBebidasStore();
  const modalStore = useModalStore();

  onMounted(() => {
    cargarLocalStorage();
  })

  watch(favoritos, () => {
    sincronizarLocalStorage()
  }, { deep: true })

  function cargarLocalStorage() {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos')) || []
    return favoritos.value;
  };

  function sincronizarLocalStorage() {
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
  };

  function existeFavorito() {
    const favoritosLocalStorage = cargarLocalStorage();
    return favoritosLocalStorage.some(favorito => favorito.idDrink === bebidasStore.receta.idDrink);
  };

  function eliminarFavorito() {
    favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidasStore.receta.idDrink);
  };

  function agregarFavorito() {
    favoritos.value.push(bebidasStore.receta);
  };

  function handleClickFavorito() {
    if (existeFavorito()) {
      eliminarFavorito();
    } else {
      agregarFavorito();
    }
    modalStore.modal = false;
  };

  return {
    handleClickFavorito,
    favoritos,
    existeFavorito
  }
})
