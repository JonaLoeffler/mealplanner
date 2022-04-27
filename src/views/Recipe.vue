<template>
  <div class="container mx-auto">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>

        <div class="mt-4">
          <h3>Zutaten</h3>
          <ul>
            <li
              v-for="ingredient in recipe.ingredients"
              v-bind:key="ingredient"
            >
              {{ ingredient.amount }} {{ ingredient.unit }}
              {{ ingredient.name }}
            </li>
          </ul>
        </div>

        <div class="mt-4">
          <h3>Schritte</h3>
          <ul>
            <li v-for="step in recipe.steps" v-bind:key="step" class="mb-2">
              {{ step.description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import recipes from "../../data/recipes";

export default defineComponent({
  name: "Recipe",
  data() {
    return {
      recipe: recipes[0],
    };
  },
});
</script>
