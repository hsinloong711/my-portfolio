<template>
  <!-- Mobile menu -->
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div
      class="container md:flex md:justify-between h-screen items-start mx-auto w-12/12"
    >
      <div class="md:hidden flex flex-col mx-auto w-11/12 overflow-x-hidden">
        <div class="" @click="openMenu = !openMenu">
          <div class="flex pt-2 border-b-4 py-4">
            <div class="w-5 h-5 flex">
              <img class="" src="/src/assets/home.png" alt="Home icon" />

              <router-link
                class="w-fit lg:max-w-xl text-base flex items-center pl-3 md:pl-5 lg:pl-3 block"
                :to="{ name: 'home' }"
                >Home
              </router-link>
            </div>
          </div>

          <div class="flex pt-2 border-b-4 py-4">
            <div class="w-5 h-5">
              <img src="/src/assets/work.png" alt="Work icon" />
            </div>

            <router-link
              class="w-fit lg:max-w-xl text-base flex items-center pl-3 md:pl-5 lg:pl-3 block"
              :to="{ name: 'work' }"
              >Work</router-link
            >
          </div>

          <div class="flex pt-2 border-b-4 py-4">
            <div class="w-5 h-5">
              <img src="/src/assets/person.png" alt="Person icon" />
            </div>

            <router-link
              class="w-fit lg:max-w-xl text-base flex items-center pl-3 md:pl-5 lg:pl-3 block"
              :to="{ name: 'about' }"
              >About
            </router-link>
          </div>

          <div class="flex pt-2 border-b-4 py-4">
            <div class="w-5 h-5">
              <img src="/src/assets/phone.png" alt="Phone icon" />
            </div>

            <router-link
              class="w-fit lg:max-w-xl text-base flex items-center pl-3 md:pl-5 lg:pl-3 block"
              :to="{ name: 'contact' }"
              >Contact me</router-link
            >
          </div>
        </div>
      </div>
      <!-- Footer -->
      <div
        class="flex w-12/12 md:hidden lg:hidden justify-center items-center fixed inset-x-10 bottom-10 gap-5"
      >
        <div class="w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20">
          <a href="https://wa.me/60146686748" target="_blank">
            <img
              class="md:scale-100 md:hover:scale-125 ease-in duration-200"
              src="/src/assets/whatsapp.png"
              alt="Whatsapp icon"
              title="Whatsapp"
            />
          </a>
        </div>

        <div
          class="w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20 focus:outline-none focus:ring"
        >
          <a href="https://github.com/hsinloong711" target="_blank">
            <img
              class="md:scale-100 md:hover:scale-125 ease-in duration-200"
              src="/src/assets/github.png"
              alt="Github icon"
              title="Github"
            />
          </a>
        </div>
      </div>

      <div
        class="flex w-12/12 justify-center items-center fixed inset-x-1 bottom-1 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm"
      >
        <footer class="lg:text-base md:text-md text-sm text-grey">
          &copy; Gary Tsai 2022
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
export default {
  setup() {
    let mobile = ref(false);
    let openMenu = ref(false);

    const beforeEnter = (el) => {
      // el.style.transform = "translateY(-60px)";
      // el.style.transform = "translateY(-70px)";
      el.style.transform = "translateX(100px)";
      el.style.opacity = 0;
    };

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1,
        y: 0,
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
        onComplete: done,
      });
    };

    return { mobile, openMenu, enter, beforeEnter };
  },
};
</script>

<style></style>
