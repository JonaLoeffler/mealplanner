<template>
  <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    <!-- Sidebar content here -->

    <li v-if="user">
      <label for="logout-modal" class="modal-button avatar placeholder">
        <div
          class="bg-neutral-focus text-neutral-content rounded-full w-16 h-16"
        >
          <span class="text-xl">{{ initials }}</span>
        </div>
        <div class="my-auto ml-3 text-lg">{{ user.name ?? user.username }}</div>
      </label>
    </li>

    <li v-if="!user">
      <button class="modal-button avatar placeholder" @click="login">
        <div
          class="bg-neutral-focus text-neutral-content rounded-full w-16 h-16"
        >
          <span class="text-xl">{{ initials }}</span>
        </div>
        <div class="my-auto ml-3 text-lg">Anmelden</div>
      </button>
    </li>

    <div class="divider"></div>

    <li>
      <router-link to="/">🍲 Jona's Essensplaner</router-link>
    </li>

    <li>
      <router-link to="/recipes">🍔 Rezepte</router-link>
    </li>

    <li>
      <router-link :to="{ name: 'Date' }">➕Neuen Plan erstellen</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideMenu",
  computed: {
    ...mapGetters({
      user: "auth/user",
      initials: "auth/initials",
    }),
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
  },
});
</script>
