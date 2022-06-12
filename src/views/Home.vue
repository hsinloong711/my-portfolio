<template>
  <!-- Snow toggle button -->
  <div
    @click="sunny = !sunny"
    class="container flex justify-end items-center mx-auto w-11/12 animate-bounce"
  >
    <img
      v-if="sunny"
      class="w-8 md:w-8 lg:w-10"
      src="/src/assets/sunny.png"
      width="40"
      alt="Sun icon"
    />

    <img
      v-else
      class="w-8 md:w-8 lg:w-10"
      src="/src/assets/snowflake.png"
      width="40"
      alt="Snow icon"
    />
  </div>

  <!-- Container -->
  <div
    class="container md:flex md:justify-between flex justify-between items-start mx-auto w-11/12"
  >
    <!-- Left -->
    <div class="w-11/12 md:space-y-10 space-y-1.5">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <h3
          class="w-fit 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm"
        >
          Hello,
        </h3>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <h1
          class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-bold leading-tight"
        >
          I am Gary Tsai, <br />
          A Self-taught <br />Developer.
        </h1>
      </transition>
      <!-- Icons -->
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div
          class="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-3 gap-5 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg bg-snow1"
        >
          <div
            @click="handleHtml = !handleHtml"
            class="w-6 h-6 md:w-10 md:h-10 lg:w-20 lg:h-20"
          >
            <img
              v-if="!handleHtml"
              src="/src/assets/html.png"
              alt="HTML icon"
              title="HTML"
            />
            <img
              v-else
              src="/src/assets/html.gif"
              alt="HTML icon"
              title="HTML"
            />
          </div>

          <div
            @click="handleCss = !handleCss"
            class="w-6 h-6 md:w-10 md:h-10 lg:w-20 lg:h-20"
          >
            <img
              v-if="handleCss"
              src="/src/assets/css.png"
              alt="CSS icon"
              title="CSS"
            />
            <img
              v-else
              src="/src/assets/css.png"
              alt="CSS icon"
              class="animate-pulse"
              title="CSS"
            />
          </div>

          <div
            @click="handleJs = !handleJs"
            class="w-6 h-6 md:w-10 md:h-10 lg:w-20 lg:h-20"
          >
            <img
              v-if="handleJs"
              src="/src/assets/js.png"
              alt="Javascript icon"
              title="Javascript"
            />
            <img
              v-else
              src="/src/assets/js.gif"
              alt="Javascript icon"
              title="Javascript"
            />
          </div>

          <div
            @click="handleRn = !handleRn"
            class="w-6 h-6 md:w-10 md:h-10 lg:w-20 lg:h-20"
          >
            <img
              v-if="handleRn"
              src="/src/assets/react-native.png"
              alt="React Native icon"
              title="React Native"
            />
            <img
              v-else
              src="/src/assets/react-native.gif"
              alt="React Native icon"
              title="React Native"
            />
          </div>

          <div
            @click="handleVue = !handleVue"
            class="w-6 h-6 md:w-10 md:h-10 lg:w-20 lg:h-20"
          >
            <img
              v-if="!handleVue"
              src="/src/assets/vue.png"
              alt="Vue icon"
              title="Vue icon"
              class="animate-spin"
            />
            <img v-else src="/src/assets/vue.png" alt="Vue icon" title="Vue" />
          </div>
        </div>
      </transition>
    </div>

    <!-- Right -->
    <div class="w-8/12 flex justify-end">
      <img
        class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[3 50px]"
        src="/src/assets/profile.png"
        alt="user image"
      />
    </div>
  </div>

  <!-- Snowy -->

  <div
    v-if="!sunny"
    class="snowflakes md:text-2xl lg:text-4xl"
    aria-hidden="true"
  >
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❄</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❄</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❄</div>
  </div>

  <!-- Wavy -->
  <div class="hidden md:block">
    <div class="custom-shape-divider-bottom-1653339622">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ref } from "vue";
export default {
  setup() {
    let sunny = ref("true");
    let handleHtml = ref("false");
    let handleCss = ref("false");
    let handleJs = ref("false");
    let handleRn = ref("false");
    let handleVue = ref("false");

    const beforeEnter = (el) => {
      // el.style.transform = "translateY(-60px)";
      // el.style.transform = "translateY(-70px)";
      el.style.transform = "translateY(20px)";
      el.style.opacity = 0;
    };

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: "power3.inOut",
        onComplete: done,
      });
    };

    return {
      sunny,
      handleHtml,
      handleCss,
      handleJs,
      handleRn,
      handleVue,
      beforeEnter,
      enter,
    };
  },
};
</script>

<style>
/* customizable snowflake styling */
.snowflake {
  color: #ecfeff;
  font-size: 2em;
  /* text-shadow: 0 0 1px #000; */
}

@-webkit-keyframes snowflakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes snowflakes-shake {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  50% {
    -webkit-transform: translateX(80px);
    transform: translateX(80px);
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
}
@keyframes snowflakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@keyframes snowflakes-shake {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(80px);
  }
  100% {
    transform: translateX(0px);
  }
}
.snowflake {
  position: fixed;
  top: -10%;
  z-index: 9999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  -webkit-animation-name: snowflakes-fall, snowflakes-shake;
  -webkit-animation-duration: 10s, 3s;
  -webkit-animation-timing-function: linear, ease-in-out;
  -webkit-animation-iteration-count: infinite, infinite;
  -webkit-animation-play-state: running, running;
  animation-name: snowflakes-fall, snowflakes-shake;
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
}
.snowflake:nth-of-type(0) {
  left: 1%;
  -webkit-animation-delay: 0s, 0s;
  animation-delay: 0s, 0s;
}
.snowflake:nth-of-type(1) {
  left: 10%;
  -webkit-animation-delay: 1s, 1s;
  animation-delay: 1s, 1s;
}
.snowflake:nth-of-type(2) {
  left: 20%;
  -webkit-animation-delay: 6s, 0.5s;
  animation-delay: 6s, 0.5s;
}
.snowflake:nth-of-type(3) {
  left: 30%;
  -webkit-animation-delay: 4s, 2s;
  animation-delay: 4s, 2s;
}
.snowflake:nth-of-type(4) {
  left: 40%;
  -webkit-animation-delay: 2s, 2s;
  animation-delay: 2s, 2s;
}
.snowflake:nth-of-type(5) {
  left: 50%;
  -webkit-animation-delay: 8s, 3s;
  animation-delay: 8s, 3s;
}
.snowflake:nth-of-type(6) {
  left: 60%;
  -webkit-animation-delay: 6s, 2s;
  animation-delay: 6s, 2s;
}
.snowflake:nth-of-type(7) {
  left: 70%;
  -webkit-animation-delay: 2.5s, 1s;
  animation-delay: 2.5s, 1s;
}
.snowflake:nth-of-type(8) {
  left: 80%;
  -webkit-animation-delay: 1s, 0s;
  animation-delay: 1s, 0s;
}
.snowflake:nth-of-type(9) {
  left: 90%;
  -webkit-animation-delay: 3s, 1.5s;
  animation-delay: 3s, 1.5s;
}
/* Demo Purpose Only*/
.demo {
  font-family: "Raleway", sans-serif;
  color: #fff;
  display: block;
  margin: 0 auto;
  padding: 15px 0;
  text-align: center;
}
.demo a {
  font-family: "Raleway", sans-serif;
  color: #000;
}

.custom-shape-divider-bottom-1653339622 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1653339622 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 115px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1653339622 .shape-fill {
  fill: #ecfeff;
}
</style>
