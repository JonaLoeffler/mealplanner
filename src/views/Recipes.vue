<template>
  <div class="container mx-auto">
    <ul class="menu bg-base-100 p-2 rounded-box">
      <li class="menu-title">
        <span>Alle Rezepte</span>
      </li>
      <li v-for="recipe in recipes" v-bind:key="recipe.title">
        <router-link to="/recipe">{{ recipe.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import recipes from "../../data/recipes";

export default defineComponent({
  name: "Recipes",
  data() {
    return {
      recipes: recipes,
    };
  },
});
</script>
