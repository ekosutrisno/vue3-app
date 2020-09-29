<template>
  <div class="container mx-auto">
    <HeaderBanner />
  </div>
  <section>
    <SectionMeetExoapp />
    <SectionEcommerceExoapp />
    <SectionDeliveryExoapp />
    <SectionSupportExoapp />
  </section>
</template>

<script>
import HeaderBanner from "@/components/HeaderBanner";
import SectionMeetExoapp from "@/components/content/SectionMeetExoapp";
import SectionEcommerceExoapp from "@/components/content/SectionEcommerceExoapp";
import SectionDeliveryExoapp from "@/components/content/SectionDeliveryExoapp";
import SectionSupportExoapp from "@/components/content/SectionSupportExoapp";
export default {
  name: "PageHome",
  components: {
    HeaderBanner,
    SectionMeetExoapp,
    SectionEcommerceExoapp,
    SectionDeliveryExoapp,
    SectionSupportExoapp,
  },
};
</script>

<style scoped>
</style>