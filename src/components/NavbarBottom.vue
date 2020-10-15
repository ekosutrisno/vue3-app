<template>
  <!-- Wrapper -->
  <div
    class="nav-transition w-auto bottom-0 left-0 right-0 fixed border-t bg-gray-900 border-gray-700 lg:hidden z-10"
  >
    <!-- Wrapper Div button  -->
    <div class="mx-auto lg:mx-4 py-3 px-2 md:mx-6 md:py-5 flex justify-between">
      <!-- Wrapper Buttonn -->
      <div class="flex flex-col md:flex-row items-center justify-around">
        <router-link
          to="/"
          class="text-gray-300 hover:text-green-500 focus:outline-none hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span class="md:pl-3 text-sm md:text-base font-semibold">
              Home
            </span>
          </div>
        </router-link>

        <!-- End Wrapper Button  -->
      </div>
      <div class="flex flex-col md:flex-row items-center justify-around">
        <router-link
          to="/product"
          class="text-gray-300 hover:text-green-500 focus:outline-none hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span class="md:pl-3 text-sm md:text-base font-semibold">
              Product
            </span>
          </div>
        </router-link>

        <!-- End Wrapper Button  -->
      </div>
      <div class="flex flex-col md:flex-row items-center justify-around">
        <router-link
          to="/developer"
          class="text-gray-300 hover:text-green-500 focus:outline-none hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <span class="md:pl-3 text-sm md:text-base font-semibold">
              Developers
            </span>
          </div>
        </router-link>

        <!-- End Wrapper Button  -->
      </div>
      <div class="flex flex-col md:flex-row items-center justify-around">
        <router-link
          to="/resource"
          class="text-gray-300 hover:text-green-500 focus:outline-none hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
            <span class="md:pl-3 text-sm md:text-base font-semibold">
              Resources
            </span>
          </div>
        </router-link>

        <!-- End Wrapper Button  -->
      </div>
      <div class="flex flex-col md:flex-row items-center justify-around">
        <router-link
          to="/pricing"
          class="text-gray-300 hover:text-green-500 focus:outline-none hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <span class="md:pl-3 text-sm md:text-base font-semibold">
              Pricing
            </span>
          </div>
        </router-link>

        <!-- End Wrapper Button  -->
      </div>

      <!-- End Wrapper Div Button  -->
    </div>

    <!-- End Wrapper -->
  </div>
</template>

<script>
export default {
  name: "NavbarBottom",
};
</script>
<style scoped>
.nav-transition {
  animation: 0.5s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>