<template>
  <div class="">
    <router-view class="" />

    <ul class="steps w-full absolute bottom-0 mb-2">
      <li
        class="step"
        :class="classObject(step.name)"
        v-for="step in steps"
        v-bind:key="step.name"
      >
        <router-link :to="{ name: step.name }">{{ step.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Plan",
  data() {
    return {
      steps: [
        { name: "Date", title: "Zeitraum" },
        { name: "Meals", title: "Mahlzeiten" },
        { name: "Groceries", title: "Einkaufsliste" },
      ],
    };
  },
  methods: {
    classObject: function (name: string) {
      const current = this.steps.findIndex((s) => s.name == this.$route.name);
      const index = this.steps.findIndex((s) => s.name == name);

      return { "step-primary": current >= index };
    },
  },
});
</script>
