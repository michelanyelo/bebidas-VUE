<script setup>
import HeaderComp from './components/HeaderComp.vue';
import { RouterView } from 'vue-router';
import ModalComp from './components/ModalComp.vue';
import NotificacionComp from './components/NotificacionComp.vue';

</script>

<template>
  <HeaderComp />

  <main class="container mx-auto mt-10">
    <RouterView />
  </main>

  <ModalComp />
  <NotificacionComp />
</template>
