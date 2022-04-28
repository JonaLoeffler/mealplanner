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
import { mapState, mapMutations } from "vuex";
import { defineComponent } from "vue";
import { Recipe } from "../../lib/types";

export default defineComponent({
  name: "Recipes",
  computed: {
    ...mapState(["recipes"]),
  },
  methods: {
    ...mapMutations(["setSelected"]),
    selectRecipe(recipe: Recipe) {
      this.setSelected(recipe);

      this.$router.push("/recipe");
    },
  },
});
</script>
