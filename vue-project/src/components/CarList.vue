<template>
  <div class="carlist-container">
    <h2 class="carlist-title">Lista de Carros</h2>

    <table class="carlist-table">
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Preço</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car.model">
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
          <td>R$ {{ car.price.toLocaleString("pt-BR") }}</td>
          <td>
            <span
              class="status"
              :class="{
                available: car.status === 'Disponível',
                sold: car.status === 'Vendido',
              }"
            >
              {{ car.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const cars = ref([
  { model: "Toyota Corolla", year: 2021, price: 95000, status: "Disponível" },
  { model: "Honda Civic", year: 2019, price: 87000, status: "Vendido" },
  { model: "Chevrolet Onix", year: 2020, price: 65000, status: "Disponível" },
  { model: "Ford Ka", year: 2018, price: 42000, status: "Vendido" },
])
</script>

<style>
.carlist-container {
  padding: 20px;
}

.carlist-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
}

.carlist-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.carlist-table thead {
  background-color: #1976d2;
  color: #fff;
}

.carlist-table th,
.carlist-table td {
  padding: 12px 16px;
  text-align: left;
}

.carlist-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.status {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: bold;
}

.status.available {
  background-color: #4caf50;
  color: white;
}

.status.sold {
  background-color: #f44336;
  color: white;
}
</style>
