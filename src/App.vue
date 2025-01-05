<script setup>
import HeaderComp from './components/HeaderComp.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <HeaderComp />

  <main class="container mx-auto mt-10">
    <RouterView />
  </main>
</template>
