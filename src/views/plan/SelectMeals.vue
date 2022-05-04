<template>
  <div
    class="card shadow-xl mb-3"
    v-for="day in days"
    v-bind:key="day.date.toISODate()"
  >
    <div class="card-body shadow-xl">
      <h2 class="card-title">
        {{ day.date.setLocale("de").toFormat("EEEE") }}
        <span class="float-right">
          {{ day.date.setLocale("de").toFormat("dd.MM.") }}
        </span>
      </h2>
      <div class="justify-start">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text font-bold">Mittags</span>
          </label>
          <select class="select select-bordered" v-model="day.lunch">
            <option disabled selected>-- Auswählen --</option>
            <option
              v-for="recipe in recipes"
              :key="recipe.title"
              :value="recipe"
            >
              {{ recipe.title }}
            </option>
          </select>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text font-bold">Abends</span>
          </label>
          <select class="select select-bordered" v-model="day.dinner">
            <option disabled selected>-- Auswählen --</option>
            <option
              v-for="recipe in recipes"
              :key="recipe.title"
              :value="recipe"
            >
              {{ recipe.title }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import { Day } from "../../../lib/types";

export default defineComponent({
  name: "SelectMeals",
  computed: {
    ...mapGetters({
      recipes: "recipes/all",
    }),
    days: {
      get() {
        return this.$store.getters["plan/getDays"];
      },
      set(days: Day[]) {
        //
      },
    },
  },
  mounted() {
    this.$store.dispatch("plan/initialize");
  },
});
</script>
