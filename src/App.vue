<template>
  <div class="bg-snow h-screen text-black pb-12">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style></style>
