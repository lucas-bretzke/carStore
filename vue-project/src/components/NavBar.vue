<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <span class="mdi mdi-car" aria-label="Logo" style="font-size: 2rem"></span>
      <span class="system-name">CarStore</span>
    </div>
    <ul class="navbar-list">
      <li>
        <router-link to="/" class="navbar-link">
          <span class="mdi mdi-home"></span>
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/details" class="navbar-link">
          <span class="mdi mdi-car-info"></span>
          Details
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css');

.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 0.5rem 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar-list {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0 2rem;
  align-items: center;
  margin-left: auto;
}
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding-left: 2rem;
}
.system-name {
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
}
.navbar-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition:
    background 0.2s,
    color 0.2s;
}
.navbar-link:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffe082;
}
.mdi {
  font-size: 1.3rem;
}
</style>
