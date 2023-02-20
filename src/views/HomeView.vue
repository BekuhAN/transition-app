<template>
  <div>
    <HeaderComponent />
    <PromoComponent />
    <SectionPark />
    <AdvantagesSection />
    <AboutSection />
    <FooterLayout />
    <CopyRightComponent />
  </div>
</template>
<script>
import HeaderComponent from './../components/Header.vue';
import FooterLayout from './../components/Footer.vue';
import PromoComponent from './../components/Promo.vue';
import SectionPark from './../components/sections/Park.vue';
import AdvantagesSection from './../components/sections/Advantages.vue';
import AboutSection from './../components/sections/About.vue';
import CopyRightComponent from './../components/Copyright.vue';

export default {
  components: {
    HeaderComponent,
    PromoComponent,
    SectionPark,
    AdvantagesSection,
    AboutSection,
    FooterLayout,
    CopyRightComponent,
  },
};
</script>
<style lang="scss"></style>
