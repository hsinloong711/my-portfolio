<template>
  <!-- <div
    class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-2 w-full"
  >
    Work section
  </div> -->

  <!-- Blank Header -->
  <div class="container flex justify-start items-center mx-auto w-11/12">
    <p class="h-5 md:h-7 lg:h-10"></p>
  </div>

  <!-- Container -->
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div
      class="container flex justify-between md:justify-center items-center mx-auto w-11/12"
    >
      <h3
        class="w-fit 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm text-black"
      >
        My Projects
      </h3>
    </div>
  </transition>

  <!-- Container -->
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div class="container flex justify-center mx-auto w-11/12 md:mt-10 mt-5">
      <!-- Project container -->
      <div
        class="rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-snow1 border-snow1"
      >
        <!-- Title container -->
        <div class="w-full flex justify-between p-2 md:p-3">
          <div class="flex">
            <div
              class="rounded-full h-6 w-6 md:h-8 md:w-8 flex items-center justify-center overflow-hidden"
            >
              <img src="/src/assets/vue.png" alt="Vue icon" />
            </div>
            <p class="pt-1 ml-2 lg:text-base md:text-md text-sm">Dragonate</p>
          </div>
        </div>

        <!-- Image container -->
        <a href="https://dragonate-bc9a8.web.app/" target="_blank">
          <img
            class="w-full bg-cover md:scale-100 md:hover:scale-105 ease-in duration-200"
            src="/src/assets/dragonate.png"
          />
        </a>
        <!-- Content -->
        <div class="px-3 pb-2">
          <div class="pt-2">
            <p class="lg:text-base md:text-md text-sm">What I learnt</p>
          </div>
          <div class="pt-1">
            <div class="mb-2 text-sm">
              <div class="flex">
                <div class="w-5 h-5">
                  <img src="/src/assets/correct.png" alt="" />
                </div>
                <p
                  class="word w-fit lg:max-w-xl lg:text-base md:text-md text-sm flex items-center pl-3 md:pl-5 lg:pl-3"
                >
                  Rest API
                </p>
              </div>
              <div class="flex">
                <div class="w-5 h-5">
                  <img src="/src/assets/correct.png" alt="" />
                </div>
                <p
                  class="word w-fit lg:max-w-xl lg:text-base md:text-md text-sm flex items-center pl-3 md:pl-5 lg:pl-3"
                >
                  Firebase
                </p>
              </div>
              <div class="flex">
                <div class="w-5 h-5">
                  <img src="/src/assets/correct.png" alt="" />
                </div>
                <p
                  class="word w-fit lg:max-w-xl lg:text-base md:text-md text-sm flex items-center pl-3 md:pl-5 lg:pl-3"
                >
                  Passing data between screens
                </p>
              </div>
              <div class="flex">
                <div class="w-5 h-5">
                  <img src="/src/assets/correct.png" alt="" />
                </div>
                <p
                  class="word w-fit lg:max-w-xl lg:text-base md:text-md text-sm flex items-center pl-3 md:pl-5 lg:pl-3"
                >
                  The importance of responsive design
                </p>
              </div>

              <!-- <div class="pt-2">
                <p class="word lg:text-base md:text-md text-sm">
                  This is real-time data upload website built with Firebase.
                  Users are able to register and login to their accounts. They
                  can now create each unique data that belongs to them.
                  <br /><br />On the home section, they can redirect themselves
                  to a purchase page by typing their address. Inside it is a
                  form which has validation function. We are now able to take
                  this user data and store it in our database.
                </p>
              </div> -->
            </div>
          </div>

          <div class="pt-2">
            <p class="lg:text-base md:text-md text-sm">Room for improvement</p>

            <div class="flex pt-2">
              <div class="w-5 h-5">
                <img src="/src/assets/sad.png" alt="" />
              </div>
              <p
                class="word w-fit lg:max-w-xl lg:text-base md:text-md text-sm flex items-center pl-3 md:pl-5 lg:pl-3"
              >
                Designed for desktop screens ONLY
              </p>
            </div>

            <div class="flex pt-2">
              <div class="w-5 h-5">
                <img src="/src/assets/sad.png" alt="" />
              </div>
              <p
                class="word w-fit lg:max-w-xl lg:text-base md:text-md text-sm flex items-center pl-3 md:pl-5 lg:pl-3"
              >
                No upload image and google map autocomplete function
              </p>
            </div>
            <!-- 
            <div class="pt-2">
              <p class="word lg:text-base md:text-md text-sm">
                I could have implemented the upload image and Google Map
                autocomplete function.
              </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
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
