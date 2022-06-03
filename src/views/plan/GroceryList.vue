<template>
  <div class="container mx-auto">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
          Einkaufsliste
          <label
            for="select-list-modal"
            @click="fetch"
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
          <ingredients :ingredients="ingredients" v-slot="slotProps">
            <label class="label cursor-pointer">
              <input
                v-model="groceries"
                :value="JSON.parse(JSON.stringify(slotProps.ingredient))"
                type="checkbox"
                checked="checked"
                class="checkbox checkbox-secondary"
              />
            </label>
          </ingredients>
        </div>

        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="sendToList">
            Zur Liste hinzufügen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { defineComponent } from "vue";
import { Ingredient } from "../../../lib/types";
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
    groceries: {
      get(): Ingredient[] {
        return this.$store.getters["groceries/all"];
      },
      set(items: Ingredient[]): void {
        this.$store.commit("groceries/set", items);
      },
    },
  },
  methods: {
    ...mapActions({
      sendToList: "groceries/sendToTodoList",
    }),
    fetch() {
      if (this.$store.getters["auth/user"]) this.$store.dispatch("list/fetch");
    },
  },
  mounted() {
    this.groceries = this.ingredients;
  },
});
</script>
