<template>
  <div class="container mx-auto">
    <ul class="menu bg-base-100 p-2 rounded-box">
      <li class="menu-title">
        <span>Alle Rezepte</span>
      </li>
      <li v-for="recipe in recipes" v-bind:key="recipe.title">
        <a class="" v-on:click="selectRecipe(recipe)">
          {{ recipe.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from "vuex";
import { defineComponent } from "vue";
import { Recipe } from "../../lib/types";

export default defineComponent({
  name: "Recipes",
  computed: {
    ...mapGetters({ recipes: "recipes/all" }),
  },
  methods: {
    ...mapMutations({ select: "recipes/select" }),
    selectRecipe(recipe: Recipe) {
      this.select(recipe);

      this.$router.push("/recipe");
    },
  },
});
</script>
