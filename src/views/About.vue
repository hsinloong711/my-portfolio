<template>
  <!-- Blank header -->
  <div class="container flex justify-end items-center mx-auto w-11/12">
    <p class="h-5 md:h-7 lg:h-10">&nbsp;</p>
  </div>

  <!-- Container -->
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div
      class="container md:flex md:justify-between items-start mx-auto w-11/12"
    >
      <!-- Left -->
      <div class="w-12/12 flex justify-start">
        <img
          class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
          src="/src/assets/profile1.png"
          alt="user image"
        />
      </div>

      <!-- Right -->
      <div class="w-12/12 flexspace-y-3 md:space-y-5">
        <h3
          class="w-fit 3xl:text-3xl 2xl:text-xl text-base text-blue py-2 mt-2 md:mt-0"
        >
          Self-introduction
        </h3>

        <!-- max-h-28 md:max-h-72 lg:max-h-96 overflow-auto md:overflow-auto lg:overflow-hidden -->
        <div
          class="grid w-fit mt-0 md:mt-5 lg:mt-5 md:py-3 md:px-5 py-1 px-2 rounded-lg bg-snow1"
        >
          <p class="word w-fit lg:max-w-xl 3xl:text-3xl 2xl:text-xl text-base">
            I am Gary Tsai from Kuala Lumpur, Malaysia. I am an ex-hairstylist,
            trying to switch career in tech. I have been studying programming
            since July 2021, starting with C language as a side interest.
            <br /><br />
            I officially started my full-time programming journey on November
            2021 by joining a self-taught programme from Sigma School, where I
            learn more about modern programming including frameworks like Vue,
            React Native.
            <br />
            <br />
            I am now seeking an entry-level programming job to help me further
            improve myself as a junior programmer.
          </p>
        </div>

        <h3
          class="w-fit lg:block md:block 3xl:text-3xl 2xl:text-xl text-base text-blue py-2 mt-2 md:mt-0"
        >
          Fun facts about me
        </h3>

        <div class="md:max-h-32 md:overflow-auto lg:overflow-auto scrollbar">
          <div class="flex w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg bg-snow1">
            <div class="w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20">
              <img src="/src/assets/code.png" alt="" />
            </div>
            <p
              class="word w-fit lg:max-w-xl 3xl:text-3xl 2xl:text-xl text-base flex items-center pl-3 md:pl-5 lg:pl-6"
            >
              I practise coding everyday.
            </p>
          </div>
          <div
            class="flex w-fit mt-5 md:py-3 md:px-5 py-1 px-2 rounded-lg bg-snow1"
          >
            <div class="w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20">
              <img src="/src/assets/keyboard.png" alt="" />
            </div>
            <p
              class="word w-fit lg:max-w-xl 3xl:text-3xl 2xl:text-xl text-base flex items-center pl-3 md:pl-5 lg:pl-6"
            >
              I can type up to 183 words per minute.
            </p>
          </div>

          <div
            class="flex w-fit mt-5 md:py-3 md:px-5 py-1 px-2 rounded-lg bg-snow1"
          >
            <div class="w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20">
              <img src="/src/assets/exercise.png" alt="" />
            </div>
            <p
              class="word w-fit lg:max-w-xl 3xl:text-3xl 2xl:text-xl text-base flex items-center pl-3 md:pl-5 lg:pl-6"
            >
              I exercise 5 times a week.
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";

export default {
  setup() {
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
    return { enter, beforeEnter };
  },
};
</script>
<style>
.word {
  font-weight: 400;
}
</style>
