<template>
  <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    <!-- Sidebar content here -->
    <li>
      <router-link to="/"
        ><h1 class="text-xl my-2">🍲 Jona's Essensplaner</h1></router-link
      >
    </li>

    <div class="divider"></div>

    <li>
      <router-link to="/recipes">🍔 Rezepte</router-link>
    </li>

    <li>
      <router-link to="/plan">➕Neuen Plan erstellen</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideMenu",
});
</script>
