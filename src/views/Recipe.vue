<template>
  <div class="container mx-auto">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body" v-if="recipe">
        <h2 class="card-title">{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>

        <div class="mt-4">
          <ingredients :ingredients="recipe.ingredients"></ingredients>
        </div>

        <div class="mt-4">
          <h2 class="font-bold">Schritte</h2>
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
import { mapGetters } from "vuex";
import Ingredients from "./../components/Ingredients.vue";

export default defineComponent({
  name: "Recipe",
  components: {
    Ingredients,
  },
  computed: {
    ...mapGetters({ recipe: "recipes/selected" }),
  },
});
</script>
