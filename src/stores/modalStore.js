import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFavoritosStore } from "./favoritosStore";
import { useBebidasStore } from "./bebidasStore";

export const useModalStore = defineStore("modal", () => {
  const favoritosStore = useFavoritosStore();
  const bebidasStore = useBebidasStore();
  const modal = ref(false);

  function handleClickModal() {
    modal.value = !modal.value;
  }

  const textoBoton = computed(() => {
    return favoritosStore.existeFavorito(bebidasStore.receta.idDrink) ? "Quitar de favoritos" : "Agregar a favoritos";
  });

  return {
    modal,
    handleClickModal,
    textoBoton
  }
})
