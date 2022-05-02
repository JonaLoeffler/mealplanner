<template>
  <div class="mx-3">
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
        <span
          class="label-text-alt"
          v-for="button in startDates"
          v-bind:key="button.text"
        >
          <button
            class="btn btn-xs"
            @click="_start = $event.target.value"
            :value="button.value"
          >
            {{ button.text }}
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
  </div>
</template>

<script lang="ts">
import { DateTime } from "luxon";
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectTimePeriod",
  data() {
    return {
      startDates: [
        { text: "Heute", value: DateTime.now().plus({ days: 0 }) },
        { text: "Morgen", value: DateTime.now().plus({ days: 1 }) },
        { text: "Übermorgen", value: DateTime.now().plus({ days: 2 }) },
        { text: "in 3 Tagen", value: DateTime.now().plus({ days: 3 }) },
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
    }),
    days: function (): number {
      return this.end.diff(this.start, "days").days;
    },
    _start: {
      get(): DateTime {
        return this.$store.getters["plan/getStart"].toISODate();
      },
      set(value: string | DateTime): void {
        const date =
          value instanceof DateTime ? value : DateTime.fromISO(value);

        this.$store.commit("plan/setStart", date);
      },
    },
    _end: {
      get(): DateTime {
        return this.$store.getters["plan/getEnd"].toISODate();
      },
      set(value: string | DateTime): void {
        const date =
          value instanceof DateTime ? value : DateTime.fromISO(value);

        this.$store.commit("plan/setEnd", date);
      },
    },
  },
});
</script>
