<template>
  <container>
    <button class="add-car-btn" @click="showModal = true">Adicionar Carro</button>
    <AddCarModal :visible="showModal" @close="showModal = false" @save="handleSave" />
    <h2 class="text-h5 font-weight-bold mb-4">🏠 Home</h2>
    <p class="mb-6">Bem-vindo à página inicial da Car Store!</p>

    <CarList />
  </container>
</template>

<script setup lang="ts">
import CarList from '../components/CarList.vue'
import AddCarModal from '../components/AddCarModal.vue'
import { ref } from 'vue'

const showModal = ref(false)
function handleSave(car: any) {
  // Lógica para salvar o carro
  console.log('Novo carro cadastrado:', car)
}
</script>

<style scoped>
p {
  font-size: 1.1rem;
  color: #555;
}
.add-car-btn {
  background: #1976d2;
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: background 0.2s;
}
.add-car-btn:hover {
  background: #1565c0;
}
</style>
