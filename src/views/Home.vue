<template>
  <div class="home">
    <banner-form></banner-form>
    <div :class="{'bg-light':$q.screen.lt.lg}">
      <div v-if="$q.screen.lt.lg" class="f-30 text-weight-bold text-center q-py-xl">Click to get a quote</div>
      <quote-section class="q-pb-xl"></quote-section>
    </div>

    <home-slider :class="$q.screen.lt.lg?'bg-white':'bg-light'"/>
    <partner :class="{'bg-light':$q.screen.lt.lg}"/>
    <testimonial :class="$q.screen.lt.lg?'bg-white':'bg-light'"></testimonial>
    <contact-us :class="{'bg-light':$q.screen.lt.lg}"/>
  </div>
</template>

<script>

import BannerForm from "../components/home/banner-form";
import HomeSlider from "../components/home/home-slider";
import Partner from "../components/home/partner";
import ContactUs from "../components/home/contact-us";
import QuoteSection from "../components/quote-section";
import Testimonial from "../components/home/testimonial";

export default {
  name: 'Home',
  components: {Testimonial, QuoteSection, ContactUs, Partner, HomeSlider, BannerForm}
}
</script>
