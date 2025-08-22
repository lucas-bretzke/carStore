import { defineStore } from 'pinia'

export const useCarStore = defineStore('car', {
  state: () => ({
    cars: [
      { model: 'Toyota Corolla', year: 2021, price: 95000, status: 'Disponível' },
      { model: 'Honda Civic', year: 2019, price: 87000, status: 'Vendido' },
      { model: 'Chevrolet Onix', year: 2020, price: 65000, status: 'Disponível' },
      { model: 'Ford Ka', year: 2018, price: 42000, status: 'Vendido' },
      { model: 'Volkswagen Gol', year: 2022, price: 58000, status: 'Disponível' },
      { model: 'Fiat Argo', year: 2023, price: 72000, status: 'Disponível' },
      { model: 'Renault Kwid', year: 2021, price: 49000, status: 'Vendido' },
      { model: 'Hyundai HB20', year: 2020, price: 67000, status: 'Disponível' },
      { model: 'Jeep Compass', year: 2022, price: 135000, status: 'Disponível' },
      { model: 'Nissan Versa', year: 2019, price: 56000, status: 'Vendido' },
    ],
  }),
})
