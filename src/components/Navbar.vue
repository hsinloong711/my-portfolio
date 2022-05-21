<template>
  <header class="py-6">
    <div
      v-show="!mobile"
      class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-2 w-full"
    >
      <a href="" class="text-xl">Gary Tsai</a>
      <div class="hidden md:flex space-x-12 items-center text-base">
        <router-link class="" :to="{ name: 'home' }"> Home.</router-link>
        <router-link class="router" :to="{ name: 'work' }">Work.</router-link>
        <router-link class="router" :to="{ name: 'about' }">About.</router-link>
        <router-link class="text-black" :to="{ name: 'contact' }"
          >Contact me.</router-link
        >
      </div>
      <div @click="openMenu = !openMenu" class="md:hidden flex justify-between">
        <button class="outline-none mobile-menu-button">
          <svg
            class="w-6 h-6 text-gray-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <ul v-if="openMenu" class="md:hidden flex flex-col px-8 h-screen">
      <transition>
        <div class="" @click="openMenu = !openMenu">
          <router-link
            class="block py-4 border-b-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            :to="{ name: 'home' }"
          >
            Home.</router-link
          >
          <router-link class="block py-4 border-b-4" :to="{ name: 'work' }"
            >Work.</router-link
          >
          <router-link class="block py-4 border-b-4" :to="{ name: 'about' }"
            >About.</router-link
          >
          <router-link class="block py-4 border-b-4" :to="{ name: 'contact' }"
            >Contact</router-link
          >
        </div>
      </transition>
    </ul>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let mobile = ref(false);
    let openMenu = ref(false);

    return { mobile, openMenu };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
* {
  font-family: "Fredoka One", cursive;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
</style>
