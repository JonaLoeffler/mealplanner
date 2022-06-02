<template>
  <input type="checkbox" id="select-list-modal" class="modal-toggle" />
  <label for="select-list-modal" class="modal cursor-pointer p-2">
    <label class="modal-box relative" for="">
      <h3 class="text-lg font-bold">Liste wählen</h3>

      <div class="form-control" v-for="list in lists" :key="list.id">
        <label
          class="label cursor-pointer"
          :id="`select-${list.id}-${list.displayName}`"
        >
          <span class="label-text">{{ list.displayName }}</span>
          <input
            type="radio"
            :value="list"
            v-model="selection"
            class="radio radio-accent"
            :checked="selected && list.id == selected.id"
            :name="`select-${list.id}-${list.displayName}`"
          />
        </label>
      </div>

      <div class="modal-action">
        <label for="select-list-modal" class="btn">Fertig</label>
      </div>
    </label>
  </label>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";
import { List } from "../integrations/microsoft/types";

export default defineComponent({
  name: "SelectListModal",
  computed: {
    selection: {
      get(): List | undefined {
        return this.selected;
      },
      set(list: List) {
        this.$store.commit("list/select", list);
      },
    },
    ...mapGetters({
      lists: "list/all",
      selected: "list/selected",
    }),
  },
  methods: {
    ...mapActions({}),
  },
});
</script>
