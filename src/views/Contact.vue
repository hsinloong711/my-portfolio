<template>
  <!-- Blank header -->
  <div class="container flex justify-start items-center mx-auto w-11/12">
    <p class="h-5 md:h-7 lg:h-10">&nbsp;</p>
  </div>

  <!-- Container -->
  <div class="container md:flex md:justify-between items-start mx-auto w-11/12">
    <!-- Left -->
    <div class="w-11/12 md:space-y-10 space-y-5">
      <h3 class="w-fit 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm">
        Contact me
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
          class="word flex justify-center w-full lg:max-w-xl 3xl:text-3xl 2xl:text-xl lg:text-md md:text-md text-sm md:py-3 md:px-5 py-3 px-2 rounded-lg bg-snow1"
        >
          Send
        </button>
      </form>
    </div>

    <!-- Right -->
    <div class="w-8/12 flex justify-end">
      <img
        class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
        src="src/assets/sunny.png"
        alt="user image"
      />
    </div>
  </div>
</template>

<script></script>

<style>
.word {
  font-weight: 400;
}
</style>
