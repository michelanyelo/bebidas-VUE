import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidasStore";
import { useModalStore } from "./modalStore";
import { useNotificacionStore } from "./notificacionStore";
import { ref, watch, onMounted, computed } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

  const favoritos = ref([]);
  const bebidasStore = useBebidasStore();
  const modalStore = useModalStore();
  const notificacionStore = useNotificacionStore();

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

    notificacionStore.mostrar = true;
    notificacionStore.error = true;
    notificacionStore.texto = `${bebidasStore.receta.strDrink} quitada/o de favoritos`;

  };

  function agregarFavorito() {
    favoritos.value.push(bebidasStore.receta);

    notificacionStore.mostrar = true;
    notificacionStore.texto = `${bebidasStore.receta.strDrink} agregada/o a favoritos`;
  };

  function handleClickFavorito() {
    if (existeFavorito()) {
      eliminarFavorito();
    } else {
      agregarFavorito();
    }
    modalStore.modal = false;
  };

  const noFavoritos = computed(() => favoritos.value.length === 0);

  return {
    handleClickFavorito,
    favoritos,
    existeFavorito,
    noFavoritos
  }
})
