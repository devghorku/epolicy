<template>
  <div class="row">
    <div class="col-12 text-center ">
      <div class="f-36 f-md-30 f-xs-26 text-theme-dark flex justify-center text-weight-bold q-pa-sm-xl q-pa-xs-md">
        Trust
        <span class="q-mx-md">
               |
              </span>
        Transparency
        <span class="q-mx-md">
               |
              </span>
        Technology
      </div>

      <VueSlickCarousel v-bind="settings" class="q-pt-md own-slide">
        <div v-for="slide in sliders" :key="slide.name">
          <slide-card :slide="slide"></slide-card>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import SlideCard from "../_ui/slider-card";

export default {
  name: "home-slider",
  components: {SlideCard, VueSlickCarousel},
  data() {
    return {
      settings: {
        "centerPadding": "10px",
        "focusOnSelect": false,
        "infinite": false,
        "speed": 500,
        "variableWidth": false,
        "dots": false,
        "slidesToShow": 8,
        "slidesToScroll":1,
        "arrows": false,
        "centerMode":false,
        "responsive": [
          {
            "breakpoint": 1441,
            "settings": {
              "slidesToShow":7,
              "dots": true,
              "centerSlide":true
            },

          },
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 5,
              "dots": true,
            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 4,
              "slidesToScroll": 4,
              "dots": true,
            }
          },
          {
            "breakpoint": 425,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "dots": true,
            }
          },
          {
            "breakpoint": 320,
            "settings": {
              "slidesToShow": 1.5,
              "slidesToScroll": 2,
              "dots": true,
            }
          }
        ]

      },
      slide: 1,
      sliders: [
        {
          name: 'IRDAI Approved',
          img: require('@/assets/images/slider/irdai.png')
        },
        {
          name: 'Anonymous Quotes',
          img: require('@/assets/images/slider/quote.png')
        },
        {
          name: 'Right Amount and Term',
          img: require('@/assets/images/slider/right.png')
        },
        {
          name: "Cheap isn't always best",
          img: require("@/assets/images/slider/cheap.png")
        },
        {
          name: 'Dedicated Relationship Manager',
          img: require('@/assets/images/slider/dedicated.png')
        },
        {
          name: 'Service and Claim Assistance',
          img: require('@/assets/images/home/Service and clean assistance.svg')
        },
        {name: 'Freelook Cancellation', img: require('@/assets/images/home/Freelook cancellation.svg')},
      ]
    }
  }

}
</script>

<style scoped lang="scss">
</style>
<style lang="scss">
.slick-slide {
  div:focus {
    outline: none !important;
  }
}

.own-slide {
  margin-bottom: 70px;
    .slick-dots {
      bottom:-35px;
      :before {
        font-size: 15px !important;
      }
      li:hover,.slick-active{
        :before {
          color: $theme-green!important;
        }

      }
    }
}
</style>