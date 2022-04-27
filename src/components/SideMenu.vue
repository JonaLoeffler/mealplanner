<template>
  <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    <!-- Sidebar content here -->
    <li class="text-lg">
      <router-link to="/"> 🍲 Jona's Essensplaner </router-link>
    </li>
    <div class="divider"></div>
    <li><router-link to="/recipes">🍔 Rezepte</router-link></li>
  </ul>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class SideMenu extends Vue {}
</script>
