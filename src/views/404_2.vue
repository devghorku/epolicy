<template>
  <div class="home">
    <div class="q-pa-xs-md q-pa-md-xl">
      <h4 class="text-center">
        We're working on it for any further information you can directly contact us
      </h4>
    </div>
    <contact-us/>
    <quote-section/>
  </div>
</template>

<script>

import ContactUs from "../components/home/contact-us";
import QuoteSection from "@/components/quote-section";


export default {
  name: '404',
  components: {QuoteSection, ContactUs}
}
</script>
