<template>
  <div class="mx-3">
    <h2>Zeitraum</h2>

    <div class="form-control w-full mb-3">
      <label class="label">
        <span class="label-text font-bold">Beginn</span>
      </label>
      <input
        name="start"
        type="date"
        class="input input-bordered w-full"
        :value="mealplan.start.toFormat('yyyy-mm-dd')"
        @input="mealplan.start = $event.target.value"
      />
      <label class="label">
        <span
          class="label-text-alt"
          v-for="button in startDates"
          v-bind:key="button.text"
          ><button
            class="btn btn-xs"
            @click="this.mealplan.start = button.value"
          >
            {{ button.text }}
          </button></span
        >
      </label>
    </div>

    <div class="form-control w-full mb-3">
      <label class="label">
        <span class="label-text font-bold">Ende</span>
      </label>
      <input
        name="start"
        type="date"
        class="input input-bordered w-full"
        :value="mealplan.end.toFormat('yyyy-mm-dd')"
        @input="mealplan.end = $event.target.value"
      />
      <label class="label">
        <span
          class="label-text-alt"
          v-for="button in endDates"
          v-bind:key="button.text"
          ><button class="btn btn-xs" @click="this.mealplan.end = button.value">
            {{ button.value.setLocale("de").toFormat("EEE, dd.mm.") }}
          </button></span
        >
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectTimePeriod",
  data() {
    return {
      startDates: [
        {
          text: "Heute",
          value: DateTime.now().plus({ days: 0 }),
        },
        {
          text: "Morgen",
          value: DateTime.now().plus({ days: 1 }),
        },
        {
          text: "Übermorgen",
          value: DateTime.now().plus({ days: 2 }),
        },
        {
          text: "in 3 Tagen",
          value: DateTime.now().plus({ days: 3 }),
        },
      ],
      endDates: [
        {
          value: DateTime.now().plus({ days: 4 }),
        },
        {
          value: DateTime.now().plus({ days: 5 }),
        },
        {
          value: DateTime.now().plus({ days: 6 }),
        },
        {
          value: DateTime.now().plus({ days: 7 }),
        },
      ],
      mealplan: {
        start: DateTime.now(),
        end: DateTime.now().plus({ days: 4 }),
      },
    };
  },
});
</script>
