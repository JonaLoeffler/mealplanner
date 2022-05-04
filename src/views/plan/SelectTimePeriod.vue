<template>
  <day-header />

  <div class="form-control w-full mb-3">
    <label class="label">
      <span class="label-text font-bold">Beginn</span>
    </label>
    <input
      name="start"
      type="date"
      class="input input-bordered w-full"
      v-model="_start"
    />
    <label class="label">
      <span class="label-text-alt" v-for="date in startDates" :key="date">
        <button
          class="btn btn-xs"
          @click="_start = $event.target.value"
          :value="date"
        >
          {{ date.setLocale("de").toFormat("EEE dd.MM.") }}
        </button>
      </span>
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
      v-model="_end"
    />
    <label class="label">
      <span class="label-text-alt" v-for="date in endDates" v-bind:key="date">
        <button
          class="btn btn-xs"
          @click="_end = $event.target.value"
          :value="date"
        >
          {{ date.setLocale("de").toFormat("EEE dd.MM.") }}
        </button>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import DayHeader from "./components/DayHeader.vue";

export default defineComponent({
  name: "SelectTimePeriod",
  components: { DayHeader },
  data() {
    return {
      startDates: [
        DateTime.now().plus({ days: 0 }),
        DateTime.now().plus({ days: 1 }),
        DateTime.now().plus({ days: 2 }),
        DateTime.now().plus({ days: 3 }),
      ],
      endDates: [
        DateTime.now().plus({ days: 4 }),
        DateTime.now().plus({ days: 5 }),
        DateTime.now().plus({ days: 6 }),
        DateTime.now().plus({ days: 7 }),
      ],
    };
  },
  computed: {
    ...mapGetters({
      start: "plan/getStart",
      end: "plan/getEnd",
      days: "plan/days",
    }),
    _start: {
      get(): DateTime {
        return this.start.toISODate();
      },
      set(value: string | DateTime): void {
        const date =
          value instanceof DateTime ? value : DateTime.fromISO(value);

        this.$store.dispatch("plan/setStart", date);
      },
    },
    _end: {
      get(): DateTime {
        return this.end.toISODate();
      },
      set(value: string | DateTime): void {
        const date =
          value instanceof DateTime ? value : DateTime.fromISO(value);

        this.$store.dispatch("plan/setEnd", date);
      },
    },
  },
});
</script>
