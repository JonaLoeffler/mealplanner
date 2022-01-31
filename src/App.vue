<template>
  <div class="mb-1">
    <navbar />
  </div>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";

@Options({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>
