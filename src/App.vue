<template>
  <div class="drawer h-screen w-full rounded">
    <input
      id="my-navbar-drawer"
      type="checkbox"
      class="drawer-toggle"
      ref="navbar"
    />
    <div class="drawer-content">
      <!-- Page content here -->
      <navbar />
      <router-view />
    </div>
    <div class="drawer-side">
      <label for="my-navbar-drawer" class="drawer-overlay"></label>
      <side-menu />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import SideMenu from "@/components/SideMenu.vue";

@Options({
  components: {
    Navbar,
    SideMenu,
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.$refs.navbar.checked = false;
      });
    },
  },
})
export default class App extends Vue {}
</script>
