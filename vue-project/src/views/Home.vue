<template>
  <v-container>
    <h2 class="text-h5 font-weight-bold mb-4">🏠 Home</h2>
    <p class="mb-6">Bem-vindo à página inicial da Car Store!</p>

    <CarList />
  </v-container>
</template>

<script setup lang="ts">
import CarList from '../components/CarList.vue'
</script>

<style scoped>
p {
  font-size: 1.1rem;
  color: #555;
}
</style>
