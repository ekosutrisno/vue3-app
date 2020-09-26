<template>
  <div class="flex flex-col lg:flex-row items-start px-8 py-4">
    <div class="w-full lg:w-1/3 flex flex-col items-center lg:items-start mb-10 lg:mb-0">
      <span class="text-3xl text-gray-300 font-semibold mb-4 text-center lg:text-left"
        >Sell Digital Goods Online
        </span
      >
      <span class="text-gray-300 text-lg mb-10 text-center lg:text-left">
        Shoppy is an all-in-one payment processing and e-commerce solution.
        Accept payments, sell digital products from your own and more, do it all
        with a single platform.
      </span>
      <div class="mb-10">
         <button
          class="py-3 px-6 rounded-lg font-medium text-gray-300 bg-green-600 hover:bg-green-500 focus:outline-none transition-colors duration-200 ease-in-out"
        >
          Create Account
        </button>
      </div>
      <div class="flex items-center space-x-5">
       <button
          class="py-2 px-6 rounded-lg font-medium text-gray-300 bg-transparent hover:bg-gray-800 border focus:outline-none transition-colors duration-200 ease-in-out"
        >
          <img src="https://shoppy.gg/assets/img/applestore.f9c0ecd.png" alt="appstore">
        </button>
        <button
          class="py-2 px-6 rounded-lg font-medium text-gray-300 bg-transparent hover:bg-gray-800 border focus:outline-none transition-colors duration-200 ease-in-out"
        >
          <img src="https://shoppy.gg/assets/img/googleplay.ad04d50.png" alt="playstore">
        </button>
      </div>
    </div>
    <div class="w-full lg:w-2/3">
      <img
        src="https://shoppy.gg/assets/img/header_image.05280df.svg"
        alt="ilustration"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBanner",
};
</script>

<style scoped>
</style>