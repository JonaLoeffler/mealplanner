<template>
  <div>
    <h2 class="font-bold">Zutaten</h2>
    <div class="overflow-x-auto">
      <table class="table table-compact w-full">
        <tbody>
          <tr v-for="ingredient in ingredients" v-bind:key="ingredient">
            <td class="text-right">{{ formatAmount(ingredient) }}</td>
            <td>{{ formatUnit(ingredient) }}</td>
            <td>{{ ingredient.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Ingredient, unit } from "../../lib/types";

export default defineComponent({
  name: "Ingredients",
  props: {
    ingredients: {
      type: Object as PropType<Ingredient[]>,
      required: true,
    },
  },
  methods: {
    formatAmount(ingredient: Ingredient): string {
      switch (ingredient.unit) {
        case "pound":
          return (ingredient.amount * 453.5924).toFixed(1);
        case "cup":
          return (ingredient.amount * 236.5882).toFixed(1);
        case "tsp":
          return (ingredient.amount * 4.9289215).toFixed(1);
        default:
          return ingredient.amount.toFixed(1);
      }
    },
    formatUnit(ingredient: Ingredient): unit {
      switch (ingredient.unit) {
        case "pound":
          return "g";
        case "cup":
          return "ml";
        case "tsp":
          return "g";
        case "pc":
          return "Stk.";
        default:
          return ingredient.unit;
      }
    },
  },
});
</script>
