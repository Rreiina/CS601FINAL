<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/skills">Skills</RouterLink>
        <RouterLink to="/hobby">Hobby</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

  <RouterView />
</template>

<style scoped>

nav a {
  display: inline-block;
  font-size: x-large;
  font-family: 'Times New Roman', Times, serif;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: rgb(224, 219, 219); 
  text-decoration: none; 
  transition: color 0.3s ease, background-color 0.3s ease; 
}

nav a:hover {
  background-color: #ff69b4;
  color: rgb(19, 17, 17); 
}


nav {
  text-align: right;
  margin-left: -2rem;
  font-size: 2rem;
  padding: 1rem 0;
  margin-top: 1rem;
}

</style>

