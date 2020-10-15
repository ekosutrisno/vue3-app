<template>
  <div class="max-wscr mx-auto">
    <div class="box-border pb-20 lg:pb-0 bg-gray-900 min-h-screen">
      <div class="container mx-auto">
        <NavbarTop />
        <NavbarBottom />
      </div>
      <section class="min-h-screen nav-transition">
          <router-view />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  </div>
</template>

<script>
import NavbarTop from "@/components/NavbarTop";
import NavbarBottom from "@/components/NavbarBottom";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    NavbarTop,
    NavbarBottom,
    Footer,
  },
};
</script>
<style lang="css">
.max-wscr {
  max-width: 1400px;
}
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
