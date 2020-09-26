<template>
  <div class="box-border pb-20 lg:pb-0 bg-gray-900 min-h-screen">
    <div class="container mx-auto">
      <NavbarTop />
      <HeaderBanner />
      <NavbarBottom />
    </div>
  </div>
</template>

<script>
import NavbarTop from "@/components/NavbarTop";
import NavbarBottom from "@/components/NavbarBottom";
import HeaderBanner from "@/components/HeaderBanner";

export default {
  name: "App",
  components: { NavbarTop, NavbarBottom, HeaderBanner },
};
</script>
