<template>
  <div class="flex flex-col mb-10">
    <span class="text-9xl text-center">
      {{ days.toFixed(0) }}
    </span>
    <div class="text-4xl text-center">
      <span v-if="days == 1">Tag</span>
      <span v-else>Tage</span>
    </div>
    <div class="text-2xl text-center">
      <span>{{ start.setLocale("de").toFormat("EEEE") }}</span>
      -
      <span>{{ end.setLocale("de").toFormat("EEEE") }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DayHeader",
  computed: {
    ...mapGetters({
      start: "plan/getStart",
      end: "plan/getEnd",
      days: "plan/days",
    }),
  },
});
</script>
