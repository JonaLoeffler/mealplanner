<template>
  <div class="drawer h-screen w-screen">
    <input
      id="my-navbar-drawer"
      type="checkbox"
      class="drawer-toggle"
      ref="navbar"
    />
    <div class="drawer-content">
      <!-- Page content here -->
      <navbar />

      <div id="content" class="p-2">
        <router-view />
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-navbar-drawer" class="drawer-overlay"></label>
      <side-menu />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import SideMenu from "@/components/SideMenu.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    SideMenu,
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        (this.$refs.navbar as { checked: boolean }).checked = false;
      });
    },
  },
});
</script>

<style lang="scss" scoped>
#content {
  height: calc(100vh - 64px);
  overflow: auto;
}
</style>
