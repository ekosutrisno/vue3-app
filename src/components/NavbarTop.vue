<template>
  <div class="flex items-center justify-between py-4 px-4 lg:px-0 h-full">
    <!-- Links and Logo Brand -->
    <div class="flex items-center justify-start space-x-4">
      <router-link to="/" class="focus:outline-none">
        <img
          class="w-32"
          src="https://shoppy.gg/assets/img/logo.3a9ebb7.svg"
          alt="logo-brand"
        />
      </router-link>
      <router-link
        :to="link.to"
        v-for="link in links"
        :key="link.id"
        class="nav-transition hidden lg:flex items-center text-lg space-x-3 py-0 px-4 font-medium text-gray-300 border-none outline-none focus:outline-none hover:text-gray-400"
      >
        <span>{{ link.label }}</span>
        <svg
          v-show="link.icon"
          class="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </router-link>
    </div>

    <div class="">
      <button
        class="lg:hidden text-gray-300 hover:text-gray-400 focus:outline-none"
      >
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
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div
        class="nav-transition hidden lg:flex items-center justify-between space-x-4"
      >
        <router-link
          to="/sigin"
          class="py-2 px-6 rounded-lg font-medium text-gray-300 bg-transparent hover:bg-gray-800 border focus:outline-none transition-colors duration-200 ease-in-out"
        >
          Sign In
        </router-link>
        <router-link
          to="/signup"
          class="py-2 px-6 rounded-lg font-medium text-gray-300 bg-green-600 hover:bg-green-500 focus:outline-none transition-colors duration-200 ease-in-out"
        >
          Sign Up
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarTop",
  data() {
    return {
      links: [
        {
          id: 1,
          to: "/product",
          label: "Product",
          icon: true,
          isActive: false,
        },
        {
          id: 2,
          to: "/developer",
          label: "Developer",
          icon: true,
          isActive: false,
        },
        {
          id: 3,
          to: "/resource",
          label: "Resources",
          icon: true,
          isActive: false,
        },
        {
          id: 4,
          to: "/pricing",
          label: "Pricing",
          icon: false,
          isActive: false,
        },
      ],
    };
  },
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
