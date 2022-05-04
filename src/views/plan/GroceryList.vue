<template>
  <div class="container mx-auto">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Einkaufsliste</h2>
        <p>
          {{ start.setLocale("de").toFormat("EEE dd.MM.") }} -
          {{ end.setLocale("de").toFormat("EEE dd.MM.") }}
        </p>

        <div class="mt-4">
          <ingredients :ingredients="ingredients" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import Ingredients from "../recipes/components/Ingredients.vue";

export default defineComponent({
  name: "GroceryList",
  components: {
    Ingredients,
  },
  computed: {
    ...mapGetters({
      start: "plan/getStart",
      end: "plan/getEnd",
      ingredients: "plan/ingredients",
    }),
  },
});
</script>
