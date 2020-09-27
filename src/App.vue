<template>
  <div class="max-wscr mx-auto">
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
        <SectionSupportExoapp/>
        <Footer/>
      </section>
    </div>
  </div>
</template>

<script>
import NavbarTop from "@/components/NavbarTop";
import NavbarBottom from "@/components/NavbarBottom";
import HeaderBanner from "@/components/HeaderBanner";
import Footer from "@/components/Footer";
import SectionMeetExoapp from "@/components/content/SectionMeetExoapp";
import SectionEcommerceExoapp from "@/components/content/SectionEcommerceExoapp";
import SectionDeliveryExoapp from "@/components/content/SectionDeliveryExoapp";
import SectionSupportExoapp from "@/components/content/SectionSupportExoapp";

export default {
  name: "App",
  components: {
    NavbarTop,
    NavbarBottom,
    HeaderBanner,
    SectionMeetExoapp,
    SectionEcommerceExoapp,
    SectionDeliveryExoapp,
    SectionSupportExoapp,
    Footer
  },
};
</script>
<style lang="css">
.max-wscr{
  max-width: 1400px;
}  
</style>
