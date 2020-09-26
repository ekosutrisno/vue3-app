<template>
  <div class="box-border pb-20 lg:pb-0 bg-gray-900 min-h-screen">
    <div class="container mx-auto">
      <NavbarTop />
      <HeaderBanner />
      <NavbarBottom />
    </div>
    <section>
      <SectionMeetExoapp />
      <SectionEcommerceExoapp />
      <SectionDeliveryExoapp />
    </section>
  </div>
</template>

<script>
import NavbarTop from "@/components/NavbarTop";
import NavbarBottom from "@/components/NavbarBottom";
import HeaderBanner from "@/components/HeaderBanner";
import SectionMeetExoapp from "@/components/content/SectionMeetExoapp";
import SectionEcommerceExoapp from "@/components/content/SectionEcommerceExoapp";
import SectionDeliveryExoapp from "@/components/content/SectionDeliveryExoapp";

export default {
  name: "App",
  components: {
    NavbarTop,
    NavbarBottom,
    HeaderBanner,
    SectionMeetExoapp,
    SectionEcommerceExoapp,
    SectionDeliveryExoapp,
  },
};
</script>
