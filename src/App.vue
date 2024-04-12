<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavbarLayout from "./Layouts/Navbar.vue";
</script>
<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/"></RouterLink>
    </div>
  </header>
  <NavbarLayout />
  <div class="max-width-7xl mx-auto pt-4"><RouterView /></div>
</template>
