<template>
  <div>
    <h2 class="font-bold">
      Zutaten

      <button class="btn btn-xs capitalize float-right" @click="toggle">
        {{ target }}
      </button>
    </h2>

    <div class="overflow-x-auto">
      <table class="table table-compact w-full">
        <tbody>
          <tr v-for="ingredient in converted" v-bind:key="ingredient">
            <td class="text-right">{{ ingredient.amount.toFixed(1) }}</td>
            <td>
              <span v-if="!['pc', 'Stk.'].includes(ingredient.unit)">{{
                ingredient.unit
              }}</span>
            </td>
            <td>{{ ingredient.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Ingredient } from "../../../../lib/types";
import { convert, Target } from "../../../../lib/convert";

export default defineComponent({
  name: "Ingredients",
  props: {
    ingredients: {
      type: Object as PropType<Ingredient[]>,
      required: true,
    },
  },
  data(): { target: Target } {
    return {
      target: "metric",
    };
  },
  methods: {
    toggle: function () {
      const next: { metric: Target; imperial: Target; original: Target } = {
        metric: "imperial",
        imperial: "original",
        original: "metric",
      };

      this.target = next[this.target];
    },
  },
  computed: {
    conversion: function () {
      return (ingredient: Ingredient) => convert(ingredient, this.target);
    },
    converted: function () {
      return this.ingredients.map(this.conversion);
    },
  },
});
</script>
