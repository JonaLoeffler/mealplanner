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
        value=""
      />
      <label class="label">
        <span class="label-text-alt"
          ><button class="btn btn-xs">Heute</button></span
        >
        <span class="label-text-alt"
          ><button class="btn btn-xs">Morgen</button></span
        >
        <span class="label-text-alt"
          ><button class="btn btn-xs">Übermorgen</button></span
        >
        <span class="label-text-alt"
          ><button class="btn btn-xs">in 3 Tagen</button></span
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
        value=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectTimePeriod",
  data() {
    return {
      start: Date.now(),
      end: Date.now(),
    };
  },
});
</script>
