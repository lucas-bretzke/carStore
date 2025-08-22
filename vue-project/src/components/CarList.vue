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
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car.model">
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
          <td>R$ {{ car.price.toLocaleString('pt-BR') }}</td>
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
          <td>
            <button class="action-btn view" @click="onView(car)">Visualizar</button>
            <button class="action-btn edit" @click="onEdit(car)">Editar</button>
            <button class="action-btn delete" @click="onDelete(car)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCarStore } from '../stores/car'

const carStore = useCarStore()
const { cars } = storeToRefs(carStore)

function onView(car: any) {
  alert(`Visualizar: ${car.model}`)
}

function onEdit(car: any) {
  alert(`Editar: ${car.model}`)
}

function onDelete(car: any) {
  alert(`Excluir: ${car.model}`)
}
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

.action-btn {
  margin-right: 6px;
  padding: 4px 10px;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}
.action-btn.view {
  background-color: #1976d2;
  color: #fff;
}
.action-btn.edit {
  background-color: #ffb300;
  color: #fff;
}
.action-btn.delete {
  background-color: #f44336;
  color: #fff;
}
.action-btn:hover {
  opacity: 0.85;
}
</style>
