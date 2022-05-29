<template>
  <div class="bg-snow min-h-screen text-black pb-12">
    <Navbar />
    <router-view> </router-view>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, Footer },
};
</script>

<style>
@import url(//db.onlinewebfonts.com/c/c8e8fcd5d85d9b587022fe0a79809b73?family=Friz+Quadrata);
* {
  font-family: "Friz Quadrata";
  font-weight: 700;
}
</style>
