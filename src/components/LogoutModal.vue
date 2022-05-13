<template>
  <input type="checkbox" id="logout-modal" class="modal-toggle" />
  <label for="logout-modal" class="modal cursor-pointer p-2">
    <label class="modal-box relative" for="">
      <h3 class="text-lg font-bold">Abmelden</h3>
      <p class="py-4">
        Du bist eingeloggt als Jona Löffler. Möchtest du dich abmelden?
      </p>
      <div class="modal-action">
        <button class="btn" @click="logout">Abmelden</button>
      </div>
    </label>
  </label>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogoutModal",
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),
  },
});
</script>
