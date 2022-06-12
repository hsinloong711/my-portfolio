<template>
  <!-- Blank header -->
  <div class="container flex justify-start items-center mx-auto w-11/12">
    <p class="h-5 md:h-7 lg:h-10">&nbsp;</p>
  </div>

  <!-- Container -->
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div
      class="container md:flex md:justify-between items-start mx-auto w-11/12"
    >
      <!-- Left -->
      <div class="w-12/12 md:w-11/12 md:space-y-10 space-y-5">
        <h3
          class="w-fit 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm"
        >
          Message me
        </h3>

        <form
          action="https://formsubmit.co/2073c46851e96bd5a19f2b3de5efce90"
          method="POST"
          class=""
        >
          <input
            class="word flex w-full lg:max-w-xl 3xl:text-3xl 2xl:text-xl lg:text-md md:text-md text-sm md:py-3 md:px-5 py-3 px-2 rounded-lg bg-snow1 mb-5 md:mb-10"
            type="text"
            placeholder="Name"
            autocomplete="none"
            required
          />
          <input
            class="word flex w-full lg:max-w-xl 3xl:text-3xl 2xl:text-xl lg:text-md md:text-md text-sm md:py-3 md:px-5 py-3 px-2 rounded-lg bg-snow1 mb-5 md:mb-10"
            type="email"
            name="email"
            placeholder="E-mail Address"
            autocomplete="none"
            required
          />

          <textarea
            class="word flex w-full lg:max-w-xl 3xl:text-3xl 2xl:text-xl lg:text-md md:text-md text-sm md:pb-20 md:px-5 py-3 px-2 rounded-lg bg-snow1 mb-5 md:mb-10 scrollbar resize-none"
            placeholder="Description"
            rows="5"
            cols="10"
            wrap="soft"
            autocomplete="none"
          ></textarea>

          <button
            type="submit"
            class="word flex justify-center w-full lg:max-w-xl 3xl:text-3xl 2xl:text-xl lg:text-md md:text-md text-sm md:py-3 md:px-5 py-3 px-2 rounded-lg bg-snow1 hover:text-green focus:outline-none focus:ring focus:ring-snow1"
          >
            Send
          </button>
        </form>
      </div>
      <!-- Right -->
      <div
        class="w-12/12 md:w-11/12 h-full hidden md:flex flex justify-center items-center gap-6 mt-5 md:mt-0 lg:mt-0 3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[3 50px]"
      >
        <div class="w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20 lg:mb-20">
          <a href="https://wa.me/60146686748" target="_blank">
            <img
              class="md:scale-100 md:hover:scale-125 ease-in duration-200"
              src="/src/assets/whatsapp.png"
              alt="Whatsapp icon"
              title="Whatsapp"
            />
          </a>
        </div>

        <div class="w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20 lg:mb-20">
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
    </div>
  </transition>

  <div
    class="hidden md:flex w-12/12 justify-center items-center fixed inset-x-1 bottom-1 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm"
  >
    <footer class="lg:text-base md:text-md text-sm text-grey">
      &copy; Gary Tsai 2022
    </footer>
  </div>
</template>

<script>
import gsap from "gsap";
import { ref } from "vue";

export default {
  setup() {
    let hideFooter = ref("false");

    const beforeEnter = (el) => {
      el.style.transform = "translateY(5px)";
      el.style.opacity = 0;
    };

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        // ease: "power3.inOut",
        onComplete: done,
      });
    };

    return { enter, beforeEnter, hideFooter };
  },
};
</script>

<style>
.word {
  font-weight: 400;
}
</style>
