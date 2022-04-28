<template>
  <div class="container mx-auto">
    <button class="btn btn-primary" @click="plan">
      Erstelle neuen Essensplan!
    </button>
    <table class="table"></table>
  </div>
</template>

<script lang="ts">
import { Mealplan } from "../../lib/types";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Plan",
  methods: {
    plan(): void {
      console.log("planning now...");

      const plan: Mealplan = new Mealplan(new Date(), [], []);

      console.log(plan);
    },
  },
});
</script>
