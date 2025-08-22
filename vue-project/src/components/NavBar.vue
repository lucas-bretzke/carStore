<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/details">Details</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
}
nav {
  margin-bottom: 2rem;
}
</style>
