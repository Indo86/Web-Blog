<script setup>
import { toggleMenu } from '@/assets/js/scripts.js';
</script>

<template>
<nav>
  <div class="logo">
    <h2>My.Blog</h2>
  </div>
  <div class="menu">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/About">About Me</router-link></li>
      <li><router-link to="/Blog">My Blog</router-link></li>
    </ul>
  </div>
  <div class="button">
    <router-link to="/CreatePost">
      <button type="submit">
        Write Blog
      </button>
     
    </router-link>
 
  </div>
  <!-- Hamburger Menu -->
  <div class="hamburger" @click="toggleMenu()">
    ☰
  </div>
</nav>

</template>

<style scoped></style>