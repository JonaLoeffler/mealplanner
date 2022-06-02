<template>
  <div class="container mx-auto">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
          Einkaufsliste
          <label
            for="select-list-modal"
            class="btn btn-accent btn-xs float-right modal-button"
          >
            <span v-if="selected">{{ displayName }}</span>
            <span v-else>keine Liste ausgewählt</span>
          </label>
        </h2>
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
      lists: "list/all",
      selected: "list/selected",
      displayName: "list/truncatedDisplayName",
    }),
  },
  mounted() {
    if (this.$store.getters["auth/user"]) this.$store.dispatch("list/fetch");
  },
});
</script>
